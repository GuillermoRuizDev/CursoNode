const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "75093050@pronabec.edu.pe",
    pass: "andresONOFRE123",
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "75093050@pronabec.edu.pe",
    to: to,
    subject: subject,
    text: text,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error al enviar el email", error);
  }
};

module.exports = { sendEmail };
