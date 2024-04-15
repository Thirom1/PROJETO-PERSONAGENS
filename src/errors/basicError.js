

class BasicError extends Error {
    constructor(message = "Erro interno do servidor", status = 500){
        super();
        this.message = message,
        this.status = status
    }

        enviarMensagem(res){
            res.status(this.status).json({message: this.message, status: this.status})
        }
}

export default BasicError