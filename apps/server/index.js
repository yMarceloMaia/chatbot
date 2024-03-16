import express from 'express'
import cors from 'cors'
import { LlamaModel, LlamaContext, LlamaChatSession } from "node-llama-cpp";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config"
import { getHealthServer, promptChat } from './endpoints.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json' assert { type: "json" }
const PORT = +process.env.PORT || 3003

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const model = new LlamaModel({
    modelPath: path.join(__dirname, "models", process.env.PATH_MODEL)
});
const context = new LlamaContext({ model });
export const session = new LlamaChatSession({ context });

const app = express()

app.use(cors({
    cors: {
        origin: '*'
    }
}))

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', getHealthServer)

app.post('/v1/chat/completion', promptChat)

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
