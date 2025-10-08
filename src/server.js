import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB conectado!"))
  .catch((err) => console.log("Erro ao conectar:", err));

const Data = mongoose.model("Data", {
  name: String,
  category: [String],
  description: String,
  rate: Number,
  price: Number,
  stock: Number,
  image: String,
});

app.use(cors());
app.use(express.json());

// Rota para buscar todos os produtos ou por pesquisa
app.get("/products", async (req, res) => {
  try {
    const search = req.query.q; 
    let data;

    if (search) {
      
      data = await Data.find({ name: { $regex: search, $options: "i" } });
    } else {
      data = await Data.find();
    }

    res.send(data);
  } catch (err) {
    res.status(400).send({ error: "Erro ao buscar produtos", details: err.message });
  }
});

// Rota para buscar produto por ID
app.get("/products/:id", async (req, res) => {
  try {
    const product = await Data.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: "Produto não encontrado" });
    }
    res.send(product);
  } catch (err) {
    res.status(400).send({ error: "Erro ao buscar produto", details: err.message });
  }
});

// Outras rotas (POST, PUT, DELETE)
app.post("/", async (req, res) => {
  try {
    const data = new Data({
      name: req.body.name,
      category: req.body.category,
      description: req.body.description,
      rate: req.body.rate,
      price: req.body.price,
      stock: req.body.stock,
      image: req.body.image,
    });
    await data.save();
    res.send(data);
  } catch (err) {
    res.status(400).send({ error: "Erro ao criar produto", details: err.message });
  }
});

app.put("/:id", async (req, res) => {
  const data = await Data.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    rate: req.body.rate,
    price: req.body.price,
    stock: req.body.stock,
    image: req.body.image,
  });

  return res.send(data);
});

app.delete("/:id", async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);

    if (!data) {
      return res.status(404).send({ error: "Produto não encontrado" });
    }

    res.send({ message: "Produto deletado com sucesso", data });
  } catch (err) {
    res.status(400).send({ error: "Erro ao deletar produto", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});
