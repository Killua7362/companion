const {PrismaClient} =require('@prisma/client')

const db = new PrismaClient();

async function main() {
    try{
        await db.category.createMany({
            data:[
                {name: 'Famous people'},
                {name: 'Movie and TV'},
                {name: 'Musician'},
                {name: 'Scientists'},
                {name: 'Business'},
            ]
        })
    }catch(err){
        console.error('Error seeding default categories',err)
    }finally{
        await db.$disconnect();
    }
}

main();