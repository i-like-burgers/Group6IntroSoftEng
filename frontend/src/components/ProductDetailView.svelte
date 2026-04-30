<script>
    export let product;
    export let addToCart;
    export let addToComparison;
    export let formatCurrency;
</script>

<article class="detail-card">
    <img class="product-detail-image" src={product.imageUrl || '/images/product-placeholder.png'} alt={product.name} />

    <div class="detail-meta">
        <span class="seller">{product.seller.username}</span>
        <span class="stock">{product.stock} in stock</span>
    </div>

    <div class="detail-layout">
        <div>
            <h3>{product.name}</h3>
            <p class="detail-price">{formatCurrency(product.price)}</p>
        </div>
        <div class="detail-actions">
            <button on:click={() => addToCart(product.id)}>Add to cart</button>
            <button class="secondary" on:click={() => addToComparison(product.id)}>Compare</button>
        </div>
    </div>

    <p class="detail-description">{product.description || 'No description provided.'}</p>
    <a class="detail-link" href="/buyer/home">Back to storefront</a>
</article>
