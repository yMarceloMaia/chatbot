import { session } from "./index.js"

export function getHealthServer(req, res) {
    try {
        res.status(200).send("server ok")
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

export async function promptChat(req, res) {
    console.log(req.body)
    try {
        if (!req.body || !req.body.message) throw new Error("body is missing")
        const { message } = req.body

        const newMessage = {
            role: "user",
            content: message,
            date: new Date()
        }

        const response = await session.prompt(JSON.stringify(newMessage))

        const newMessageBot = {
            role: "system",
            content: response,
            date: new Date()
        }

        const result = {
            model: "Llama 2",
            messages: newMessageBot
        }

        res.status(200).send(result)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}
