import personagem from "../model/personagens.js";

class PersonagemController {

    static async procuraPersonagens(req, res){
        const listaPersonagens = await personagem.find({})
        res.status(200).json(listaPersonagens)
    }

    static async cadastraPersonagem(req, res) {
        const novoPersonagem = req.body
       const personagemCriado = await personagem.create(novoPersonagem)
       res.status(201).json({message: "Personagem criado com sucesso", personagem: personagemCriado })
    }

    static async procuraPersonagensPorId(req, res) {
        const id = req.params.id
        const personagemEncontrado = await personagem.findById(id)
        res.status(200).json(personagemEncontrado)
    }

    static async modificaPersonagem(req, res) {
        const id = req.params.id
        await personagem.findByIdAndUpdate(id, req.body) 
        res.status(200).json({message:"Atualização feita com sucesso"})
    }

    static async deletaPersonagem(req, res){
        const id = req.params.id
        await personagem.findByIdAndDelete(id)
        res.status(200).json({message: "Personagem Excluído"})
    }

}


export default PersonagemController