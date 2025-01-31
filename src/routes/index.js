import express from "express";
import livros from "./livrosRoutes.js"
import autores from './autoresRoutes.js'

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send(`<h1>Node JS dentro do Routes</h1>`))

    app.use(express.json(), livros, autores)
}

export default routes