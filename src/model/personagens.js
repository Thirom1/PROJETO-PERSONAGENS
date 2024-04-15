import mongoose, { mongo } from "mongoose";

const personagemSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    realName: {type: String, required: [true, "O nome Real é obrigatório"]},
    nickname: {type: String},
    description: {type: String}

}, {versionKey: false} )


const personagem = mongoose.model("dc", personagemSchema)

export default personagem

