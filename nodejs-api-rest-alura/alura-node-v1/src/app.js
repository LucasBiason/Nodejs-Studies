import express from "express";

const app = express();
app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

// Root route
app.get('/', (req, res) => {
    res.status(200).send("Curso de Node");
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    res.status(201).json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(201).send("Livro alterado com sucesso");
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params; // Atribuição via desestruturação
    let index = buscaLivro(id);
    livros.splice(index, 1); // Inicio e quantidade de elementos pra remover
    res.status(201).send(`Livro ${id} removido com sucesso`);
})

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app; // Export all features for another module uses it.