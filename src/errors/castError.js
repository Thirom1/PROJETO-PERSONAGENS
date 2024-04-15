import BasicError from "./basicError.js";

class CastError extends BasicError {
    constructor(message = "Um ou mais dados fornecidos estão incorretos"){
        super(message, 400)
    }
}


export default CastError