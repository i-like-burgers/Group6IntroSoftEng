<script>
    export let sellerForm;
    export let sellerProducts = [];
    export let sellerListingForm;
    export let createSellerListing;
    export let onSellerFormInput;
    export let formatCurrency;
</script>

<div class="cart-layout">
    <div class="panel">
        <form class="stack-form" bind:this={sellerListingForm} on:submit|preventDefault={createSellerListing}>
            <label for="seller-name">Product name</label>
            <input id="seller-name" value={sellerForm.name} on:input={(event) => onSellerFormInput('name', event)} type="text" required />

            <label for="seller-description">Description</label>
            <textarea
                id="seller-description"
                on:input={(event) => onSellerFormInput('description', event)}
                rows="4"
            >{sellerForm.description}</textarea>

            <label for="seller-price">Price</label>
            <input
                id="seller-price"
                value={sellerForm.price}
                on:input={(event) => onSellerFormInput('price', event)}
                type="number"
                min="0"
                step="0.01"
                required
            />

            <label for="seller-stock">Stock</label>
            <input
                id="seller-stock"
                value={sellerForm.stock}
                on:input={(event) => onSellerFormInput('stock', event)}
                type="number"
                min="0"
                step="1"
                required
            />

            <button class="checkout-link place-order-button" type="submit">
                Create listing
            </button>
        </form>
    </div>

    <aside class="summary-panel inventory-panel">
        <p>Active records</p>
        <strong>{sellerProducts.length}</strong>
    </aside>
</div>

{#if sellerProducts.length === 0}
    <div class="state-card">No listings yet.</div>
{:else}
    <div class="product-grid inventory-grid">
        {#each sellerProducts as item}
            <article class="product-card">
                <div class="card-topline">
                    <span class="seller">
                        {#if item.listingStatus === 'pending'}
                            Pending approval
                        {:else if item.listingStatus === 'rejected'}
                            Rejected
                        {:else if item.isListed}
                            Listed
                        {:else}
                            Delisted
                        {/if}
                    </span>
                    <span class="stock">{item.stock} in stock</span>
                </div>

                <h3>{item.name}</h3>
                <p class="description">{item.description || 'No description provided.'}</p>

                <div class="card-footer">
                    <div>
                        <p class="price">{formatCurrency(item.price)}</p>
                        <p class="seller">Created {new Date(item.createdAt).toLocaleDateString()}</p>
                    </div>
                </div>
            </article>
        {/each}
    </div>
{/if}
