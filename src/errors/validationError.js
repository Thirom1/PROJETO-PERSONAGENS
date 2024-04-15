import CastError from "./castError.js";


class ValidationError extends CastError{
    constructor(erro = "Erro de validação"){
        
        super(erro, 400)
    }
}

export default ValidationError