import express from "express";
import { promises as fs } from "fs";
import cors from "cors";

const router = express.Router();

router.post("/", async (req, res) => {
  let account = req.body;
  const { name, balance } = account;
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);

    account = { id: json.nextId, ...account };
    json.nextId++;
    json.accounts.push(account);

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send({
      message: `Post account: ${name} - ${balance} created.`,
      account,
    });
    logger.info(`Post account: ${name} - ${balance} created.`);
  } catch (error) {
    res.status(400).send({
      message: "Erro na leitura",
      error: error.message,
    });
    logger.error(`Erro na leitura:  ${error.message}...`);
  }
});

router.get("/", cors(), async (_, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    const result = JSON.parse(data);
    delete result.nextId;
    res.status(200).send({
      message: "HTTP code: 200 - OK",
      ...result,
    });
    logger.info(`GET ALL - result: ${JSON.stringify(result)}`);
  } catch (error) {
    res.status(400).send({
      message: "Bad request",
      error: error.message,
    });
    logger.error(`Bad request: ${error.message}`);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    const id = parseInt(req.params.id, 10);
    const result = JSON.parse(data);
    const account = result.accounts.find((account) => account.id === id);
    if (account) {
      const msg = {
        message: "HTTP code: 200 - OK",
        ...account,
      };
      res.status(200).send(msg);
      logger.info(`GET with Id - result: ${JSON.stringify(msg)}`);
    } else {
      res.status(404).send({
        message: "HTTP code: 404 - Not Found",
      });
      logger.error("HTTP code: 404 - Not Found");
    }
  } catch (error) {
    const msgError = {
      message: "HTTP code: 400 - Bad request",
      error: err.message,
    };
    res.status(400).send(msgError);

    logger.error(`${JSON.stringify(msgError)}`);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await fs.readFile(global.fileName, "utf8");
    const id = parseInt(req.params.id, 10);
    const result = JSON.parse(data);

    const account = result.accounts.find((account) => account.id === id);
    if (!account) {
      res.status(404).send({
        message: "HTTP code: 404 - Not Found",
      });
      logger.error("HTTP code: 404 - Not Found");
      return;
    }

    let accounts = result.accounts.filter((account) => account.id !== id);
    result.accounts = accounts;

    await fs.writeFile(global.fileName, JSON.stringify(result));
    res.send({
      message: `Delete account: ${id} deleted.`,
    });
    logger.info(`Delete account: ${id} deleted.`);
  } catch (error) {
    const errorMsg = {
      message: "HTTP code: 400 - Bad request",
      error: error.message,
    };
    res.status(400).send(errorMsg);
    logger.error(`${JSON.stringify(errorMsg)}`);
  }
});

router.put("/", async (req, res) => {
  try {
    let accountBody = req.body;
    let data = await fs.readFile(global.fileName, "utf8");
    let json = JSON.parse(data);
    let id = accountBody.id;
    let oldIndex = json.accounts.findIndex((account) => account.id === id);

    json.accounts[oldIndex].name = accountBody.name;
    json.accounts[oldIndex].balance = accountBody.balance;

    await fs.writeFile(global.fileName, JSON.stringify(json));
    res.send({
      message: `PUT account: ${id} updated.`,
    });
    logger.info(`PUT account: ${id} updated.`);
  } catch (error) {
    const errorMsg = {
      message: "HTTP code: 400 - Bad request",
      error: error.message,
    };
    res.status(400).send(errorMsg);
    logger.error(errorMsg);
  }
});

router.post("/transaction", async (req, res) => {
  try {
    let accountBody = req.body;
    let data = await fs.readFile(global.fileName, "utf8");

    let json = JSON.parse(data);
    let id = accountBody.id;
    let index = json.accounts.findIndex((account) => account.id === id);
    const oldValue = json.accounts[index].balance;
    const result = oldValue + accountBody.value;

    if (result < 0)
      throw new Error("Não há saldo suficiente para realizar essa operação.");

    json.accounts[index].balance = result;

    await fs.writeFile(global.fileName, JSON.stringify(json));
    const msgSuccess = {
      message: `POST account/deposit: ${id} updated.`,
      oldValue: oldValue,
      value: accountBody.value,
      result: result,
    };
    res.send(msgSuccess);
    logger.info(JSON.stringify(msgSuccess));
  } catch (error) {
    const errorMsg = {
      message: "HTTP code: 400 - Bad request",
      error: error.message,
    };
    res.status(400).send(errorMsg);
  }
});

export default router;
