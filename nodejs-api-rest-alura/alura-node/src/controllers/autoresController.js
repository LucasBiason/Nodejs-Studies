import autores from "../models/Autor.js";


class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    }

    static criarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err){
                res.status(500).send({message:`${err.message} - Falha ao cadastrar autor.`});
            } else {
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        autores.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            (err) => {
                if (err){
                    res.status(500).send({message:`${err.message} - Falha ao alterar autor.`});
                } else {
                    res.status(200).send({message:"Autor alterado com sucesso."});
                }
            }
        )
    }

    static captarAutor = (req, res) => {
        autores.findById(
            req.params.id,
            (err, autores) => {
                if (err){
                    res.status(500).send({message:`${err.message} - ID do autor não localizado.`});
                } else {
                    res.status(200).send(autores);
                }
            }
        )
    }

    static excluirAutor = (req, res) => {
        autores.findByIdAndDelete(
            req.params.id,
            (err) => {
                if (err){
                    res.status(500).send({message:`${err.message} - ID do autor não localizado.`});
                } else {
                    res.status(200).send({message:"Autor removido com sucesso."});
                }
            }
        )
    }

}

export default AutorController;