const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/productos", require("./routes/productos.routes"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" Conectado a MongoDB");
    app.listen(process.env.PORT || 4000, () =>
      console.log(` Servidor corriendo en puerto ${process.env.PORT || 4000}`)
    );
  })
  .catch((err) => console.error(" Error al conectar a MongoDB:", err));
