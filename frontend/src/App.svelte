<script>
    import { onMount, tick } from 'svelte';

    let appMode = 'buyer';
    let currentPage = 'storefront';
    let products = [];
    let product = null;
    let compareItems = [];
    let cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };
    let order = null;
    let sellerProducts = [];
    let sellerForm = {
        name: '',
        description: '',
        price: '',
        stock: ''
    };
    let sellerListingForm;
    let adminPendingUsers = [];
    let adminProducts = [];
    let adminUsers = [];
    let adminAuditLogs = [];
    let adminUsersPageInfo = {
        page: 1,
        totalPages: 1,
        hasPreviousPage: false,
        hasNextPage: false,
        search: ''
    };
    let adminUserSearch = '';
    let selectedPaymentMethod = 'demo_card';
    let loading = true;
    let errorMessage = '';
    let statusMessage = '';

    function getPath() {
        return typeof window === 'undefined' ? '/buyer/home' : window.location.pathname;
    }

    function getProductIdFromPath() {
        const match = getPath().match(/\/buyer\/products\/(\d+)/);
        return match ? Number(match[1]) : null;
    }

    function getOrderIdFromPath() {
        const match = getPath().match(/\/buyer\/orders\/(\d+)\/confirmation/);
        return match ? Number(match[1]) : null;
    }

    function getAppMode(path = getPath()) {
        if (path.startsWith('/admin')) {
            return 'admin';
        }

        return path.startsWith('/seller') ? 'seller' : 'buyer';
    }

    function detectPage() {
        const path = getPath();

        if (path === '/admin') {
            return 'admin-home';
        }

        if (path === '/admin/sub') {
            return 'admin-moderation';
        }

        if (path === '/admin/audit') {
            return 'admin-audit';
        }

        if (path === '/seller/home') {
            return 'seller-home';
        }

        if (path === '/seller/inventory') {
            return 'seller-inventory';
        }

        if (path === '/buyer/cart') {
            return 'cart';
        }

        if (path === '/buyer/checkout') {
            return 'checkout';
        }

        if (path === '/buyer/compare') {
            return 'compare';
        }

        if (/\/buyer\/orders\/\d+\/confirmation$/.test(path)) {
            return 'confirmation';
        }

        if (/\/buyer\/products\/\d+$/.test(path)) {
            return 'product';
        }

        return 'storefront';
    }

    function getPageTitle() {
        if (currentPage === 'admin-home') {
            return 'Admin Home';
        }

        if (currentPage === 'admin-moderation') {
            return 'Admin Moderation';
        }

        if (currentPage === 'admin-audit') {
            return 'Admin Audit Log';
        }

        if (currentPage === 'seller-home') {
            return 'Seller Home';
        }

        if (currentPage === 'seller-inventory') {
            return 'Seller Inventory';
        }

        if (currentPage === 'cart') {
            return 'Buyer Cart';
        }

        if (currentPage === 'checkout') {
            return 'Checkout Review';
        }

        if (currentPage === 'compare') {
            return 'Compare Products';
        }

        if (currentPage === 'confirmation') {
            return 'Order Confirmation';
        }

        if (currentPage === 'product') {
            return 'Product Detail';
        }

        return 'Buyer Storefront';
    }

    function getAdminClassicPath() {
        if (currentPage === 'admin-moderation') {
            return '/admin/classic/sub';
        }

        if (currentPage === 'admin-audit') {
            return '/admin/classic/audit';
        }

        return '/admin/classic';
    }

    async function fetchJson(url, options = {}) {
        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type') || '';
        const data = contentType.includes('application/json') ? await response.json() : null;

        if (!response.ok) {
            throw new Error(data?.error || 'Request failed');
        }

        return data;
    }

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    }

    function formatDate(value) {
        return new Intl.DateTimeFormat('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        }).format(new Date(value));
    }

    function formatPaymentMethod(paymentMethod) {
        if (paymentMethod === 'demo_card') {
            return 'Demo Credit Card';
        }

        return paymentMethod;
    }

    function truncate(text, maxLength) {
        if (!text) return '';
        return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
    }

    function capitalizeRole(role) {
        if (!role) return '';
        return role.charAt(0).toUpperCase() + role.slice(1);
    }

    function getUserStatus(user) {
        if (user.banned) return 'Banned';
        if (user.blocked) return 'Blocked';
        if (user.approved) return 'Approved';
        return 'Pending';
    }

    function formatActionType(actionType) {
        if (!actionType) return '';
        return actionType
            .split('_')
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(' ');
    }

    function mergeAdminUser(existingUser, nextUser) {
        return {
            ...existingUser,
            ...nextUser
        };
    }

    function applyAdminUserUpdate(nextUser) {
        adminPendingUsers = adminPendingUsers.filter((user) => user.id !== nextUser.id);
        adminUsers = adminUsers.map((user) => user.id === nextUser.id ? mergeAdminUser(user, nextUser) : user);
    }

    function applyAdminProductUpdate(nextProduct) {
        adminProducts = adminProducts.map((product) => product.id === nextProduct.id ? { ...product, ...nextProduct } : product);
    }

    async function loadProducts(resetStatus = false) {
        loading = true;
        errorMessage = '';
        if (resetStatus) statusMessage = '';

        try {
            products = await fetchJson('/api/buyer/products');
        } catch (error) {
            errorMessage = error.message || 'Could not load products.';
        } finally {
            loading = false;
        }
    }

    async function loadProductDetail() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const productId = getProductIdFromPath();
            product = await fetchJson(`/api/buyer/products/${productId}`);
        } catch (error) {
            errorMessage = error.message || 'Could not load product.';
        } finally {
            loading = false;
        }
    }

    async function loadCart() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            cart = await fetchJson('/api/buyer/cart');
        } catch (error) {
            errorMessage = error.message || 'Could not load cart.';
        } finally {
            loading = false;
        }
    }

    async function loadCompare() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const response = await fetchJson('/api/buyer/compare');
            compareItems = response.items || [];
        } catch (error) {
            errorMessage = error.message || 'Could not load comparison list.';
        } finally {
            loading = false;
        }
    }

    async function loadSellerProducts() {
        loading = true;
        errorMessage = '';

        try {
            sellerProducts = await fetchJson('/api/seller/products');
        } catch (error) {
            errorMessage = error.message || 'Could not load seller inventory.';
        } finally {
            loading = false;
        }
    }

    async function loadAdminAuditLogs() {
        loading = true;
        errorMessage = '';

        try {
            adminAuditLogs = await fetchJson('/api/admin/audit-logs');
        } catch (error) {
            errorMessage = error.message || 'Could not load audit logs.';
        } finally {
            loading = false;
        }
    }

    async function loadAdminModeration(page = 1, search = adminUserSearch) {
        loading = true;
        errorMessage = '';

        try {
            const [pendingUsers, products, usersPage] = await Promise.all([
                fetchJson('/api/admin/pending-users'),
                fetchJson('/api/admin/products'),
                fetchJson(`/api/admin/users?page=${page}&search=${encodeURIComponent(search)}`)
            ]);

            adminPendingUsers = pendingUsers;
            adminProducts = products;
            adminUsers = usersPage.users;
            adminUsersPageInfo = {
                page: usersPage.page,
                totalPages: usersPage.totalPages,
                hasPreviousPage: usersPage.hasPreviousPage,
                hasNextPage: usersPage.hasNextPage,
                search: usersPage.search
            };
            adminUserSearch = usersPage.search || '';
        } catch (error) {
            errorMessage = error.message || 'Could not load moderation data.';
        } finally {
            loading = false;
        }
    }

    async function loadOrderConfirmation() {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const orderId = getOrderIdFromPath();
            order = await fetchJson(`/api/buyer/orders/${orderId}`);
            statusMessage = 'Your order has been placed successfully.';
        } catch (error) {
            errorMessage = error.message || 'Could not load order confirmation.';
        } finally {
            loading = false;
        }
    }

    async function loadCurrentPage() {
        appMode = getAppMode();
        currentPage = detectPage();

        if (currentPage === 'admin-home') {
            loading = false;
            errorMessage = '';
            return;
        }

        if (currentPage === 'admin-moderation') {
            await loadAdminModeration();
            return;
        }

        if (currentPage === 'admin-audit') {
            await loadAdminAuditLogs();
            return;
        }

        if (currentPage === 'seller-home') {
            loading = false;
            errorMessage = '';
            return;
        }

        if (currentPage === 'seller-inventory') {
            await loadSellerProducts();
            return;
        }

        if (currentPage === 'cart') {
            await loadCart();
            return;
        }

        if (currentPage === 'checkout') {
            await loadCart();
            return;
        }

        if (currentPage === 'compare') {
            await loadCompare();
            return;
        }

        if (currentPage === 'confirmation') {
            await loadOrderConfirmation();
            return;
        }

        if (currentPage === 'product') {
            await loadProductDetail();
            return;
        }

        await loadProducts();
    }

    async function preserveScrollDuring(task) {
        const scrollY = typeof window === 'undefined' ? 0 : window.scrollY;
        await task();
        await tick();

        if (typeof window !== 'undefined') {
            window.scrollTo({ top: scrollY });
        }
    }

    async function createSellerListing() {
        statusMessage = '';
        const trimmedPrice = String(sellerForm.price).trim();
        const trimmedStock = String(sellerForm.stock).trim();
        const parsedPrice = Number(trimmedPrice);
        const parsedStock = Number(trimmedStock);

        if (!sellerListingForm?.reportValidity()) {
            return;
        }

        if (trimmedPrice === '' || !Number.isFinite(parsedPrice)) {
            statusMessage = 'Enter a valid number for price.';
            return;
        }

        if (trimmedStock === '' || !Number.isInteger(parsedStock)) {
            statusMessage = 'Enter a whole number for stock.';
            return;
        }

        try {
            await fetchJson('/api/seller/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: sellerForm.name,
                    description: sellerForm.description,
                    price: parsedPrice,
                    stock: parsedStock
                })
            });

            sellerForm = {
                name: '',
                description: '',
                price: '',
                stock: ''
            };
            statusMessage = 'Listing submitted for admin approval.';
            await loadSellerProducts();
        } catch (error) {
            statusMessage = error.message || 'Could not create listing.';
        }
    }

    async function approveUser(id) {
        statusMessage = '';
        try {
            const user = await fetchJson(`/api/admin/approve-user/${id}`, { method: 'POST' });
            statusMessage = 'User approved.';
            applyAdminUserUpdate(user);
        } catch (error) {
            statusMessage = error.message || 'Could not approve user.';
        }
    }

    async function blockUser(id) {
        statusMessage = '';
        try {
            const user = await fetchJson(`/api/admin/block-user/${id}`, { method: 'POST' });
            statusMessage = 'User blocked.';
            applyAdminUserUpdate(user);
        } catch (error) {
            statusMessage = error.message || 'Could not block user.';
        }
    }

    async function banUser(id) {
        statusMessage = '';
        try {
            const user = await fetchJson(`/api/admin/ban-user/${id}`, { method: 'POST' });
            statusMessage = 'User banned.';
            applyAdminUserUpdate(user);
        } catch (error) {
            statusMessage = error.message || 'Could not ban user.';
        }
    }

    async function approveProduct(id) {
        statusMessage = '';
        try {
            const product = await fetchJson(`/api/admin/products/${id}/approve`, { method: 'POST' });
            statusMessage = 'Product approved.';
            applyAdminProductUpdate(product);
        } catch (error) {
            statusMessage = error.message || 'Could not approve product.';
        }
    }

    async function rejectProduct(id) {
        statusMessage = '';
        try {
            const product = await fetchJson(`/api/admin/products/${id}/reject`, { method: 'POST' });
            statusMessage = 'Product rejected.';
            applyAdminProductUpdate(product);
        } catch (error) {
            statusMessage = error.message || 'Could not reject product.';
        }
    }

    async function delistProduct(id) {
        statusMessage = '';
        try {
            const product = await fetchJson(`/api/admin/products/${id}/delist`, { method: 'POST' });
            statusMessage = 'Product delisted.';
            applyAdminProductUpdate(product);
        } catch (error) {
            statusMessage = error.message || 'Could not delist product.';
        }
    }

    async function searchAdminUsers() {
        await preserveScrollDuring(() => loadAdminModeration(1, adminUserSearch));
    }

    async function clearAdminUserSearch() {
        adminUserSearch = '';
        await preserveScrollDuring(() => loadAdminModeration(1, ''));
    }

    async function goToAdminUsersPage(nextPage) {
        if (nextPage < 1 || nextPage > adminUsersPageInfo.totalPages) {
            return;
        }

        await preserveScrollDuring(() => loadAdminModeration(nextPage, adminUsersPageInfo.search));
    }

    async function addToCart(productId) {
        statusMessage = '';

        try {
            await fetchJson('/api/buyer/cart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId,
                    quantity: 1
                })
            });

            statusMessage = 'Item added to cart.';
        } catch (error) {
            statusMessage = error.message || 'Could not add item to cart.';
        }
    }

    async function addToComparison(productId) {
        statusMessage = '';

        try {
            await fetchJson('/api/buyer/compare', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId
                })
            });

            statusMessage = 'Item added to comparison list.';
        } catch (error) {
            statusMessage = error.message || 'Could not add item to list.';
        }
    }

    async function removeFromCart(cartItemId) {
        statusMessage = '';

        try {
            await fetchJson(`/api/buyer/cart/${cartItemId}/remove`, {
                method: 'POST'
            });

            statusMessage = 'Item removed from cart.';
            await loadCart();
        } catch (error) {
            statusMessage = error.message || 'Could not remove item.';
        }
    }

    async function removeFromCompare(productId) {
        statusMessage = '';

        try {
            await fetchJson(`/api/buyer/compare/${productId}/remove`, {
                method: 'POST'
            });

            statusMessage = 'Item removed from comparison list.';
            await loadCompare();
        } catch (error) {
            statusMessage = error.message || 'Could not remove item.';
        }
    }

    async function placeOrder() {
        statusMessage = '';

        try {
            const result = await fetchJson('/api/buyer/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    paymentMethod: selectedPaymentMethod
                })
            });

            window.location.href = `/buyer/orders/${result.order.id}/confirmation`;
        } catch (error) {
            statusMessage = error.message || 'Checkout failed.';
            await loadCart();
        }
    }

    async function logout() {
        statusMessage = '';

        try {
            await fetchJson('/api/logout', {
                method: 'POST'
            });

            window.location.href = '/login';
        } catch (error) {
            statusMessage = error.message || 'Could not log out.';
        }
    }

    onMount(async () => {
        await loadCurrentPage();
    });
</script>

<svelte:head>
    <title>{getPageTitle()}</title>
</svelte:head>

<div class="page-shell" data-page={currentPage}>
    <section class="hero">
        <div>
            <p class="eyebrow">
                {#if appMode === 'admin'}
                    Admin Workspace
                {:else if appMode === 'seller'}
                    Seller Workspace
                {:else}
                    Buyer Workspace
                {/if}
            </p>
            <h1>Random Access Market</h1>
        </div>

        <div class="hero-actions">
            {#if appMode === 'admin'}
                <a href="/admin" class="action-link">Admin Home</a>
                <a href="/admin/sub" class="action-link">Moderation</a>
                <a href="/admin/audit" class="action-link">Audit</a>
                <a href={getAdminClassicPath()} class="action-link secondary">Classic UI</a>
            {:else if appMode === 'seller'}
                <a href="/seller/home" class="action-link">Seller Home</a>
                <a href="/seller/inventory" class="action-link">Inventory</a>
                <a href="/seller/classic/home" class="action-link secondary">Classic UI</a>
            {:else}
                <a href="/buyer/home" class="action-link">Storefront</a>
                <a href="/buyer/cart" class="action-link">Cart</a>
                <a href="/buyer/compare" class="action-link">Compare</a>
                <a href="/buyer/classic/home" class="action-link secondary">Classic UI</a>
            {/if}
            <button class="action-link logout-button" on:click={logout}>Log Out</button>
        </div>
    </section>

    <section class="catalog">
        <div class="catalog-header">
            <div>
                <p class="section-kicker">
                    {#if currentPage === 'admin-home'}
                        Administration
                    {:else if currentPage === 'admin-moderation'}
                        Moderation center
                    {:else if currentPage === 'admin-audit'}
                        Activity records
                    {:else if currentPage === 'seller-home'}
                        Seller workspace
                    {:else if currentPage === 'seller-inventory'}
                        Inventory management
                    {:else if currentPage === 'cart'}
                        Cart summary
                    {:else if currentPage === 'compare'}
                        Side-by-side shortlist
                    {:else if currentPage === 'checkout'}
                        Checkout review
                    {:else if currentPage === 'confirmation'}
                        Purchase complete
                    {:else if currentPage === 'product'}
                        Product spotlight
                    {:else}
                        Live inventory
                    {/if}
                </p>
                <h2>
                    {#if currentPage === 'admin-home'}
                        Administration home
                    {:else if currentPage === 'admin-moderation'}
                        Admin moderation
                    {:else if currentPage === 'admin-audit'}
                        Audit log
                    {:else if currentPage === 'seller-home'}
                        Seller control center
                    {:else if currentPage === 'seller-inventory'}
                        Your listings
                    {:else if currentPage === 'cart'}
                        Your cart
                    {:else if currentPage === 'compare'}
                        Compare products
                    {:else if currentPage === 'checkout'}
                        Review your order
                    {:else if currentPage === 'confirmation'}
                        Order confirmation
                    {:else if currentPage === 'product'}
                        Hardware details
                    {:else}
                        Available hardware
                    {/if}
                </h2>
            </div>
            <button class="refresh-button" on:click={loadCurrentPage}>Refresh</button>
        </div>

        {#if loading}
            <div class="state-card">Loading...</div>
        {:else if errorMessage}
            <div class="state-card error">{errorMessage}</div>
        {:else if currentPage === 'admin-home'}
            <div class="admin-columns admin-columns--two">
                <article class="admin-region admin-region--products">
                    <p class="section-kicker">Moderation</p>
                    <h3>User and listing review</h3>
                    <p class="detail-description">
                        Review pending registrations, approve or reject seller listings, and handle active account status changes.
                    </p>
                    <div class="checkout-actions">
                        <a class="checkout-link" href="/admin/sub">User management</a>
                    </div>
                </article>

                <article class="admin-region">
                    <p class="section-kicker">Audit</p>
                    <h3>Recent platform activity</h3>
                    <p class="detail-description">
                        Review the most recent approval, rejection, delisting, and other system actions recorded by the backend.
                    </p>
                    <div class="checkout-actions">
                        <a class="checkout-link" href="/admin/audit">Open audit log</a>
                    </div>
                </article>
            </div>
        {:else if currentPage === 'admin-moderation'}
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
                        <input bind:value={adminUserSearch} type="search" placeholder="Search username" />
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
        {:else if currentPage === 'admin-audit'}
            {#if adminAuditLogs.length === 0}
                <div class="state-card">No audit log entries yet.</div>
            {:else}
                <div class="panel admin-box">
                    <div class="admin-panel-header">
                        <div>
                            <p class="section-kicker">Recent actions</p>
                            <h3>Recorded system activity</h3>
                        </div>
                    </div>

                    <div class="admin-audit-list">
                    {#each adminAuditLogs as log}
                        <article class="admin-audit-row">
                            <p class="seller admin-audit-when">{formatDate(log.createdAt)}</p>
                            <p class="admin-audit-user">{log.username}</p>
                            <p class="admin-audit-action">{formatActionType(log.actionType)}</p>
                            <p class="admin-audit-details">{log.details}</p>
                        </article>
                    {/each}
                    </div>
                </div>
            {/if}
        {:else if currentPage === 'seller-home'}
            <div class="seller-home-grid">
                <article class="detail-card">
                    <p class="section-kicker">Modern seller mode</p>
                    <h3>Manage your storefront</h3>
                    <p class="detail-description">
                        Use the inventory workspace to create new listings, review approval status, and keep track of stock.
                    </p>
                    <div class="checkout-actions">
                        <a class="checkout-link" href="/seller/inventory">Open inventory</a>
                    </div>
                </article>
            </div>
        {:else if currentPage === 'seller-inventory'}
            <div class="cart-layout">
                <div class="panel">
                    <form class="stack-form" bind:this={sellerListingForm} on:submit|preventDefault={createSellerListing}>
                        <label for="seller-name">Product name</label>
                        <input id="seller-name" bind:value={sellerForm.name} type="text" required />

                        <label for="seller-description">Description</label>
                        <textarea id="seller-description" bind:value={sellerForm.description} rows="4"></textarea>

                        <label for="seller-price">Price</label>
                        <input id="seller-price" bind:value={sellerForm.price} type="number" min="0" step="0.01" required />

                        <label for="seller-stock">Stock</label>
                        <input id="seller-stock" bind:value={sellerForm.stock} type="number" min="0" step="1" required />

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
        {:else if currentPage === 'storefront' && products.length === 0}
            <div class="state-card">No listed products are available right now.</div>
        {:else if currentPage === 'product' && product}
            <article class="detail-card">
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
        {:else if currentPage === 'cart'}
            <div class="cart-layout">
                <div class="panel">
                    {#if cart.items.length === 0}
                        <div class="state-card">Your cart is empty.</div>
                    {:else}
                        <div class="list-grid">
                            {#each cart.items as item}
                                <article class="line-card">
                                    <div>
                                        <p class="seller">{item.product.seller.username}</p>
                                        <h3>{item.product.name}</h3>
                                        <p class="description">
                                            Quantity {item.quantity} at {formatCurrency(item.product.price)} each
                                        </p>
                                    </div>
                                    <div class="line-actions">
                                        <p class="price">{formatCurrency(item.product.price * item.quantity)}</p>
                                        <button class="secondary" on:click={() => removeFromCart(item.id)}>Remove</button>
                                    </div>
                                </article>
                            {/each}
                        </div>
                    {/if}
                </div>

                <aside class="summary-panel">
                    <p>Subtotal</p>
                    <strong>{formatCurrency(cart.subtotal)}</strong>
                    <p>Estimated tax</p>
                    <strong>{formatCurrency(cart.tax)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(cart.total)}</strong>
                    <a class="checkout-link" href="/buyer/checkout">Checkout</a>
                </aside>
            </div>
        {:else if currentPage === 'checkout'}
            <div class="cart-layout">
                <div class="panel">
                    {#if cart.items.length === 0}
                        <div class="state-card">Your cart is empty. Return to the storefront before checking out.</div>
                    {:else}
                        <div class="list-grid">
                            {#each cart.items as item}
                                <article class="line-card">
                                    <div>
                                        <p class="seller">{item.product.seller.username}</p>
                                        <h3>{item.product.name}</h3>
                                        <p class="description">
                                            Quantity {item.quantity} at {formatCurrency(item.product.price)} each
                                        </p>
                                    </div>
                                    <div class="line-actions">
                                        <p class="price">{formatCurrency(item.product.price * item.quantity)}</p>
                                    </div>
                                </article>
                            {/each}
                        </div>
                    {/if}
                </div>

                <aside class="summary-panel">
                    <p>Subtotal</p>
                    <strong>{formatCurrency(cart.subtotal)}</strong>
                    <p>Estimated tax</p>
                    <strong>{formatCurrency(cart.tax)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(cart.total)}</strong>
                    <div class="payment-box">
                        <p class="payment-label">Payment method</p>
                        <div class="payment-choice selected">
                            <div>
                                <p class="payment-title">Demo credit card ending in 4242</p>
                            </div>
                        </div>
                        <div class="payment-choice payment-placeholder" aria-disabled="true">
                            <span class="payment-plus">+</span>
                            <div>
                                <p class="payment-title">Add another method</p>
                                <p class="payment-copy">Reserved for future cards and other payment options.</p>
                            </div>
                        </div>
                    </div>
                    <div class="checkout-actions">
                        <button class="checkout-link place-order-button" on:click={placeOrder} disabled={cart.items.length === 0}>
                            Place order
                        </button>
                        <a class="checkout-link secondary-link" href="/buyer/cart">Back to cart</a>
                    </div>
                </aside>
            </div>
        {:else if currentPage === 'confirmation' && order}
            <div class="cart-layout">
                <div class="panel">
                    <div class="list-grid">
                        {#each order.items as item}
                            <article class="line-card">
                                <div>
                                    <p class="seller">Seller ID {item.sellerId}</p>
                                    <h3>{item.productName}</h3>
                                    <p class="description">
                                        Quantity {item.quantity} at {formatCurrency(item.unitPrice)} each
                                    </p>
                                </div>
                                <div class="line-actions">
                                    <p class="price">{formatCurrency(item.lineTotal)}</p>
                                </div>
                            </article>
                        {/each}
                    </div>
                </div>

                <aside class="summary-panel">
                    <p>Order number</p>
                    <strong>#{order.id}</strong>
                    <p>Status</p>
                    <strong>{order.status}</strong>
                    <p>Payment method</p>
                    <strong>{formatPaymentMethod(order.paymentMethod)}</strong>
                    <p>Placed at</p>
                    <strong>{formatDate(order.createdAt)}</strong>
                    <p>Subtotal</p>
                    <strong>{formatCurrency(order.subtotal)}</strong>
                    <p>Tax</p>
                    <strong>{formatCurrency(order.taxAmount)}</strong>
                    <p>Total</p>
                    <strong>{formatCurrency(order.total)}</strong>
                    <div class="checkout-actions">
                        <a class="checkout-link" href="/buyer/home">Continue shopping</a>
                    </div>
                </aside>
            </div>
        {:else if currentPage === 'compare'}
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

        {#if statusMessage}
            <p class="status-banner">{statusMessage}</p>
        {/if}
    </section>
</div>
