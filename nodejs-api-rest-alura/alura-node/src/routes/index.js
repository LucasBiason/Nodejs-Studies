import express from "express";
import autores from "./autoresRoutes.js";
import livros from "./livrosRoutes.js";


const router = (app) => {

    app.route('/').get((req, res) => {
        res.status(200).send("Curso de Node");
    });

    app.use(
        express.json(),
        autores,
        livros
    );

}


export default router;
