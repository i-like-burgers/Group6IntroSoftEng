function requireRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user) {
            return res.redirect('/login');
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.redirect('/denied');
        }

        next();
    };
}

module.exports = { requireRole };