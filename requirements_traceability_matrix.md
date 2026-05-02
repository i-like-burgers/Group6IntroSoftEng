# Requirements Traceability Matrix

This matrix is separate from the CI coverage form so requirements, implementation, and verification can be reviewed directly.

| Requirement / Story ID | Requirement Summary | Implementation Location | Verification Location | Status |
| --- | --- | --- | --- | --- |
| FREQ-1 to FREQ-6 / #1 | Register a new account and require approval. | `ecom-project/routes/api/auth.js`, Prisma `User` model | `ecom-project/__tests__/database.integration.test.js` | Implemented / automated |
| FREQ-7 to FREQ-11 / #2 | Authenticate users and issue login token. | `ecom-project/routes/api/auth.js`, `ecom-project/authenticate.js` | `ecom-project/__tests__/database.integration.test.js` | Implemented / automated |
| FREQ-10, FREQ-15 to FREQ-17 / #5 | Redirect authenticated users and protect role-specific home pages. | `ecom-project/routes/buyer.js`, `ecom-project/routes/seller.js`, `ecom-project/routes/admin.js` | `ecom-project/__tests__/protected.routes.test.js` | Implemented / automated |
| FREQ-18 / #27 | Search or list buyer-visible products. | `ecom-project/routes/api/buyer.js`, `StorefrontView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
| FREQ-21 to FREQ-24 / #28 | View product details and add products to cart. | `ecom-project/routes/api/buyer.js`, `ProductDetailView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
| FREQ-25 to FREQ-28 / #41 | Compare selected products. | `ecom-project/routes/api/buyer.js`, `CompareView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / partially automated |
| FREQ-29 to FREQ-36 / #30, #31, #32 | View cart, add items, remove items, and calculate checkout totals. | `ecom-project/routes/api/buyer.js`, `CartView.svelte`, `CheckoutView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
| FREQ-37, FREQ-39, FREQ-40, FREQ-45, FREQ-47 / #33, #35 | View seller inventory and create valid pending listings. | `ecom-project/routes/api/seller.js`, `SellerInventoryView.svelte` | `ecom-project/__tests__/seller.api.test.js` | Implemented / automated |
| FREQ-42 / NEW-SELLER-EDIT-DETAILS | Edit seller listing details. | Planned | Planned | Not yet implemented |
| FREQ-42 / NEW-SELLER-EDIT-MODERATION | Return edited listings to pending admin approval. | Planned | Planned | Not yet implemented |
| FREQ-48 to FREQ-49B / NEW-RETURN | Submit product return requests, track return request status, allow seller review, and deduct approved returns from seller wallet availability. | `ecom-project/routes/api/buyer.js`, `ecom-project/routes/api/seller.js`, `OrderConfirmationView.svelte`, `SellerSalesView.svelte`, Prisma `ReturnRequest` model | `ecom-project/__tests__/buyer.api.test.js`, `ecom-project/__tests__/seller.api.test.js` | Implemented / automated |
| FREQ-50A / NEW-SELLER-SALES | Let sellers view seller-scoped sales records and aggregate sales totals. | `ecom-project/routes/api/seller.js`, `SellerSalesView.svelte`, `App.svelte`, `app-shell.js` | `ecom-project/__tests__/seller.api.test.js` | Implemented / automated |
| FREQ-52 to FREQ-55 / #36 | View active order status and mock tracking information. | `ecom-project/routes/api/buyer.js`, `OrderHistoryView.svelte`, `OrderConfirmationView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
| FREQ-61 to FREQ-65 / #26 | View past purchases. | `ecom-project/routes/api/buyer.js`, `OrderHistoryView.svelte`, `OrderConfirmationView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Partially implemented / partially automated |
| FREQ-72 to FREQ-74 / #39 | Link mock bank information, receive sale funds into a seller wallet, and withdraw wallet funds by mock payout. | `ecom-project/routes/api/seller.js`, `ecom-project/routes/api/buyer.js`, `SellerHomeView.svelte`, Prisma `SellerWallet`, `SellerBankAccount`, and `SellerPayout` models | `ecom-project/__tests__/seller.api.test.js`, `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
| FREQ-77 to FREQ-86 / #3, #18, #69 | Moderate users, ban accounts, moderate products, and audit actions. | `ecom-project/routes/api/admin.js`, `AdminModerationView.svelte`, `AdminAuditView.svelte` | `ecom-project/__tests__/admin.api.test.js` | Implemented / automated and partially automated |
| FREQ-87 / #84 | Open a random buyer-visible product. | `ecom-project/routes/api/buyer.js`, `StorefrontView.svelte` | `ecom-project/__tests__/buyer.api.test.js` | Implemented / automated |
