const express = require("express");
const bodyParser = require("body-parser");
const { emailPublisher } = require("./publisher");

const app = express();

const port = 8080;

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.post("/register", async (req, res) => {
  const { email } = req.body;

  await emailPublisher(email);

  res
    .status(200)
    .json({ message: "Verification code has been sent to your email" });
});

app.use(router);

app.listen(port, () => {
  console.log("App is running on: ", port);
});
