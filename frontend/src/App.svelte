<script>
    import { onDestroy, onMount, tick } from 'svelte';
    import AppHero from './components/AppHero.svelte';
    import CatalogHeader from './components/CatalogHeader.svelte';
    import AdminAuditView from './components/AdminAuditView.svelte';
    import AdminHomeView from './components/AdminHomeView.svelte';
    import AdminModerationView from './components/AdminModerationView.svelte';
    import CartView from './components/CartView.svelte';
    import CheckoutView from './components/CheckoutView.svelte';
    import CompareView from './components/CompareView.svelte';
    import OrderConfirmationView from './components/OrderConfirmationView.svelte';
    import OrderHistoryView from './components/OrderHistoryView.svelte';
    import ProductDetailView from './components/ProductDetailView.svelte';
    import SellerHomeView from './components/SellerHomeView.svelte';
    import SellerInventoryView from './components/SellerInventoryView.svelte';
    import StorefrontView from './components/StorefrontView.svelte';
    import {
        capitalizeRole,
        detectPage,
        formatActionType,
        formatCurrency,
        formatDate,
        formatPaymentMethod,
        getAppMode,
        getOrderIdFromPath,
        getPageContent,
        getPageTitle,
        getProductIdFromPath,
        getUserStatus,
        truncate
    } from './lib/app-shell.js';

    const THEME_OPTIONS = [
        { value: 'accessible', label: 'Winter Ice' },
        { value: 'warm', label: 'Warm' },
        { value: 'terminal', label: 'Terminal' },
        { value: 'cool-grey', label: 'Cool Grey' },
        { value: 'accessible-dark', label: 'Deep Blue' },
        { value: 'accessible-blue-gold', label: 'Honeycomb' },
        { value: 'accessible-mono', label: 'Monochrome' }
    ];

    const VALID_THEMES = new Set(THEME_OPTIONS.map((option) => option.value));

    let appMode = 'buyer';
    let currentPage = 'storefront';
    let products = [];
    let productSearch = '';
    let product = null;
    let compareItems = [];
    let cart = {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };
    let order = null;
    let orderHistory = [];
    let orderHistoryPageInfo = {
        page: 1,
        totalPages: 1,
        hasPreviousPage: false,
        hasNextPage: false
    };
    let sellerProducts = [];
    let sellerForm = {
        name: '',
        description: '',
        imageDataUrl: '',
        imagePreviewUrl: '',
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
    let shippingAddress = {
        name: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'US'
    };
    let currentTheme = 'accessible';
    let themeMenuOpen = false;
    let loading = true;
    let errorMessage = '';
    let statusMessage = '';
    let cartNotifications = [];
    let cartNotificationTimers = new Map();

    $: pageContent = getPageContent(currentPage);

    async function fetchJson(url, options = {}) {
        const response = await fetch(url, options);
        const contentType = response.headers.get('content-type') || '';
        const data = contentType.includes('application/json') ? await response.json() : null;

        if (!response.ok) {
            throw new Error(data?.error || 'Request failed');
        }

        return data;
    }

    function applyTheme(theme) {
        currentTheme = VALID_THEMES.has(theme) ? theme : 'accessible';

        if (typeof document !== 'undefined') {
            document.documentElement.dataset.theme = currentTheme;
        }

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('ram-theme', currentTheme);
        }
    }

    function toggleThemeMenu() {
        themeMenuOpen = !themeMenuOpen;
    }

    function selectTheme(theme) {
        applyTheme(theme);
        themeMenuOpen = false;
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
        adminProducts = adminProducts.map((item) => item.id === nextProduct.id ? { ...item, ...nextProduct } : item);
    }

    async function loadProducts(resetStatus = false) {
        loading = true;
        errorMessage = '';
        if (resetStatus) statusMessage = '';

        try {
            const search = productSearch.trim();
            const endpoint = search
                ? `/api/buyer/products?search=${encodeURIComponent(search)}`
                : '/api/buyer/products';

            products = await fetchJson(endpoint);
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
            const [pendingUsers, productsPage, usersPage] = await Promise.all([
                fetchJson('/api/admin/pending-users'),
                fetchJson('/api/admin/products'),
                fetchJson(`/api/admin/users?page=${page}&search=${encodeURIComponent(search)}`)
            ]);

            adminPendingUsers = pendingUsers;
            adminProducts = productsPage;
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

    async function loadOrderHistory(page = 1) {
        loading = true;
        errorMessage = '';
        statusMessage = '';

        try {
            const response = await fetchJson(`/api/buyer/orders?page=${page}`);
            orderHistory = response.orders || [];
            orderHistoryPageInfo = {
                page: response.page,
                totalPages: response.totalPages,
                hasPreviousPage: response.hasPreviousPage,
                hasNextPage: response.hasNextPage
            };
        } catch (error) {
            errorMessage = error.message || 'Could not load order history.';
        } finally {
            loading = false;
        }
    }

    async function loadCurrentPage() {
        appMode = getAppMode();
        currentPage = detectPage();

        if (currentPage === 'admin-home' || currentPage === 'seller-home') {
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

        if (currentPage === 'seller-inventory') {
            await loadSellerProducts();
            return;
        }

        if (currentPage === 'cart' || currentPage === 'checkout') {
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

        if (currentPage === 'orders') {
            await loadOrderHistory();
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

    function updateSellerForm(field, event) {
        sellerForm = {
            ...sellerForm,
            [field]: event.currentTarget.value
        };
    }

    function updateSellerImage(event) {
        const [file] = event.currentTarget.files || [];

        if (!file) {
            sellerForm = {
                ...sellerForm,
                imageDataUrl: '',
                imagePreviewUrl: ''
            };
            return;
        }

        if (!['image/jpeg', 'image/png'].includes(file.type)) {
            statusMessage = 'Select a JPEG or PNG file for the product photo.';
            event.currentTarget.value = '';
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            statusMessage = 'Product image must be 2 MB or smaller.';
            event.currentTarget.value = '';
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            sellerForm = {
                ...sellerForm,
                imageDataUrl: String(reader.result || ''),
                imagePreviewUrl: String(reader.result || '')
            };
            statusMessage = '';
        };
        reader.onerror = () => {
            statusMessage = 'Could not read selected image.';
        };
        reader.readAsDataURL(file);
    }

    function updateShippingAddress(field, event) {
        shippingAddress = {
            ...shippingAddress,
            [field]: event.currentTarget.value
        };
    }

    function updateAdminUserSearch(event) {
        adminUserSearch = event.currentTarget.value;
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
                    imageDataUrl: sellerForm.imageDataUrl,
                    price: parsedPrice,
                    stock: parsedStock
                })
            });

            sellerForm = {
                name: '',
                description: '',
                imageDataUrl: '',
                imagePreviewUrl: '',
                price: '',
                stock: ''
            };
            sellerListingForm?.reset();
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
            const item = await fetchJson(`/api/admin/products/${id}/approve`, { method: 'POST' });
            statusMessage = 'Product approved.';
            applyAdminProductUpdate(item);
        } catch (error) {
            statusMessage = error.message || 'Could not approve product.';
        }
    }

    async function rejectProduct(id) {
        statusMessage = '';
        try {
            const item = await fetchJson(`/api/admin/products/${id}/reject`, { method: 'POST' });
            statusMessage = 'Product rejected.';
            applyAdminProductUpdate(item);
        } catch (error) {
            statusMessage = error.message || 'Could not reject product.';
        }
    }

    async function delistProduct(id) {
        statusMessage = '';
        try {
            const item = await fetchJson(`/api/admin/products/${id}/delist`, { method: 'POST' });
            statusMessage = 'Product delisted.';
            applyAdminProductUpdate(item);
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

    function updateProductSearch(event) {
        productSearch = event.target.value;
    }

    async function searchProducts() {
        await preserveScrollDuring(() => loadProducts(true));
    }

    async function clearProductSearch() {
        productSearch = '';
        await preserveScrollDuring(() => loadProducts(true));
    }

    async function goToOrderHistoryPage(nextPage) {
        if (nextPage < 1 || nextPage > orderHistoryPageInfo.totalPages) {
            return;
        }

        await preserveScrollDuring(() => loadOrderHistory(nextPage));
    }

    function showCartNotification(message, type = 'success') {
        const id = typeof crypto !== 'undefined' && crypto.randomUUID
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random()}`;

        cartNotifications = [
            ...cartNotifications,
            {
                id,
                message,
                type
            }
        ];

        const timer = setTimeout(() => {
            cartNotifications = cartNotifications.filter((notification) => notification.id !== id);
            cartNotificationTimers.delete(id);
        }, 3200);

        cartNotificationTimers.set(id, timer);
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
            showCartNotification('Item added to cart.');
        } catch (error) {
            statusMessage = error.message || 'Could not add item to cart.';
            showCartNotification(statusMessage, 'error');
        }
    }

    async function openRandomProduct() {
        statusMessage = '';

        try {
            const randomProduct = await fetchJson('/api/buyer/random_access');

            if (typeof window !== 'undefined') {
                window.location.href = `/buyer/products/${randomProduct.id}`;
            }
        } catch (error) {
            statusMessage = error.message || 'Could not load a random product.';
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
                    paymentMethod: selectedPaymentMethod,
                    shippingAddress
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
        const storedTheme = typeof localStorage === 'undefined' ? null : localStorage.getItem('ram-theme');
        applyTheme(storedTheme || 'accessible');
        await loadCurrentPage();
    });

    onDestroy(() => {
        cartNotificationTimers.forEach((timer) => clearTimeout(timer));
        cartNotificationTimers.clear();
    });
</script>

<svelte:head>
    <title>{getPageTitle(currentPage)}</title>
</svelte:head>

<div class="page-shell" data-page={currentPage}>
    <AppHero
        {appMode}
        {currentPage}
        onLogout={logout}
    />

    <section class="catalog">
        <CatalogHeader
            kicker={pageContent.kicker}
            heading={pageContent.heading}
            onRefresh={loadCurrentPage}
        />

        {#if loading}
            <div class="state-card">Loading...</div>
        {:else if errorMessage}
            <div class="state-card error">{errorMessage}</div>
        {:else if currentPage === 'admin-home'}
            <AdminHomeView />
        {:else if currentPage === 'admin-moderation'}
            <AdminModerationView
                {adminPendingUsers}
                {adminProducts}
                {adminUsers}
                {adminUsersPageInfo}
                {adminUserSearch}
                onAdminUserSearchInput={updateAdminUserSearch}
                {approveUser}
                {blockUser}
                {banUser}
                {approveProduct}
                {rejectProduct}
                {delistProduct}
                {searchAdminUsers}
                {clearAdminUserSearch}
                {goToAdminUsersPage}
                {capitalizeRole}
                {formatCurrency}
                {formatDate}
                {getUserStatus}
            />
        {:else if currentPage === 'admin-audit'}
            <AdminAuditView
                {adminAuditLogs}
                {formatActionType}
                {formatDate}
            />
        {:else if currentPage === 'seller-home'}
            <SellerHomeView />
        {:else if currentPage === 'seller-inventory'}
            <SellerInventoryView
                {sellerForm}
                {sellerProducts}
                bind:sellerListingForm
                {createSellerListing}
                onSellerFormInput={updateSellerForm}
                onSellerImageInput={updateSellerImage}
                {formatCurrency}
            />
        {:else if currentPage === 'product' && product}
            <ProductDetailView
                {product}
                {addToCart}
                {addToComparison}
                {formatCurrency}
            />
        {:else if currentPage === 'cart'}
            <CartView
                {cart}
                {removeFromCart}
                {formatCurrency}
            />
        {:else if currentPage === 'checkout'}
            <CheckoutView
                {cart}
                {placeOrder}
                {formatCurrency}
                {shippingAddress}
                onShippingInput={updateShippingAddress}
            />
        {:else if currentPage === 'confirmation' && order}
            <OrderConfirmationView
                {order}
                {formatCurrency}
                {formatDate}
                {formatPaymentMethod}
            />
        {:else if currentPage === 'orders'}
            <OrderHistoryView
                orders={orderHistory}
                pageInfo={orderHistoryPageInfo}
                {goToOrderHistoryPage}
                {formatCurrency}
                {formatDate}
                {formatPaymentMethod}
            />
        {:else if currentPage === 'compare'}
            <CompareView
                {compareItems}
                {addToCart}
                {removeFromCompare}
                {formatCurrency}
                {truncate}
            />
        {:else}
            <StorefrontView
                {products}
                {productSearch}
                {addToCart}
                {addToComparison}
                {openRandomProduct}
                onProductSearchInput={updateProductSearch}
                {searchProducts}
                {clearProductSearch}
                {formatCurrency}
            />
        {/if}

        {#if statusMessage}
            <p class="status-banner">{statusMessage}</p>
        {/if}
    </section>

    {#if cartNotifications.length > 0}
        <div class="cart-toast-stack" aria-live="polite" aria-label="Cart notifications">
            {#each cartNotifications as notification (notification.id)}
                <div class="cart-toast" class:error={notification.type === 'error'} role="status">
                    {notification.message}
                </div>
            {/each}
        </div>
    {/if}

    <div class="theme-dock">
        {#if themeMenuOpen}
            <div class="theme-dock-menu" role="menu" aria-label="Theme picker">
                {#each THEME_OPTIONS as option}
                    <button
                        class:active-theme={currentTheme === option.value}
                        class="theme-dock-option"
                        type="button"
                        role="menuitemradio"
                        aria-checked={currentTheme === option.value}
                        on:click={() => selectTheme(option.value)}
                    >
                        <span>{option.label}</span>
                        {#if currentTheme === option.value}
                            <span class="theme-dock-check">Current</span>
                        {/if}
                    </button>
                {/each}
            </div>
        {/if}

        <button
            class="theme-dock-toggle"
            type="button"
            aria-expanded={themeMenuOpen}
            aria-haspopup="menu"
            on:click={toggleThemeMenu}
        >
            Theme
        </button>
    </div>
</div>
