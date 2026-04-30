<script>
    export let orders = [];
    export let pageInfo;
    export let goToOrderHistoryPage;
    export let formatCurrency;
    export let formatDate;
    export let formatPaymentMethod;
</script>

{#if orders.length === 0}
    <div class="state-card">You have not placed any orders yet.</div>
{:else}
    <div class="list-grid">
        {#each orders as order}
            <article class="line-card order-history-card">
                <div>
                    <p class="seller">Order #{order.id}</p>
                    <h3>{formatCurrency(order.total)}</h3>
                    <p class="description">
                        {formatDate(order.createdAt)} - {formatPaymentMethod(order.paymentMethod)} - {order.items.length} item{order.items.length === 1 ? '' : 's'}
                    </p>
                    <p class="description">
                        Ship to {order.shipToCity}, {order.shipToState} {order.shipToPostalCode}
                    </p>
                </div>
                <div class="line-actions">
                    <p class="price">{order.status}</p>
                    <a class="checkout-link secondary-link" href={`/buyer/orders/${order.id}/confirmation`}>View details</a>
                </div>
            </article>
        {/each}
    </div>

    <div class="history-pagination">
        <button
            class="secondary"
            type="button"
            disabled={!pageInfo.hasPreviousPage}
            on:click={() => goToOrderHistoryPage(pageInfo.page - 1)}
        >
            Previous page
        </button>
        <span>Page {pageInfo.page} of {pageInfo.totalPages}</span>
        <button
            class="secondary"
            type="button"
            disabled={!pageInfo.hasNextPage}
            on:click={() => goToOrderHistoryPage(pageInfo.page + 1)}
        >
            Next page
        </button>
    </div>
{/if}
