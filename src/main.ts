// Import PrismaClient from Prisma ORM
import { PrismaClient } from "@prisma/client";

// Initialize a new Prisma Client instance
const prisma = new PrismaClient();

console.log("Hello World!");

/**
 * 📌 How to use Prisma:
 *
 * Prisma allows you to interact with your database using TypeScript.
 *
 * Example: Fetch all users from the "User" table
 *
 * async function getUsers() {
 *   const users = await prisma.user.findMany();
 *   console.log(users);
 * }
 *
 * getUsers();
 *
 * ✅ Make sure you have a "prisma/schema.prisma" file and run:
 * - `npx prisma migrate dev` (for migrations)
 * - `npx prisma generate` (to generate Prisma Client)
 *
 * 🔗 Prisma Documentation: https://www.prisma.io/docs
 */

// Example of using path aliases (@/) in TypeScript
// Make sure to configure "baseUrl" and "paths" in tsconfig.json
//
// tsconfig.json example:
// {
//   "compilerOptions": {
//     "baseUrl": "./",
//     "paths": {
//       "@/*": ["src/*"]
//     }
//   }
// }
//
// Example usage:
// import { someFunction } from "@/utils/helper";
// This allows cleaner imports instead of using relative paths like "../../utils/helper"
//
// 🔗 TypeScript Path Aliases Documentation: https://www.typescriptlang.org/tsconfig#paths
