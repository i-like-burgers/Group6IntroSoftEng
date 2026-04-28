<script>
    export let adminPendingUsers = [];
    export let adminProducts = [];
    export let adminUsers = [];
    export let adminUsersPageInfo;
    export let adminUserSearch = '';
    export let onAdminUserSearchInput;
    export let approveUser;
    export let blockUser;
    export let banUser;
    export let approveProduct;
    export let rejectProduct;
    export let delistProduct;
    export let searchAdminUsers;
    export let clearAdminUserSearch;
    export let goToAdminUsersPage;
    export let capitalizeRole;
    export let formatCurrency;
    export let formatDate;
    export let getUserStatus;
</script>

<div class="admin-columns admin-columns--three">
    <article class="admin-region">
        <div class="admin-panel-header">
            <div>
                <p class="section-kicker">Pending registration requests</p>
                <h3>Users awaiting approval</h3>
            </div>
            <p class="admin-count">{adminPendingUsers.length}</p>
        </div>

        {#if adminPendingUsers.length === 0}
            <div class="state-card">No pending users right now.</div>
        {:else}
            <div class="admin-table-wrap">
                <table class="admin-grid">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>Requested</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each adminPendingUsers as user}
                            <tr>
                                <td>{user.username}</td>
                                <td>{capitalizeRole(user.role)}</td>
                                <td>{user.email}</td>
                                <td>{formatDate(user.createdAt)}</td>
                                <td>
                                    <div class="admin-action-group">
                                        <button class="admin-button" on:click={() => approveUser(user.id)}>Approve</button>
                                        <button class="admin-button admin-button-danger" on:click={() => blockUser(user.id)}>Block</button>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if}
    </article>

    <article class="admin-region admin-region--products">
        <div class="admin-panel-header">
            <div>
                <p class="section-kicker">Seller listings</p>
                <h3>Listing moderation</h3>
            </div>
            <p class="admin-count">{adminProducts.length}</p>
        </div>

        {#if adminProducts.length === 0}
            <div class="state-card">No seller listings are available for review.</div>
        {:else}
            <div class="admin-table-wrap">
                <table class="admin-grid admin-grid--products">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Seller</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each adminProducts as item}
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.seller?.username || 'Unknown seller'}</td>
                                <td>{item.description || 'No description provided.'}</td>
                                <td>{formatCurrency(item.price)}</td>
                                <td>{item.stock}</td>
                                <td>
                                    {#if item.listingStatus === 'pending'}
                                        Pending approval
                                    {:else if item.listingStatus === 'rejected'}
                                        Rejected
                                    {:else if item.isListed}
                                        Listed
                                    {:else}
                                        Delisted
                                    {/if}
                                </td>
                                <td>
                                    {#if item.listingStatus === 'pending'}
                                        <div class="admin-action-group">
                                            <button class="admin-button" on:click={() => approveProduct(item.id)}>Approve</button>
                                            <button class="admin-button admin-button-danger" on:click={() => rejectProduct(item.id)}>Reject</button>
                                        </div>
                                    {:else if item.isListed}
                                        <button class="admin-button admin-button-danger" on:click={() => delistProduct(item.id)}>Delist</button>
                                    {:else}
                                        <span class="seller">No further action</span>
                                    {/if}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if}
    </article>

    <article class="admin-region">
        <div class="admin-panel-header">
            <div>
                <p class="section-kicker">Recent users</p>
                <h3>Browse and filter accounts</h3>
            </div>
            <p class="admin-count">{adminUsersPageInfo.totalPages} page{adminUsersPageInfo.totalPages === 1 ? '' : 's'}</p>
        </div>

        <form class="admin-search" on:submit|preventDefault={searchAdminUsers}>
            <input
                value={adminUserSearch}
                on:input={onAdminUserSearchInput}
                type="search"
                placeholder="Search username"
            />
            <button class="admin-button" type="submit">Search</button>
            <button type="button" class="admin-button" on:click={clearAdminUserSearch}>Clear</button>
        </form>

        {#if adminUsers.length === 0}
            <div class="state-card">No users matched that search.</div>
        {:else}
            <div class="admin-table-wrap">
                <table class="admin-grid">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Registered</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each adminUsers as user}
                            <tr>
                                <td>{user.username}</td>
                                <td>{capitalizeRole(user.role)}</td>
                                <td>{getUserStatus(user)}</td>
                                <td>{formatDate(user.createdAt)}</td>
                                <td>
                                    <div class="admin-action-group">
                                        <button class="admin-button" on:click={() => approveUser(user.id)}>Approve</button>
                                        <button class="admin-button" on:click={() => blockUser(user.id)}>Block</button>
                                        <button class="admin-button admin-button-danger" on:click={() => banUser(user.id)}>Ban</button>
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        {/if}

        <div class="admin-pagination">
            <button
                class="admin-button"
                on:click={() => goToAdminUsersPage(adminUsersPageInfo.page - 1)}
                disabled={!adminUsersPageInfo.hasPreviousPage}
            >
                Previous
            </button>
            <p class="seller">
                Page {adminUsersPageInfo.page} of {adminUsersPageInfo.totalPages}
            </p>
            <button
                class="admin-button"
                on:click={() => goToAdminUsersPage(adminUsersPageInfo.page + 1)}
                disabled={!adminUsersPageInfo.hasNextPage}
            >
                Next
            </button>
        </div>
    </article>
</div>
