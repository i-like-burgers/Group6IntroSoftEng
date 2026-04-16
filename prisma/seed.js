const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedUsers = [
  {
    username: process.env.SEED_ADMIN_USERNAME || 'admin',
    email: process.env.SEED_ADMIN_EMAIL || 'admin@ram.local',
    password: process.env.SEED_ADMIN_PASSWORD || 'admin1234',
    role: 'admin',
    approved: true,
    blocked: false,
    banned: false,
  },
  {
    username: process.env.SEED_SELLER_USERNAME || 'seller',
    email: process.env.SEED_SELLER_EMAIL || 'seller@ram.local',
    password: process.env.SEED_SELLER_PASSWORD || 'seller1234',
    role: 'seller',
    approved: true,
    blocked: false,
    banned: false,
  },
  {
    username: process.env.SEED_BUYER_USERNAME || 'buyer',
    email: process.env.SEED_BUYER_EMAIL || 'buyer@ram.local',
    password: process.env.SEED_BUYER_PASSWORD || 'buyer1234',
    role: 'buyer',
    approved: true,
    blocked: false,
    banned: false,
  },
];

async function upsertUser(user) {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  return prisma.user.upsert({
    where: { username: user.username },
    update: {
      email: user.email,
      password: hashedPassword,
      role: user.role,
      approved: user.approved,
      blocked: user.blocked,
      banned: user.banned,
    },
    create: {
      username: user.username,
      email: user.email,
      password: hashedPassword,
      role: user.role,
      approved: user.approved,
      blocked: user.blocked,
      banned: user.banned,
    },
  });
}

async function main() {
  const [admin, seller, buyer] = await Promise.all(seedUsers.map(upsertUser));

  await prisma.product.upsert({
    where: { id: 1 },
    update: {
      name: 'Sample Product',
      description: 'Seeded sample product for seller inventory testing.',
      price: 19.99,
      stock: 8,
      isListed: true,
      listingStatus: 'approved',
      sellerId: seller.id,
    },
    create: {
      id: 1,
      name: 'Sample Product',
      description: 'Seeded sample product for seller inventory testing.',
      price: 19.99,
      stock: 8,
      isListed: true,
      listingStatus: 'approved',
      sellerId: seller.id,
    },
  });

  console.log('Seed complete.');
  console.log(`Admin: ${admin.username} / ${seedUsers[0].password}`);
  console.log(`Seller: ${seller.username} / ${seedUsers[1].password}`);
  console.log(`Buyer: ${buyer.username} / ${seedUsers[2].password}`);
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
