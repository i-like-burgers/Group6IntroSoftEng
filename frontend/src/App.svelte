<script>
    import { onMount } from 'svelte';

    let currentPage = 'storefront';
    let products = [];
    let product = null;
    let compareItems = [];
    let cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };
    let order = null;
    let selectedPaymentMethod = 'demo_card';
    let loading = true;
    let errorMessage = '';
    let statusMessage = '';

    function getPath() {
        return typeof window === 'undefined' ? '/buyer/home' : window.location.pathname;
    }

    function getProductIdFromPath() {
        const match = getPath().match(/\/buyer\/products\/(\d+)/);
        return match ? Number(match[1]) : null;
    }

    function getOrderIdFromPath() {
        const match = getPath().match(/\/buyer\/orders\/(\d+)\/confirmation/);
        return match ? Number(match[1]) : null;
    }

    function detectPage() {
        const path = getPath();

        if (path === '/buyer/cart') {
            return 'cart';
        }

        if (path === '/buyer/checkout') {
            return 'checkout';
        }

        if (path === '/buyer/compare') {
            return 'compare';
        }

        if (/\/buyer\/orders\/\d+\/confirmation$/.test(path)) {
            return 'confirmation';
        }

        if (/\/buyer\/products\/\d+$/.test(path)) {
            return 'product';
        }

        return 'storefront';
    }

    function getPageTitle() {
        if (currentPage === 'cart') {
            return 'Buyer Cart';
        }

        if (currentPage === 'checkout') {
            return 'Checkout Review';
        }

        if (currentPage === 'compare') {
            return 'Compare Products';
        }

        if (currentPage === 'confirmation') {
            return 'Order Confirmation';
        }

        if (currentPage === 'product') {
            return 'Product Detail';
        }

        return 'Buyer Storefront';
    }

    async function fetchJson(url, options = {}) {
        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type') || '';
        const data = contentType.includes('application/json') ? await response.json() : null;

        if (!response.ok) {
            throw new Error(data?.error || 'Request failed');
        }

        return data;
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    function formatDate(value) {
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(new Date(value));
    }

    function formatPaymentMethod(paymentMethod) {
        if (paymentMethod === 'demo_card') {
            return 'Demo Credit Card';
        }

        return paymentMethod;
    }

    function truncate(text, maxLength) {
        if (!text) return '';
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    async function loadProducts(resetStatus = false) {
        loading = true;
        errorMessage = '';
        if (resetStatus) statusMessage = '';

        try {
            products = await fetchJson('/api/buyer/products');
        } catch (error) {
            errorMessage = error.message || 'Could not load products.';
        } finally {
            loading = false;
        }
    }

    async function loadProductDetail() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const productId = getProductIdFromPath();
            product = await fetchJson(`/api/buyer/products/${productId}`);
        } catch (error) {
            errorMessage = error.message || 'Could not load product.';
        } finally {
            loading = false;
        }
    }

    async function loadCart() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            cart = await fetchJson('/api/buyer/cart');
        } catch (error) {
            errorMessage = error.message || 'Could not load cart.';
        } finally {
            loading = false;
        }
    }

    async function loadCompare() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const response = await fetchJson('/api/buyer/compare');
            compareItems = response.items || [];
        } catch (error) {
            errorMessage = error.message || 'Could not load comparison list.';
        } finally {
            loading = false;
        }
    }

    async function loadOrderConfirmation() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const orderId = getOrderIdFromPath();
            order = await fetchJson(`/api/buyer/orders/${orderId}`);
            statusMessage = 'Your order has been placed successfully.';
        } catch (error) {
            errorMessage = error.message || 'Could not load order confirmation.';
        } finally {
            loading = false;
        }
    }

    async function loadCurrentPage() {
        currentPage = detectPage();

        if (currentPage === 'cart') {
            await loadCart();
            return;
        }

        if (currentPage === 'checkout') {
            await loadCart();
            return;
        }

        if (currentPage === 'compare') {
            await loadCompare();
            return;
        }

        if (currentPage === 'confirmation') {
            await loadOrderConfirmation();
            return;
        }

        if (currentPage === 'product') {
            await loadProductDetail();
            return;
        }

        await loadProducts();
    }

    async function addToCart(productId) {
        statusMessage = '';

        try {
            await fetchJson('/api/buyer/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId,
                    quantity: 1
                })
            });

            statusMessage = 'Item added to cart.';
        } catch (error) {
            statusMessage = error.message || 'Could not add item to cart.';
        }
    }

    async function addToComparison(productId) {
        statusMessage = '';

        try {
            await fetchJson('/api/buyer/compare', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId
                })
            });

            statusMessage = 'Item added to comparison list.';
        } catch (error) {
            statusMessage = error.message || 'Could not add item to list.';
        }
    }

    async function removeFromCart(cartItemId) {
        statusMessage = '';

        try {
            await fetchJson(`/api/buyer/cart/${cartItemId}/remove`, {
                method: 'POST'
            });

            statusMessage = 'Item removed from cart.';
            await loadCart();
        } catch (error) {
            statusMessage = error.message || 'Could not remove item.';
        }
    }

    async function removeFromCompare(productId) {
        statusMessage = '';

        try {
            await fetchJson(`/api/buyer/compare/${productId}/remove`, {
                method: 'POST'
            });

            statusMessage = 'Item removed from comparison list.';
            await loadCompare();
        } catch (error) {
            statusMessage = error.message || 'Could not remove item.';
        }
    }

    async function placeOrder() {
        statusMessage = '';

        try {
            const result = await fetchJson('/api/buyer/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    paymentMethod: selectedPaymentMethod
                })
            });

            window.location.href = `/buyer/orders/${result.order.id}/confirmation`;
        } catch (error) {
            statusMessage = error.message || 'Checkout failed.';
            await loadCart();
        }
    }

    async function logout() {
        statusMessage = '';

        try {
            await fetchJson('/api/logout', {
                method: 'POST'
            });

            window.location.href = '/login';
        } catch (error) {
            statusMessage = error.message || 'Could not log out.';
        }
    }

    onMount(async () => {
        await loadCurrentPage();
    });
</script>

<svelte:head>
    <title>{getPageTitle()}</title>
</svelte:head>

<div class="page-shell" data-page={currentPage}>
    <section class="hero">
        <div>
            <p class="eyebrow">Buyer Frontend Preview</p>
            <h1>Random Access Market</h1>
            <p class="intro">
                A Svelte-powered buyer interface running on top of the existing Express, Prisma, and MySQL stack.
            </p>
        </div>

        <div class="hero-actions">
            <a href="/buyer/home" class="action-link">Storefront</a>
            <a href="/buyer/cart" class="action-link">Cart</a>
            <a href="/buyer/checkout" class="action-link">Checkout</a>
            <a href="/buyer/compare" class="action-link">Compare</a>
            <a href="/buyer/classic/home" class="action-link secondary">Classic UI</a>
            <button class="action-link logout-button" on:click={logout}>Log Out</button>
        </div>
    </section>

    <section class="catalog">
        <div class="catalog-header">
            <div>
                <p class="section-kicker">
                    {#if currentPage === 'cart'}
                        Cart summary
                    {:else if currentPage === 'compare'}
                        Side-by-side shortlist
                    {:else if currentPage === 'checkout'}
                        Checkout review
                    {:else if currentPage === 'confirmation'}
                        Purchase complete
                    {:else if currentPage === 'product'}
                        Product spotlight
                    {:else}
                        Live inventory
                    {/if}
                </p>
                <h2>
                    {#if currentPage === 'cart'}
                        Your cart
                    {:else if currentPage === 'compare'}
                        Compare products
                    {:else if currentPage === 'checkout'}
                        Review your order
                    {:else if currentPage === 'confirmation'}
                        Order confirmation
                    {:else if currentPage === 'product'}
                        Hardware details
                    {:else}
                        Available hardware
                    {/if}
                </h2>
            </div>
            <button class="refresh-button" on:click={loadCurrentPage}>Refresh</button>
        </div>

        {#if loading}
            <div class="state-card">Loading products...</div>
        {:else if errorMessage}
            <div class="state-card error">{errorMessage}</div>
        {:else if currentPage === 'storefront' && products.length === 0}
            <div class="state-card">No listed products are available right now.</div>
        {:else if currentPage === 'product' && product}
            <article class="detail-card">
                <div class="detail-meta">
                    <span class="seller">{product.seller.username}</span>
                    <span class="stock">{product.stock} in stock</span>
                </div>

                <div class="detail-layout">
                    <div>
                        <h3>{product.name}</h3>
                        <p class="detail-price">{formatCurrency(product.price)}</p>
                    </div>
                    <div class="detail-actions">
                        <button on:click={() => addToCart(product.id)}>Add to cart</button>
                        <button class="secondary" on:click={() => addToComparison(product.id)}>Compare</button>
                    </div>
                </div>

                <p class="detail-description">{product.description || 'No description provided.'}</p>
                <a class="detail-link" href="/buyer/home">Back to storefront</a>
            </article>
        {:else if currentPage === 'cart'}
            <div class="cart-layout">
                <div class="panel">
                    {#if cart.items.length === 0}
                        <div class="state-card">Your cart is empty.</div>
                    {:else}
                        <div class="list-grid">
                            {#each cart.items as item}
                                <article class="line-card">
                                    <div>
                                        <p class="seller">{item.product.seller.username}</p>
                                        <h3>{item.product.name}</h3>
                                        <p class="description">
                                            Quantity {item.quantity} at {formatCurrency(item.product.price)} each
                                        </p>
                                    </div>
                                    <div class="line-actions">
                                        <p class="price">{formatCurrency(item.product.price * item.quantity)}</p>
                                        <button class="secondary" on:click={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </article>
                            {/each}
                        </div>
                    {/if}
                </div>

                <aside class="summary-panel">
                    <p>Subtotal</p>
                    <strong>{formatCurrency(cart.subtotal)}</strong>
                    <p>Estimated tax</p>
                    <strong>{formatCurrency(cart.tax)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(cart.total)}</strong>
                    <a class="checkout-link" href="/buyer/checkout">Review checkout</a>
                </aside>
            </div>
        {:else if currentPage === 'checkout'}
            <div class="cart-layout">
                <div class="panel">
                    {#if cart.items.length === 0}
                        <div class="state-card">Your cart is empty. Return to the storefront before checking out.</div>
                    {:else}
                        <div class="list-grid">
                            {#each cart.items as item}
                                <article class="line-card">
                                    <div>
                                        <p class="seller">{item.product.seller.username}</p>
                                        <h3>{item.product.name}</h3>
                                        <p class="description">
                                            Quantity {item.quantity} at {formatCurrency(item.product.price)} each
                                        </p>
                                    </div>
                                    <div class="line-actions">
                                        <p class="price">{formatCurrency(item.product.price * item.quantity)}</p>
                                    </div>
                                </article>
                            {/each}
                        </div>
                    {/if}
                </div>

                <aside class="summary-panel">
                    <p>Subtotal</p>
                    <strong>{formatCurrency(cart.subtotal)}</strong>
                    <p>Estimated tax</p>
                    <strong>{formatCurrency(cart.tax)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(cart.total)}</strong>
                    <div class="payment-box">
                        <p class="payment-label">Payment method</p>
                        <button
                            class:selected={selectedPaymentMethod === 'demo_card'}
                            class="payment-choice"
                            on:click={() => { selectedPaymentMethod = 'demo_card'; statusMessage = 'Demo credit card selected.'; }}
                        >
                            Demo credit card ending in 4242
                        </button>
                    </div>
                    <div class="checkout-actions">
                        <button class="checkout-link place-order-button" on:click={placeOrder} disabled={cart.items.length === 0}>
                            Place order
                        </button>
                        <a class="checkout-link secondary-link" href="/buyer/cart">Back to cart</a>
                        <a class="checkout-link secondary-link" href="/buyer/classic/checkout">Classic checkout</a>
                    </div>
                </aside>
            </div>
        {:else if currentPage === 'confirmation' && order}
            <div class="cart-layout">
                <div class="panel">
                    <div class="list-grid">
                        {#each order.items as item}
                            <article class="line-card">
                                <div>
                                    <p class="seller">Seller ID {item.sellerId}</p>
                                    <h3>{item.productName}</h3>
                                    <p class="description">
                                        Quantity {item.quantity} at {formatCurrency(item.unitPrice)} each
                                    </p>
                                </div>
                                <div class="line-actions">
                                    <p class="price">{formatCurrency(item.lineTotal)}</p>
                                </div>
                            </article>
                        {/each}
                    </div>
                </div>

                <aside class="summary-panel">
                    <p>Order number</p>
                    <strong>#{order.id}</strong>
                    <p>Status</p>
                    <strong>{order.status}</strong>
                    <p>Payment method</p>
                    <strong>{formatPaymentMethod(order.paymentMethod)}</strong>
                    <p>Placed at</p>
                    <strong>{formatDate(order.createdAt)}</strong>
                    <p>Subtotal</p>
                    <strong>{formatCurrency(order.subtotal)}</strong>
                    <p>Tax</p>
                    <strong>{formatCurrency(order.taxAmount)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(order.total)}</strong>
                    <div class="checkout-actions">
                        <a class="checkout-link" href="/buyer/home">Continue shopping</a>
                        <a class="checkout-link secondary-link" href={`/buyer/classic/orders/${order.id}/confirmation`}>Classic confirmation</a>
                    </div>
                </aside>
            </div>
        {:else if currentPage === 'compare'}
            {#if compareItems.length === 0}
                <div class="state-card">No products marked for comparison.</div>
            {:else}
                <div class="product-grid compare-grid">
                    {#each compareItems as item}
                        <article class="product-card">
                            <div class="card-topline">
                                <span class="seller">Comparison item</span>
                                <span class="stock">{formatCurrency(item.price)}</span>
                            </div>

                            <h3>{item.name}</h3>
                            <p class="description">{truncate(item.description || '', 160)}</p>

                            <div class="card-footer">
                                <div>
                                    <a class="detail-link" href={`/buyer/products/${item.id}`}>View details</a>
                                </div>

                                <div class="card-actions">
                                    <button on:click={() => addToCart(item.id)}>Add to cart</button>
                                    <button class="secondary" on:click={() => removeFromCompare(item.id)}>Remove</button>
                                </div>
                            </div>
                        </article>
                    {/each}
                </div>
            {/if}
        {:else}
            <div class="product-grid">
                {#each products as product}
                    <article class="product-card">
                        <div class="card-topline">
                            <span class="seller">{product.seller.username}</span>
                            <span class="stock">{product.stock} in stock</span>
                        </div>

                        <h3>{product.name}</h3>
                        <p class="description">{product.description || 'No description provided.'}</p>

                        <div class="card-footer">
                            <div>
                                <p class="price">{formatCurrency(product.price)}</p>
                                <a class="detail-link" href={`/buyer/products/${product.id}`}>View details</a>
                            </div>

                            <div class="card-actions">
                                <button on:click={() => addToCart(product.id)}>Add to cart</button>
                                <button class="secondary" on:click={() => addToComparison(product.id)}>Compare</button>
                            </div>
                        </div>
                    </article>
                {/each}
            </div>
        {/if}

        {#if statusMessage}
            <p class="status-banner">{statusMessage}</p>
        {/if}
    </section>
</div>
