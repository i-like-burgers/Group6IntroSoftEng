<script>
    export let cart;
    export let placeOrder;
    export let formatCurrency;
</script>

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
            <div class="payment-choice selected">
                <div>
                    <p class="payment-title">Demo credit card ending in 4242</p>
                </div>
            </div>
            <div class="payment-choice payment-placeholder" aria-disabled="true">
                <span class="payment-plus">+</span>
                <div>
                    <p class="payment-title">Add another method</p>
                    <p class="payment-copy">Reserved for future cards and other payment options.</p>
                </div>
            </div>
        </div>
        <div class="checkout-actions">
            <button class="checkout-link place-order-button" on:click={placeOrder} disabled={cart.items.length === 0}>
                Place order
            </button>
            <a class="checkout-link secondary-link" href="/buyer/cart">Back to cart</a>
        </div>
    </aside>
</div>
