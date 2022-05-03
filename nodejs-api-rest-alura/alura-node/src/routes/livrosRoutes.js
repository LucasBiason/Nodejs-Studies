import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();
router.get('/livros', LivroController.listarLivros);
router.get('/livros/busca', LivroController.listarLivrosPorEditora);
router.get('/livros/:id', LivroController.captarLivro);
router.post('/livros', LivroController.criarLivro);
router.put('/livros/:id', LivroController.atualizarLivro);
router.delete('/livros/:id', LivroController.excluirLivro);

export default router;