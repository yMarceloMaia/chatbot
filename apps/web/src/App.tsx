import { useState } from 'react'
import ChatMessage from './ChatMessage'

function App() {
  const [inputMessage, setInputMessage] = useState<string>('')
  const [messages, setMessages] = useState<any>([])

  const sendMessage = () => {
    setMessages([
      ...messages,
      {
        role: 'user',
        content: inputMessage,
        date: new Date()
      }
    ])

    fetch('http://localhost:3003/v1/chat/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: inputMessage
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao executar a requisição');
        }
        return response.json();
      })
      .then(data => {
        setMessages((prev: any) => [
          ...prev,
          { ...data.messages, date: new Date() }
        ])
      })
      .catch(error => {
        console.error('Erro:', error);
      });
    setInputMessage('')
  }

  return (
    <div className='flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10"'>
      <div className="flex flex-col flex-grow w-full max-w-[1200px] h-3/4 bg-white shadow-xl rounded-lg overflow-hidden">

        <div className="flex flex-col w-full flex-grow h-0 p-4 overflow-auto scroll-behavior-smooth">

          {messages.map((message: any, index: any) => (
            <ChatMessage key={index} message={message} />
          ))}

        </div>

        <div className="bg-gray-300 p-4 flex gap-2">
          <input
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage()
              }
            }}
            className="flex items-center h-10 w-full rounded px-3 text-sm" type="text" placeholder="Type your message…"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            className='bg-white text-black border border-r-2 w-20'
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default App


