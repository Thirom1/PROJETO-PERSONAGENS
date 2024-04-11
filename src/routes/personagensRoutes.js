import express from "express"
import PersonagemController from "../controllers/personagemController.js"

const rotas = express.Router()

rotas.get("/personagens", PersonagemController.procuraPersonagens)
rotas.get("/personagens/:id", PersonagemController.procuraPersonagensPorId)
rotas.post("/personagens", PersonagemController.cadastraPersonagem)
rotas.put("/personagens/:id" , PersonagemController.modificaPersonagem)
rotas.delete("/personagens/:id", PersonagemController.deletaPersonagem)

export default rotas
