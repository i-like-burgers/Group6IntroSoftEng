<script>
    export let sellerWebhook;
    export let onSellerWebhookInput;
    export let saveSellerWebhook;
</script>

<div class="seller-home-grid">
    <article class="detail-card">
        <p class="section-kicker">Modern seller mode</p>
        <h3>Manage your storefront</h3>
        <p class="detail-description">
            Use the inventory workspace to create new listings, review approval status, and keep track of stock.
        </p>
        <div class="checkout-actions">
            <a class="checkout-link" href="/seller/inventory">Open inventory</a>
            <a class="checkout-link secondary-link" href="/seller/sales">View sales</a>
        </div>
    </article>

    <article class="detail-card">
        <p class="section-kicker">Warehouse integration</p>
        <h3>Order webhook setup</h3>
        <p class="detail-description">
            Send order notifications to warehouse software when buyers place orders for your products.
        </p>

        <form class="stack-form webhook-form" on:submit|preventDefault={saveSellerWebhook}>
            <label for="webhook-url">Receiver URL</label>
            <input
                id="webhook-url"
                type="url"
                placeholder="http://localhost:4010/seller-webhook"
                value={sellerWebhook.endpointUrl}
                on:input={(event) => onSellerWebhookInput('endpointUrl', event)}
            />

            <label class="checkbox-row" for="webhook-active">
                <input
                    id="webhook-active"
                    type="checkbox"
                    checked={sellerWebhook.isActive}
                    on:change={(event) => onSellerWebhookInput('isActive', event)}
                />
                Webhook active
            </label>

            <button class="checkout-link place-order-button" type="submit">Save webhook setup</button>
        </form>

        {#if sellerWebhook.signingSecret}
            <div class="webhook-secret">
                <p class="seller">Signing secret</p>
                <code>{sellerWebhook.signingSecret}</code>
                <p class="detail-description">Receiver command:</p>
                <code>WEBHOOK_SECRET='{sellerWebhook.signingSecret}' PORT=4010 node scripts/demo-webhook-receiver.js</code>
            </div>
        {/if}
    </article>
</div>
