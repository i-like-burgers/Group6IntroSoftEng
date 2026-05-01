<script>
    export let sales = [];
    export let summary = {
        grossSales: 0,
        unitsSold: 0,
        orderCount: 0
    };
    export let pageInfo;
    export let goToSellerSalesPage;
    export let formatCurrency;
    export let formatDate;
    export let formatPaymentMethod;
</script>

<div class="seller-sales-summary">
    <aside class="summary-panel">
        <p>Orders</p>
        <strong>{summary.orderCount}</strong>
    </aside>
    <aside class="summary-panel">
        <p>Items sold</p>
        <strong>{summary.unitsSold}</strong>
    </aside>
    <aside class="summary-panel">
        <p>Gross sales</p>
        <strong>{formatCurrency(summary.grossSales)}</strong>
    </aside>
</div>

{#if sales.length === 0}
    <div class="state-card">No sales have been recorded yet.</div>
{:else}
    <div class="list-grid seller-sales-list">
        {#each sales as sale}
            <article class="line-card seller-sales-card">
                <div>
                    <p class="seller">Order #{sale.order.id}</p>
                    <h3>{sale.productName}</h3>
                    <p class="description">
                        {formatDate(sale.order.createdAt)} - {formatPaymentMethod(sale.order.paymentMethod)}
                    </p>
                    <p class="description">
                        {sale.quantity} unit{sale.quantity === 1 ? '' : 's'} at {formatCurrency(sale.unitPrice)}
                    </p>
                </div>
                <div class="line-actions seller-sales-actions">
                    <p class="price">{formatCurrency(sale.lineTotal)}</p>
                    <p class="seller">{sale.order.status}</p>
                </div>
            </article>
        {/each}
    </div>

    <div class="history-pagination">
        <button
            class="secondary"
            type="button"
            disabled={!pageInfo.hasPreviousPage}
            on:click={() => goToSellerSalesPage(pageInfo.page - 1)}
        >
            Previous page
        </button>
        <span>Page {pageInfo.page} of {pageInfo.totalPages}</span>
        <button
            class="secondary"
            type="button"
            disabled={!pageInfo.hasNextPage}
            on:click={() => goToSellerSalesPage(pageInfo.page + 1)}
        >
            Next page
        </button>
    </div>
{/if}
