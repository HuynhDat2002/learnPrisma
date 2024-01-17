import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main(){

    const users= await prisma.user.findUnique({
        where:{
            email:"trongdat2002@gmail.com",
        }
    })
    console.log(users);
}

main()
    .catch(e=>{
        console.log(e.message);
    })
    .finally(async ()=>{
        await prisma.$disconnect()
    })