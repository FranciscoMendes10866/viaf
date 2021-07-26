import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.get("/country", async (request, reply) => {
  const countries = await prisma.country.findMany();
  return reply.send({ countries });
});

app.post("/country", async (request, reply) => {
  const country = await prisma.country.create({ data: { ...request.body } });
  return reply.send({ country });
});

app.get("/country/:id", async (request, reply) => {
  const { id } = request.params;
  const country = await prisma.country.findUnique({
    where: { id: Number(id) },
  });
  return reply.send({ country });
});

app.put("/country/:id", async (request, reply) => {
  const { id } = request.params;
  const country = await prisma.country.update({
    where: { id: Number(id) },
    data: { ...request.body },
  });
  return reply.send({ country });
});

app.delete("/country/:id", async (request, reply) => {
  const { id } = request.params;
  const country = await prisma.country.delete({ where: { id: Number(id) } });
  return reply.send({ country });
});

export default app;
