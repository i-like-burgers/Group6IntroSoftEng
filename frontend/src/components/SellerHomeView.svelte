<script>
    export let sellerWallet;
    export let sellerBankAccount;
    export let sellerPayouts = [];
    export let sellerBankForm;
    export let sellerPayoutForm;
    export let sellerWebhook;
    export let onSellerBankInput;
    export let onSellerPayoutInput;
    export let onSellerWebhookInput;
    export let saveSellerBankAccount;
    export let createSellerPayout;
    export let saveSellerWebhook;
    export let formatCurrency;
    export let formatDate;
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
        <p class="section-kicker">Mock wallet</p>
        <h3>Seller funds</h3>
        <div class="seller-wallet-metrics">
            <div>
                <p>Available balance</p>
                <strong>{formatCurrency(sellerWallet.balance)}</strong>
            </div>
            <div>
                <p>Total earned</p>
                <strong>{formatCurrency(sellerWallet.totalEarned)}</strong>
            </div>
        </div>

        <form class="stack-form bank-form" on:submit|preventDefault={saveSellerBankAccount}>
            <label for="bank-holder">Account holder</label>
            <input
                id="bank-holder"
                type="text"
                value={sellerBankForm.accountHolder}
                on:input={(event) => onSellerBankInput('accountHolder', event)}
            />

            <label for="bank-name">Bank name</label>
            <input
                id="bank-name"
                type="text"
                value={sellerBankForm.bankName}
                on:input={(event) => onSellerBankInput('bankName', event)}
            />

            <label for="bank-routing">Demo routing number</label>
            <input
                id="bank-routing"
                type="text"
                inputmode="numeric"
                value={sellerBankForm.routingNumber}
                on:input={(event) => onSellerBankInput('routingNumber', event)}
            />

            <label for="bank-account">Demo account number</label>
            <input
                id="bank-account"
                type="text"
                inputmode="numeric"
                value={sellerBankForm.accountNumber}
                on:input={(event) => onSellerBankInput('accountNumber', event)}
            />

            <button class="checkout-link place-order-button" type="submit">Save mock bank details</button>
        </form>

        {#if sellerBankAccount}
            <p class="seller-bank-summary">
                Payouts route to {sellerBankAccount.bankName} account ending {sellerBankAccount.accountLast4}.
            </p>
        {/if}

        <form class="stack-form payout-form" on:submit|preventDefault={createSellerPayout}>
            <label for="payout-amount">Payout amount</label>
            <input
                id="payout-amount"
                type="number"
                min="0.01"
                step="0.01"
                value={sellerPayoutForm.amount}
                on:input={(event) => onSellerPayoutInput('amount', event)}
            />

            <label for="payout-note">Note</label>
            <input
                id="payout-note"
                type="text"
                maxlength="120"
                value={sellerPayoutForm.note}
                on:input={(event) => onSellerPayoutInput('note', event)}
            />

            <button class="checkout-link place-order-button" type="submit">Send mock payout</button>
        </form>

        {#if sellerPayouts.length > 0}
            <div class="seller-payout-list">
                {#each sellerPayouts as payout}
                    <article class="seller-payout-row">
                        <div>
                            <p class="seller">{formatDate(payout.createdAt)}</p>
                            <p>{payout.note || 'Mock payout'}</p>
                        </div>
                        <strong>{formatCurrency(payout.amount)}</strong>
                    </article>
                {/each}
            </div>
        {/if}
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
