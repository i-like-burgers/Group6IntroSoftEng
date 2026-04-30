<script>
    export let cart;
    export let removeFromCart;
    export let formatCurrency;
</script>

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
        <p>Service fee</p>
        <strong>{formatCurrency(cart.serviceFee || 0)}</strong>
        <p>Estimated tax</p>
        <strong>{formatCurrency(cart.tax)}</strong>
        <p>Total</p>
        <strong>{formatCurrency(cart.total)}</strong>
        <a class="checkout-link" href="/buyer/checkout">Checkout</a>
    </aside>
</div>
