import express from "express"
import personagens from "./personagensRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Bem Vindo(a)"))
    app.use(express.json(), personagens)
}

export default routes