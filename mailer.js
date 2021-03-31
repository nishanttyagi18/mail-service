require("dotenv").config();
// include nodemailer
const nodemailer = require("nodemailer");

const sendMail = (data, query) => {
  let Name = data.name;
  // declare vars
  let fromMail = "bridgers.tech@gmail.com";
  let toMail = "tyagi11n@gmail.com";

  // let toMail = 'gnbaviskar2@gmail.com,gnbaviskar3@gmail.com';

  let subject = Name + " has posted a query on Website";
  let text = `
Hi There,

You recently got an enquiry on your website from ${Name}.

Here are the details of Client.

${query}

With Regards,

Team Bridgers
  `;

  // auth
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bridgers.tech@gmail.com",
      pass: process.env.password,
    },
  });

  // email options
  let mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text,
  };

  // send email
  transporter.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.log(error);
    }
    console.log(response);
  });
};

module.exports = { sendMail };
