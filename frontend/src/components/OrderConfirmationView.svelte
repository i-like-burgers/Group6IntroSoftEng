<script>
    export let order;
    export let formatCurrency;
    export let formatDate;
    export let formatPaymentMethod;
</script>

<div class="cart-layout">
    <div class="panel">
        <div class="list-grid">
            {#if order.tracking}
                <article class="tracking-card">
                    <div class="tracking-header">
                        <div>
                            <p class="section-kicker">Mock tracking</p>
                            <h3>{order.tracking.statusLabel}</h3>
                            <p class="detail-description">
                                {order.tracking.shippingMethod} - {order.tracking.trackingNumber}
                            </p>
                        </div>
                        <div class="tracking-eta">
                            <p>Estimated delivery</p>
                            <strong>{formatDate(order.tracking.estimatedDeliveryAt)}</strong>
                        </div>
                    </div>

                    <div class="tracking-timeline">
                        {#each order.tracking.events as event}
                            <article class="tracking-event" class:active={event.status === order.tracking.status}>
                                <p class="seller">{formatDate(event.occurredAt)}</p>
                                <h4>{event.label}</h4>
                                <p>{event.description}</p>
                            </article>
                        {/each}
                    </div>
                </article>
            {/if}

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
        <strong>{order.tracking?.statusLabel || order.status}</strong>
        {#if order.tracking}
            <p>Tracking number</p>
            <strong>{order.tracking.trackingNumber}</strong>
            <p>Shipping method</p>
            <strong>{order.tracking.shippingMethod}</strong>
        {/if}
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
        <p>Service fee</p>
        <strong>{formatCurrency(order.serviceFeeAmount || 0)}</strong>
        <p>Tax</p>
        <strong>{formatCurrency(order.taxAmount)}</strong>
        <p>Total</p>
        <strong>{formatCurrency(order.total)}</strong>
        <div class="checkout-actions">
            <a class="checkout-link" href="/buyer/home">Continue shopping</a>
            <a class="checkout-link secondary-link" href="/buyer/orders">View order history</a>
        </div>
    </aside>
</div>
