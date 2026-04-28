const crypto = require('crypto');
const http = require('http');

const PORT = Number(process.env.PORT || 4010);
const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || '';

if (!WEBHOOK_SECRET) {
    console.error('WEBHOOK_SECRET is required');
    process.exit(1);
}

function verifySignature(body, signature) {
    const expected = crypto
        .createHmac('sha256', WEBHOOK_SECRET)
        .update(body)
        .digest('hex');

    if (!signature) {
        return false;
    }

    const signatureBuffer = Buffer.from(signature, 'utf8');
    const expectedBuffer = Buffer.from(expected, 'utf8');

    if (signatureBuffer.length !== expectedBuffer.length) {
        return false;
    }

    return crypto.timingSafeEqual(signatureBuffer, expectedBuffer);
}

function sendJson(res, statusCode, payload) {
    res.writeHead(statusCode, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(payload));
}

const server = http.createServer((req, res) => {
    if (req.method !== 'POST' || req.url !== '/seller-webhook') {
        return sendJson(res, 404, {
            error: 'Not found'
        });
    }

    const chunks = [];
    req.on('data', (chunk) => {
        chunks.push(chunk);
    });

    req.on('end', () => {
        const rawBody = Buffer.concat(chunks).toString('utf8');
        const signature = req.headers['x-ram-signature'];
        const eventName = req.headers['x-ram-event'];

        if (!verifySignature(rawBody, signature)) {
            return sendJson(res, 401, {
                error: 'Invalid signature'
            });
        }

        let payload;

        try {
            payload = JSON.parse(rawBody);
        } catch (error) {
            return sendJson(res, 400, {
                error: 'Invalid JSON payload'
            });
        }

        console.log('Webhook received');
        console.log(`Event: ${eventName || 'unknown'}`);
        console.log(JSON.stringify(payload, null, 2));

        return sendJson(res, 200, {
            ok: true
        });
    });
});

server.listen(PORT, () => {
    console.log(`Demo webhook receiver listening on http://localhost:${PORT}/seller-webhook`);
});
