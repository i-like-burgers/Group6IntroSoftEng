const crypto = require('crypto');

const prisma = require('../lib/prisma');

function generateSigningSecret() {
    return crypto.randomBytes(24).toString('hex');
}

function buildShipToAddress(order) {
    return {
        name: order.shipToName,
        line1: order.shipToLine1,
        line2: order.shipToLine2 || '',
        city: order.shipToCity,
        state: order.shipToState,
        postalCode: order.shipToPostalCode,
        country: order.shipToCountry
    };
}

async function getSellerWebhookConfig(sellerId) {
    const existing = await prisma.sellerWebhookSubscription.findUnique({
        where: { sellerId }
    });

    if (existing) {
        return existing;
    }

    return prisma.sellerWebhookSubscription.create({
        data: {
            sellerId,
            signingSecret: generateSigningSecret(),
            isActive: false
        }
    });
}

async function upsertSellerWebhookConfig({ sellerId, endpointUrl, isActive, regenerateSecret = false }) {
    const existing = await prisma.sellerWebhookSubscription.findUnique({
        where: { sellerId }
    });

    const nextSecret = regenerateSecret || !existing
        ? generateSigningSecret()
        : existing.signingSecret;

    return prisma.sellerWebhookSubscription.upsert({
        where: { sellerId },
        create: {
            sellerId,
            endpointUrl,
            isActive,
            signingSecret: nextSecret
        },
        update: {
            endpointUrl,
            isActive,
            signingSecret: nextSecret
        }
    });
}

function createWebhookSignature(payload, signingSecret) {
    return crypto
        .createHmac('sha256', signingSecret)
        .update(payload)
        .digest('hex');
}

async function deliverSellerOrderPlacedWebhooks(order) {
    const sellerIds = [...new Set(order.items.map((item) => item.sellerId))];
    if (sellerIds.length === 0) {
        return;
    }

    const subscriptions = await prisma.sellerWebhookSubscription.findMany({
        where: {
            sellerId: {
                in: sellerIds
            },
            isActive: true,
            endpointUrl: {
                not: null
            }
        }
    });

    if (subscriptions.length === 0) {
        return;
    }

    await Promise.allSettled(subscriptions.map(async (subscription) => {
        const sellerItems = order.items.filter((item) => item.sellerId === subscription.sellerId);
        const payload = JSON.stringify({
            event: 'order.placed',
            sellerId: subscription.sellerId,
            orderId: order.id,
            orderedAt: order.createdAt,
            shipToAddress: buildShipToAddress(order),
            items: sellerItems.map((item) => ({
                productName: item.productName,
                quantity: item.quantity
            }))
        });

        const response = await fetch(subscription.endpointUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RAM-Event': 'order.placed',
                'X-RAM-Signature': createWebhookSignature(payload, subscription.signingSecret)
            },
            body: payload
        });

        if (!response.ok) {
            throw new Error(`Webhook delivery failed with status ${response.status}`);
        }
    }));
}

module.exports = {
    deliverSellerOrderPlacedWebhooks,
    getSellerWebhookConfig,
    upsertSellerWebhookConfig
};
