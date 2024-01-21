const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const authenticateToken = require("../middleware");
const { generarTokenRestablecimiento } = require("../authService");
const { sendEmail } = require("../emailService");

router.post("/solicitudResetPassword", async (req, res) => {
  try {
    const token = await generarTokenRestablecimiento(req.body.email);
    sendEmail(
      req.body.email,
      "Restablecimiento de contraseña",
      "Cambiar contraseña .. " + token
    );
    res.send(
      "Se ha enviado un enlace de restablecimiento de contraseña: " + token
    );
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/resetPassword/:token", async (req, res) => {
  try {
    const user = await userSchema.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .send("Token de restablecimiento invalido o expirado");
    }
    //hashear la nueva contraseña
    const hashedPassowrd = await bcrypt.hash(req.body.password, 12);
    user.password = hashedPassowrd;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();
    res.send("Contraseña actualizada correctamente");
  } catch (error) {
    res.status(500).send("Error al restablecer la contraseña");
  }
});

router.get("/protected", authenticateToken, (req, res) => {
  try {
    res.send("Exitoso");
  } catch (error) {
    console.log(error);
  }
});

//register
router.post("/register", async (req, res) => {
  try {
    const newUser = new userSchema(req.body);
    await newUser.save();
    res.status(201).send("Usuario registrado con exito");
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await userSchema.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      throw new Error("Credenciañes invalidads");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).send({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//create user
router.post("/user", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//get a user
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//update user
router.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//delete user
router.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
