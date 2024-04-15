import mongoose, { mongo } from "mongoose";
import ValidationError from "../errors/validationError.js";
import CastError from "../errors/castError.js";
import BasicError from "../errors/basicError.js";



function trataError(erro, req, res, next) {
 console.log(erro)
    if (erro instanceof mongoose.Error.ValidationError) {
        new ValidationError().enviarMensagem(res)
    } else if( erro instanceof mongoose.Error.CastError) {
        new CastError().enviarMensagem(res)
    } else {
        new BasicError.enviarMensagem(res)
    }
   

}


export default trataError