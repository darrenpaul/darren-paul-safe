const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const TelegramBot = require("telegrambot");
const port = process.env.PORT || 3000;
const telegram = new TelegramBot("00000000000000000000000000000000");

app
  .prepare()
  .then(() => {
    const server = express();

    // BODY PARSER MIDDLEWARE
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.post("/sendMessage", (req, res) => {
      if (req.body && Object.keys(req.body).length) {
        const data = req.body;
        const message = `New message for Darren from\nname: ${data.name}\ncompany: ${data.company}\nemail: ${data.email}\n\n${data.message}`;
        const query = telegram.invoke(
          "sendMessage",
          {
            chat_id: "00000000000000000000000000000000",
            text: message,
          },
          function (err, resMessage) {
            if (err) throw err;
          }
        );
      }
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
