import express from 'express';
import LivroController from '../controllers/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);

// A ordem da rota deve ser da mais complexa para a menos complexa.
routes.get('/livros/busca', LivroController.buscaLivroPorEditora);
routes.get('/livros/:id', LivroController.buscaLivroPorId);

routes.post('/livros', LivroController.cadastrarLivro);
routes.put('/livros/:id', LivroController.atualizarLivro);
routes.delete('/livros/:id', LivroController.excluirLivro);

export default routes;