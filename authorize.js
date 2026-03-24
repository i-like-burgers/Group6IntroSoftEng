function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            if (req.path.startsWith('/api/') || req.originalUrl.startsWith('/api/')) {
                return res.status(401).json({ error: 'Authentication is required' });
            }
            return res.redirect('/login');
        }

        if (!allowedRoles.includes(req.user.role)) {
            if (req.path.startsWith('/api/') || req.originalUrl.startsWith('/api/')) {
                return res.status(403).json({ error: 'Access denied' });
            }
            return res.redirect('/denied');
        }

        next();
    };
}

module.exports = { requireRole };
