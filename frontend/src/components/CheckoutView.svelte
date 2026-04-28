<script>
    export let cart;
    export let placeOrder;
    export let formatCurrency;
    export let shippingAddress;
    export let onShippingInput;
</script>

<div class="cart-layout">
    <div class="panel">
        {#if cart.items.length === 0}
            <div class="state-card">Your cart is empty. Return to the storefront before checking out.</div>
        {:else}
            <div class="checkout-stack">
                <div class="shipping-panel">
                    <p class="section-kicker">Shipping address</p>
                    <div class="stack-form">
                        <label for="ship-name">Full name</label>
                        <input id="ship-name" value={shippingAddress.name} on:input={(event) => onShippingInput('name', event)} type="text" required />

                        <label for="ship-line1">Address line 1</label>
                        <input id="ship-line1" value={shippingAddress.line1} on:input={(event) => onShippingInput('line1', event)} type="text" required />

                        <label for="ship-line2">Address line 2</label>
                        <input id="ship-line2" value={shippingAddress.line2} on:input={(event) => onShippingInput('line2', event)} type="text" />

                        <label for="ship-city">City</label>
                        <input id="ship-city" value={shippingAddress.city} on:input={(event) => onShippingInput('city', event)} type="text" required />

                        <label for="ship-state">State / region</label>
                        <input id="ship-state" value={shippingAddress.state} on:input={(event) => onShippingInput('state', event)} type="text" required />

                        <label for="ship-postal">Postal code</label>
                        <input id="ship-postal" value={shippingAddress.postalCode} on:input={(event) => onShippingInput('postalCode', event)} type="text" required />

                        <label for="ship-country">Country</label>
                        <input id="ship-country" value={shippingAddress.country} on:input={(event) => onShippingInput('country', event)} type="text" required />
                    </div>
                </div>

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
