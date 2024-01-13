const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/product");
const app = express();
const cors = require("cors");
const port = process.env.PORT;

//cors
app.use(cors());

//middleware
app.use(express.json());
app.use("/api", userRoutes);



app.get("/", (req, res) =>{
    res.send("Bienvenido a mi Api Rest")
})

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Conexion exitosa!!");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, ()=> console.log("server listening on port", port))

