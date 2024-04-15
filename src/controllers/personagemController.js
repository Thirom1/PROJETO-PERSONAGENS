import personagem from "../model/personagens.js";

class PersonagemController {

    static async procuraPersonagens(req, res, next){
        try{
            const listaPersonagens = await personagem.find({})
            res.status(200).json(listaPersonagens)
        } catch(erro) {
            next(erro)
        }
        }

    static async cadastraPersonagem(req, res, next) {
       try{ 
        const novoPersonagem = req.body
       const personagemCriado = await personagem.create(novoPersonagem)
       res.status(201).json({message: "Personagem criado com sucesso", personagem: personagemCriado })
    } catch(erro){
        next(erro)
    }
    }

    static async procuraPersonagensPorId(req, res, next) {
        try{
            const id = req.params.id
            const personagemEncontrado = await personagem.findById(id)
            res.status(200).json(personagemEncontrado)
        } catch(erro) {
            next(erro)
        }
    }

    static async modificaPersonagem(req, res, next) {
        try {
            const id = req.params.id
            await personagem.findByIdAndUpdate(id, req.body) 
            res.status(200).json({message:"Atualização feita com sucesso"})
        } catch(erro) {
            next(erro)
        }
        
        
    }

    static async deletaPersonagem(req, res, next){
        try{
            const id = req.params.id
            await personagem.findByIdAndDelete(id)
            res.status(200).json({message: "Personagem Excluído"})
        } catch(erro){
        next(erro)
        }
    }

}


export default PersonagemController