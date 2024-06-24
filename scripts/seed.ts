const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        {
          name: "Programming",
        },
        {
          name: "Design",
        },
        {
          name: "Business",
        },
        {
          name: "Marketing",
        },
        {
          name: "Music",
        },
        {
          name: "Photography",
        },
      ],
    });

    console.log("Success");
  } catch (err) {
    console.error("Error seeding the database categories", err);
  } finally {
    await database.$disconnect();
  }
}

main();
