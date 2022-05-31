const express = require("express")
const {randomUUID} = require("crypto")
const fs = require("fs")
const app = express();

app.use(express.json())

let products = [];
fs.readFile("products.json", "utf-8", (err, data) => {
    if(err){
        console.log(err)
    } else {
        products = JSON.parse(data)
    }
});

function writeProductFile(cb){
    fs.writeFile(
        "products.json", JSON.stringify(products),
        (err) => {
            if(err) throw err
            else return cb()
        }
    );
}

app.get("/products", (req, res) => {
    return res.json(products);
});

app.get("/products/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id === id);
    return res.json(product);
});

app.post("/products", (req, res) => {
    const {name, price} = req.body;
    const product = {
        "name": name,
        "price": price,
        "id": randomUUID()
    }
    products.push(product);
    return writeProductFile(() => {
        res.json(product)
    })
});

app.put("/products/:id", (req, res) => {
    const { id } = req.params;
    const {name, price} = req.body;

    const productIndex = products.findIndex(product => product.id === id);
    products[productIndex]["name"] = name
    products[productIndex]["price"] = price

    return writeProductFile(() => {
        res.json({message: "Produto alterado com sucesso."});
    })
});

app.delete("/products/:id", (req, res) => {
    const { id } = req.params;
    const productIndex = products.findIndex(product => product.id === id);
    products.splice(productIndex, 1);

    return writeProductFile(() => {
        res.json({message: "Produto removido com sucesso."});
    })
});

app.listen(4002, () => console.log("Servidor rodando na porta 4002"))