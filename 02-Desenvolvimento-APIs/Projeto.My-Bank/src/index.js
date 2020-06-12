import express from "express";
import { promises as fs } from "fs";
import winston from "winston";
import accountsRouter from "./routes/accounts.js";
import swaggerUI from "swagger-ui-express";
import { swaggerDocument } from "../doc.js";

const app = express();

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const port = 3000;
global.fileName = "src/account.json";
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myFormat),
});

app.use(express.json());
app.use("/account", accountsRouter);
app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.listen(port, async () => {
  try {
    await fs.readFile(global.fileName, "utf8");
    logger.info(`API started on port ${port}...`);
  } catch (error) {
    const initialJSON = {
      nextId: 1,
      accounts: [],
    };
    try {
      await fs.writeFile(global.fileName, JSON.stringify(initialJSON));
    } catch (error) {
      logger.error(`Error: ${error.message}...`);
    }
  }
});
