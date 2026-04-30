export const PAGE_CONTENT = {
    'admin-home': {
        title: 'Admin Home',
        kicker: 'Administration',
        heading: 'Administration home'
    },
    'admin-moderation': {
        title: 'Admin Moderation',
        kicker: 'Moderation center',
        heading: 'Admin moderation'
    },
    'admin-audit': {
        title: 'Admin Audit Log',
        kicker: 'Activity records',
        heading: 'Audit log'
    },
    'seller-home': {
        title: 'Seller Home',
        kicker: 'Seller workspace',
        heading: 'Seller control center'
    },
    'seller-inventory': {
        title: 'Seller Inventory',
        kicker: 'Inventory management',
        heading: 'Your listings'
    },
    cart: {
        title: 'Buyer Cart',
        kicker: 'Cart summary',
        heading: 'Your cart'
    },
    checkout: {
        title: 'Checkout Review',
        kicker: 'Checkout review',
        heading: 'Review your order'
    },
    compare: {
        title: 'Compare Products',
        kicker: 'Side-by-side shortlist',
        heading: 'Compare products'
    },
    confirmation: {
        title: 'Order Confirmation',
        kicker: 'Purchase complete',
        heading: 'Order confirmation'
    },
    orders: {
        title: 'Order History',
        kicker: 'Buyer records',
        heading: 'Order history'
    },
    product: {
        title: 'Product Detail',
        kicker: 'Product spotlight',
        heading: 'Hardware details'
    },
    storefront: {
        title: 'Buyer Storefront',
        kicker: 'Live inventory',
        heading: 'Available hardware'
    }
};

export const NAV_LINKS = {
    admin: [
        { href: '/admin', label: 'Admin Home' },
        { href: '/admin/sub', label: 'Moderation' },
        { href: '/admin/audit', label: 'Audit' }
    ],
    seller: [
        { href: '/seller/home', label: 'Seller Home' },
        { href: '/seller/inventory', label: 'Inventory' }
    ],
    buyer: [
        { href: '/buyer/home', label: 'Storefront' },
        { href: '/buyer/cart', label: 'Cart' },
        { href: '/buyer/orders', label: 'Orders' },
        { href: '/buyer/compare', label: 'Compare' }
    ]
};

export function getPath() {
    return typeof window === 'undefined' ? '/buyer/home' : window.location.pathname;
}

export function getProductIdFromPath() {
    const match = getPath().match(/\/buyer\/products\/(\d+)/);
    return match ? Number(match[1]) : null;
}

export function getOrderIdFromPath() {
    const match = getPath().match(/\/buyer\/orders\/(\d+)\/confirmation/);
    return match ? Number(match[1]) : null;
}

export function getAppMode(path = getPath()) {
    if (path.startsWith('/admin')) {
        return 'admin';
    }

    return path.startsWith('/seller') ? 'seller' : 'buyer';
}

export function detectPage(path = getPath()) {
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

    if (path === '/buyer/orders') {
        return 'orders';
    }

    if (/\/buyer\/orders\/\d+\/confirmation$/.test(path)) {
        return 'confirmation';
    }

    if (/\/buyer\/products\/\d+$/.test(path)) {
        return 'product';
    }

    return 'storefront';
}

export function getPageContent(currentPage) {
    return PAGE_CONTENT[currentPage] || PAGE_CONTENT.storefront;
}

export function getPageTitle(currentPage) {
    return getPageContent(currentPage).title;
}

export function getAdminClassicPath(currentPage) {
    if (currentPage === 'admin-moderation') {
        return '/admin/classic/sub';
    }

    if (currentPage === 'admin-audit') {
        return '/admin/classic/audit';
    }

    return '/admin/classic';
}

export function getClassicPath(appMode, currentPage) {
    if (appMode === 'admin') {
        return getAdminClassicPath(currentPage);
    }

    if (appMode === 'seller') {
        return '/seller/classic/home';
    }

    return '/buyer/classic/home';
}

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

export function formatDate(value) {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short'
    }).format(new Date(value));
}

export function formatPaymentMethod(paymentMethod) {
    if (paymentMethod === 'demo_card') {
        return 'Demo Credit Card';
    }

    return paymentMethod;
}

export function truncate(text, maxLength) {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
}

export function capitalizeRole(role) {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1);
}

export function getUserStatus(user) {
    if (user.banned) return 'Banned';
    if (user.blocked) return 'Blocked';
    if (user.approved) return 'Approved';
    return 'Pending';
}

export function formatActionType(actionType) {
    if (!actionType) return '';
    return actionType
        .split('_')
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(' ');
}
