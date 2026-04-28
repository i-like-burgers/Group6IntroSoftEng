<script>
    export let order;
    export let formatCurrency;
    export let formatDate;
    export let formatPaymentMethod;
</script>

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
        <p>Ship to</p>
        <strong>{order.shipToName}</strong>
        <strong>{order.shipToLine1}</strong>
        {#if order.shipToLine2}
            <strong>{order.shipToLine2}</strong>
        {/if}
        <strong>{order.shipToCity}, {order.shipToState} {order.shipToPostalCode}</strong>
        <strong>{order.shipToCountry}</strong>
        <p>Subtotal</p>
        <strong>{formatCurrency(order.subtotal)}</strong>
        <p>Tax</p>
        <strong>{formatCurrency(order.taxAmount)}</strong>
        <p>Total</p>
        <strong>{formatCurrency(order.total)}</strong>
        <div class="checkout-actions">
            <a class="checkout-link" href="/buyer/home">Continue shopping</a>
        </div>
    </aside>
</div>
