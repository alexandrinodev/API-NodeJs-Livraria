/* eslint-disable no-unused-vars */
import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({})
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` })
        }

    }

    static async cadastrarLivro(req, res) {
        const novoLivro = req.body

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto = { ...novoLivro, autor: { ...autor._doc } }

            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "criado com sucesso", livro: livroCriado })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id
            const livroEcontrado = await livro.findById(id)
            res.status(200).json(livroEcontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do livro` })
        }

    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json({ message: "Livro atualizado" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do livro` })
        }

    }

    static async RemoverLivro(req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndRemove(id)
            res.status(200).json({ message: "Livro removido com sucesso" })
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na removação do livro` })
        }

    }

    static async listarLivrosPorEditora(req, res) {
        const editora = req.query.editora
        try {
            const livrosPorEditora = await livro.find({ editora: editora })
            res.status(200).json(livrosPorEditora)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na busca` })
        }
    }
}

export default LivroController;
