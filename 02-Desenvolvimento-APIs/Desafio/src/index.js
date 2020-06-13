import express from "express";
import { promises as fs } from "fs";
import winston from "winston";

const app = express();

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const port = 3000;

global.fileName = "src/grades.json";
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "src/grades-control-api.log" }),
  ],
  format: combine(
    label({ label: "grades-control-api" }),
    timestamp(),
    myFormat
  ),
});

app.use(express.json());

app.listen(port, async () => {
  try {
    await fs.readFile(global.fileName, "utf8");
    logger.info(`API started on port ${port}...`);
  } catch (error) {
    const initialJSON = {
      nextId: 1,
      grades: [],
    };
    try {
      await fs.writeFile(global.fileName, JSON.stringify(initialJSON));
    } catch (error) {
      logger.error(`Error: ${error.message}`);
    }
  }
});
