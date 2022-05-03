import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();
router.get('/autores', AutorController.listarAutores);
router.get('/autores/:id', AutorController.captarAutor);
router.post('/autores', AutorController.criarAutor);
router.put('/autores/:id', AutorController.atualizarAutor);
router.delete('/autores/:id', AutorController.excluirAutor);

export default router;