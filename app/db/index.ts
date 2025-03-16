import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

//@ts-expect-error
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

//@ts-expect-error
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma