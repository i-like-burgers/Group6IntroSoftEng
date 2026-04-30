<script>
    export let products = [];
    export let productSearch = '';
    export let addToCart;
    export let addToComparison;
    export let openRandomProduct;
    export let onProductSearchInput;
    export let searchProducts;
    export let clearProductSearch;
    export let formatCurrency;
</script>

<div class="storefront-tools">
    <form class="storefront-search" on:submit|preventDefault={searchProducts}>
        <label for="product-search">Search products</label>
        <div class="storefront-search-row">
            <input
                id="product-search"
                type="search"
                placeholder="Search by product name or description"
                value={productSearch}
                on:input={onProductSearchInput}
            />
            <button type="submit">Search</button>
            {#if productSearch.trim()}
                <button class="secondary" type="button" on:click={clearProductSearch}>Clear</button>
            {/if}
        </div>
    </form>

    <div class="storefront-actions">
        <button class="checkout-link random-product-button" type="button" on:click={openRandomProduct}>
            Random product
        </button>
    </div>
</div>

{#if products.length === 0}
    <div class="state-card">
        {productSearch.trim()
            ? 'No products match your search.'
            : 'No listed products are available right now.'}
    </div>
{:else}
    <div class="product-grid">
        {#each products as product}
            <article class="product-card">
                <img class="product-card-image" src={product.imageUrl || '/images/product-placeholder.png'} alt={product.name} loading="lazy" />
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
