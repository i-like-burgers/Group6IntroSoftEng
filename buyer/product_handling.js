const express = require('express');
const {prisma} = require('../index')

application.use(express.json());
const prisma = new PrismaClient;

async function getSimilar(productID) {
    const product = await prisma.product.findUnique({
        where: {id: productID}
    });

    if(!product) {
        throw new Error("Product not found");
    }

    return await prisma.product.findMany({
        where: {
            category: product.category,
            NOT: {id: productID}
        }
    });
}

module.exports = {
    getSimilar
}