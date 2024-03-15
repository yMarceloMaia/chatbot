import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import { Server } from "socket.io";
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config"

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", "notus-7b-v1.Q4_K_M.gguf")
});
const context = new LlamaContext({ model });
let session = new LlamaChatSession({ context });

const app = express()

app.use(cors({
    cors: {
        origin: '*'
    }
}))

const server = createServer(app)

const io = new Server(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (soc) => {
    console.log('There is a new connection')
    soc.on('message', async (msg) => {
        const botReply = await session.prompt(msg)
        console.log(botReply)
        soc.emit('response', botReply)
    })
})

const PORT = +process.env.PORT || 3003

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})


function activateBIContext(query) {
    const biKeywords = ["sales", "revenue", "customers", "market"];
    for (const keyword of biKeywords) {
        if (query.toLowerCase().includes(keyword)) {
            return true;
        }
    }
    return false;
}