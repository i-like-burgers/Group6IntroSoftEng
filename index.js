const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const prisma = require('./lib/prisma');
const adminRouter = require('./routes/admin');
const adminApiRouter = require('./routes/api/admin');
const authRouter = require('./routes/api/auth');
const buyerRouter = require('./routes/buyer');
const buyerApiRouter = require('./routes/api/buyer');
const publicRouter = require('./routes/public');
const sellerRouter = require('./routes/seller');
const sellerApiRouter = require('./routes/api/seller');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/test', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', publicRouter);
app.use('/', authRouter);
app.use('/api/admin', adminApiRouter);
app.use('/api/buyer', buyerApiRouter);
app.use('/api/seller', sellerApiRouter);
app.use('/admin', adminRouter);
app.use('/seller', sellerRouter);
app.use('/buyer', buyerRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
