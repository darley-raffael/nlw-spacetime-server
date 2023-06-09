import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

app.get("/", async () => {
  const users = await prisma.user.findMany();
  return {
    message: "🚩 Iniciando projeto",
    user: users
  };
});

app.listen({
  port: 3333
}).then(() => {
  console.log("🚀 HTTP server running on http://localhost:3333s");
});
