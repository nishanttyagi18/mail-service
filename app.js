const express = require("express");
const cors = require("cors");

const { sendMail } = require("./mailer");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/send", (req, res) => {
  var data = req.body;

  var query = `
     Name: ${data.name},
     Phone: ${data.phone},
     email: ${data.email},
     service: ${data.service},
     Description: ${data.description}
    `;
  //   console.log(query);
  sendMail(data, query);
  res.send(query);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("server running at port 3000");
});
