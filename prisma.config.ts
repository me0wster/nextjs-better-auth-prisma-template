import { defineConfig, env } from "prisma/config";
import { config } from "dotenv";

// Load .env before defining the config
config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DATABASE_URL || "",
  },
});
