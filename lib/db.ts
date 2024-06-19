import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// export const db = {
//     connect() {
//         if (global.prisma) return global.prisma
//         global.prisma = new PrismaClient()
//         return global.prisma
//     },
//     disconnect() {
//         if (global.prisma) global.prisma.$disconnect()
//     },
// }

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

// export const db = new PrismaClient
