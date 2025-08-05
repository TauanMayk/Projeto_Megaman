import fastify from "fastify";
import cors from "@fastify/cors";
import { megamanBosses, megamanWeapons } from "./datas/datas";
import type { DriversParams } from "./interface/interfaceparams";
import path from "path";

const server = fastify({ logger: true });

server.register(require("@fastify/static"), {
  root: path.join(__dirname, "../public/images"),
  prefix: "/images/",
});

server.register(cors, {
  origin: "*",
  methods: ["GET"],
});

server.get("/megaman-bosses", async (request, response) => {
  response.type("application/json").code(200);
  return { megamanBosses };
});

server.get("/megaman-weapons", async (request, response) => {
  response.type("application/json").code(200);
  return { megamanWeapons };
});

server.get<{ Params: DriversParams }>(
  "/megaman-bosses/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const itens = megamanBosses.find((d) => d.id === id);

    if (!itens) {
      response.type("application/json").code(404);
      return { message: "Boss Not Found" };
    } else {
      response.type("application/json").code(200);
      return { megamanBosses };
    }
  }
);

const port = Number(process.env.PORT);

server.listen({ port });
