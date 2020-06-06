var express = require("express");
var fs = require("fs");
var app = express();

app.use(express.json());

var port = 3000;
const accountJSON = "src/account.json";

app.post("/account", (req, res) => {
  let account = req.body;
  const { name, balance } = account;

  fs.readFile(accountJSON, "utf8", (err, data) => {
    if (!err) {
      try {
        let json = JSON.parse(data);
        account = { id: json.nextId, ...account };
        json.nextId++;
        json.accounts.push(account);

        fs.writeFile(accountJSON, JSON.stringify(json), (er) => {
          if (er) {
            res.status(400).send({
              message: "Erro na gravação",
              error: er.message,
            });
          } else {
            res.send({
              message: `Post account: ${name} - ${balance} created.`,
              account,
            });
          }
        });
      } catch (err) {
        res.status(400).send({
          message: "Bad request",
          error: err.message,
        });
      }
    } else {
      res.status(400).send({
        message: "Erro na leitura",
        error: err.message,
      });
    }
  });
});

app.listen(port, () => {
  try {
    fs.readFile(accountJSON, "utf8", (err, data) => {
      if (err) {
        const initialJSON = {
          nextId: 1,
          accounts: [],
        };
        fs.writeFile(accountJSON, JSON.stringify(initialJSON), (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
  return console.log(`API started on port ${port}...`);
});
