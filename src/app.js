import express from "express"
import conectaDataBase from "./config/conections.js"
import routes from "./routes/index.js"
import trataError from "./middlewears/trataError.js"


const conecta = await conectaDataBase()
const app = express()

conecta.on("error", (erro) => {
    console.error("Algo Deu Errado Com A Base De Dados")
})

conecta.once("open", () => {
    console.log("Conexão com a base de dados feita com sucesso")
})
 

routes(app)
app.use(trataError)

export default app