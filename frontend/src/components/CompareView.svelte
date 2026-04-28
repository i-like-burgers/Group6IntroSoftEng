<script>
    export let compareItems = [];
    export let addToCart;
    export let removeFromCompare;
    export let formatCurrency;
    export let truncate;
</script>

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
