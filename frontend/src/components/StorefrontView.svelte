<script>
    export let products = [];
    export let addToCart;
    export let addToComparison;
    export let formatCurrency;
</script>

{#if products.length === 0}
    <div class="state-card">No listed products are available right now.</div>
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
