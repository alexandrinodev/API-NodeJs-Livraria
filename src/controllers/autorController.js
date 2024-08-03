import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores (req, res) {
        try {
            const listaAutor = await autor.find({})
        res.status(200).json(listaAutor)
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição`})
        }
        
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({message: "criado com sucesso", autor: novoAutor})
        } catch(erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Autor`})
        }
    }

    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id
            const autorEcontrado = await autor.findById(id)
        res.status(200).json(autorEcontrado)
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisição do autor`})
        }
        
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body)
        res.status(200).json({message: "autor atualizado"})
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na atualização do autor`})
        }
        
    }

    static async RemoverAutor (req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndRemove(id)
        res.status(200).json({message: "Autor removido com sucesso"})
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na removação do Autor`})
        }
        
    }
}

export default AutorController;
