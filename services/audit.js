const prisma = require('../lib/prisma');

async function logAuditAction({ actorId, username, actionType, details }) {
    try {
        await prisma.auditLog.create({
            data: {
                actorId: actorId ?? null,
                username,
                actionType,
                details
            }
        });
    } catch (error) {
        console.error('Failed to write audit log:', error);
    }
}

module.exports = { logAuditAction };
