import livros from "../models/Livro.js";


class LivroController {

    static listarLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static criarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar livro.`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        livros.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            (err) => {
                if (err){
                    res.status(500).send({message:`${err.message} - Falha ao alterar livro.`});
                } else {
                    res.status(200).send({message:"Livro alterado com sucesso."});
                }
            }
        )
    }

    static captarLivro = (req, res) => {
        livros.findById(req.params.id)
        .populate('autor')
        .exec(
            (err, livros) => {
                if (err){
                    res.status(500).send({message:`${err.message} - ID do livro não localizado.`});
                } else {
                    res.status(200).send(livros);
                }
            }
        )
    }

    static excluirLivro = (req, res) => {
        livros.findByIdAndDelete(
            req.params.id,
            (err) => {
                if (err){
                    res.status(500).send({message:`${err.message} - ID do livro não localizado.`});
                } else {
                    res.status(200).send({message:"Livro removido com sucesso."});
                }
            }
        )
    }

    static listarLivrosPorEditora = (req, res) => {
        const editora = req.query.editora;
        livros.find({'editora':editora})
            .populate('autor')
            .exec((err, livros) => {
            res.status(200).json(livros);
        });
    }

}

export default LivroController;