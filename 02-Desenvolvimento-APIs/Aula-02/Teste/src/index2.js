import express from "express";
const app = express();
const router = express.Router();
const port = 3000;

router.get("/abc", (_, res) => {
  console.log("/test");
  res.end();
});

app.use("/test", router);

app.listen(port, () => {
  return console.log(`API started on port ${port}...`);
});
