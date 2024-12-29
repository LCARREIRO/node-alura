import livro from "../models/livro.js";
import { autor } from "../models/autor.js";

class LivroController {
  
  static async listarLivros(req, res) {
    try {
      // const listaLivros = await livro.find({});
      const listaLivros = await livro.find({}).populate("autor").exec();
      res.status(200).json(listaLivros);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na requisição.` });
    }
  }

  static async buscaLivroPorId(req, res) {
    try {
      const id = req.params.id;  
      const livroEncontrado = await livro.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na requisição.` });
    }
  }

  static async cadastrarLivro(req, res) {

    // const novoLivro = req.body;

    try {
      // const autorDoLivro = await autor.findById(novoLivro.autor);
      // const livroCompleto = { ...novoLivro, autor: { ...autorDoLivro._doc} };
      // const livroCriado = await livro.create(livroCompleto);

      const livroCriado = await livro.create(req.body);

      res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar livro` });
    }
  }

  static async atualizarLivro(req, res) {
    try {
      const id = req.params.id;  
      await livro.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "livro atualizado"});
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na atualização.` });
    }
  }

  static async excluirLivro(req, res) {
    try {
      const id = req.params.id;  
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "livro excluído com sucesso"});
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na exclusão.` });
    }
  }

  static async buscaLivroPorEditora(req, res) {
    try {
      const editora = req.query.editora;  
      const livroEncontrado = await livro.find({editora: editora });
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na requisição.` });
    }
  }
}

export default LivroController;
