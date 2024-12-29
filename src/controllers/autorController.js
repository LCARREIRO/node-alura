import { autor } from "../models/autor.js";

class AutorController {
  
  static async listarAutors(req, res) {
    try {
      const listaAutors = await autor.find({});
      res.status(200).json(listaAutors);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na requisição.` });
    }
  }

  static async buscaAutorPorId(req, res) {
    try {
      const id = req.params.id;  
      const livroEncontrado = await autor.findById(id);
      res.status(200).json(livroEncontrado);
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na requisição.` });
    }
  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao cadastrar autor` });
    }
  }

  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;  
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "autor atualizado"});
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na atualização.` });
    }
  }

  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;  
      await autor.findByIdAndDelete(id);
      res.status(200).json({ message: "autor excluído com sucesso"});
    } catch (error) {
      res
      .status(500)
      .json({ message: `${error.message} - falha na exclusão.` });
    }
  }
}

export default AutorController;
