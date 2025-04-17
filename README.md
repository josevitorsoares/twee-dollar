
# 💵 TweeDollar

![License](https://img.shields.io/badge/license-APACHE--2.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18.x-blue)

**TweeDollar** é um bot desenvolvido em Node.js e TypeScript que monitora a cotação do dólar (USD/BRL) utilizando a [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) e publica automaticamente atualizações na plataforma X (antigo Twitter). 🐦

---

## 🌐 TweeDollar no X

🔗 Acesse: [x.com/tweedollar](https://x.com/tweedollar)

---

## ✨ Funcionalidades

- 🔄 Consulta periódica da cotação do dólar via AwesomeAPI
- 📤 Publicação automática de atualizações na plataforma X (Twitter)
- ⚙️ Desenvolvido com Node.js e TypeScript
- ☁️ Hospedagem via Vercel

---

## 📦 Requisitos

- 🟩 Node.js v18 ou superior
- 📦 Gerenciador de pacotes [pnpm](https://pnpm.io/)
- 🔑 Credenciais da API da plataforma X (Twitter)

---

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/josevitorsoares/twee-dollar.git
cd twee-dollar
```

2. Instale as dependências:

```bash
pnpm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`.

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais da API da plataforma X.

---

## ▶️ Execução

Para iniciar o bot:

```bash
pnpm start
```

O bot verificará periodicamente a cotação do dólar e postará atualizações no Twitter automaticamente. 📈

---

## 🗂 Estrutura do Projeto

- `src/`: Código-fonte principal
- `configs/`: Arquivos de configuração
- `assets/`: Imagens e recursos estáticos
- `server.ts`: Ponto de entrada do servidor

---

## 🤝 Contribuindo

Contribuições são super bem-vindas!  
Se quiser reportar um bug, sugerir uma melhoria ou abrir um pull request, é só seguir os passos:

1. Faça um fork do repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'feat: minha nova feature'`
4. Envie a branch: `git push origin minha-feature`
5. Abra um Pull Request aqui no GitHub

---

## 📄 Licença

Distribuído sob a licença [Apache 2.0](LICENSE). 📝

---

## 💡 Autor

Feito com 💜 por [José Vitor G. Soares](https://github.com/josevitorsoares)
