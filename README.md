## ChatBot com Llama 2

#### Monorepo com TurboRepo: Backend em Node.js, Frontend em React

### Descrição:

Este projeto é um monorepo que simula um chatbot utilizando o modelo Llama 2

### Tecnologias utilizadas

- **TurboRepo:** Gerenciamento de monorepo
    - v1.12.5
- **Node.js:** Backend
    - v21.6.2
- **Vite:** Build tool para o frontend
    - v5.1.6
- **React:** Biblioteca para construção de interfaces de usuário
    - v18.2.0
- **Tailwind CSS:** Framework CSS para estilização
    - v3.4.1

### Configuração do ambiemte

1. Clone este repositório

```
git clone https://github.com/yMarceloMaia/chatbot.git
```

2. Navegue para o diretório do projeto

```
cd chatbot
```

3. Instale as dependências

```
npm install
```

4. Baixe o modelo do Llama 2

    - link: https://huggingface.co/TheBloke/notus-7B-v1-GGUF
    - depois mova o modelo baixado para pasta "models" dentro do diretório "./apps/server/models"

5. Execute o monorepo a partir da pasta raiz do projeto

```
npm run dev
```

### Documentação da API

Com o projeto rodando é preciso acessar o seguitne link: http://localhost:3003/api-docs/

### Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
