
# 💵 TweeDollar

<div align="center">
  <img src="https://img.shields.io/badge/Node.js-v18+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white" alt="License"/>
  <a href="https://x.com/tweedollar" target="_blank">
    <img src="https://img.shields.io/badge/Twitter-@tweedollar-1DA1F2?style=for-the-badge&logo=x&logoColor=white" alt="Twitter"/>
  </a>
</div>

<br>

<p align="center">
  <b>TweeDollar</b> é um bot desenvolvido em Node.js e TypeScript que monitora a cotação do dólar (USD/BRL) utilizando a <a href="https://docs.awesomeapi.com.br/api-de-moedas">AwesomeAPI</a> e publica automaticamente atualizações na plataforma X (antigo Twitter). 🐦
</p>

<!-- **TweeDollar** é um bot desenvolvido em Node.js e TypeScript que monitora a cotação do dólar (USD/BRL) utilizando a [AwesomeAPI](https://docs.awesomeapi.com.br/api-de-moedas) e publica automaticamente atualizações na plataforma X (antigo Twitter). 🐦 -->

<p align="center">
  <a href="#-acesso">Acesso</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-requisitos">Requisitos</a> •
  <a href="#-instalação">Instalação</a> •
  <a href="#-execução">Execução</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-contribuindo">Contribuindo</a> •
  <a href="#-licença">Licença</a> •
  <a href="#-autor">Autor</a>
</p>

---

## 🔗 Acesso

Acompanhe as atualizações da cotação do dólar em tempo real:

<div align="center">
  <a href="https://x.com/tweedollar" target="_blank">
    <img src="https://img.shields.io/badge/Seguir_@tweedollar-1DA1F2?style=for-the-badge&logo=x&logoColor=white" alt="Twitter"/>
  </a>
</div>

---

## ✨ Funcionalidades

<div align="center">
  <table>
    <tr>
      <td align="center">🔄</td>
      <td><b>Consulta Periódica</b>: Monitoramento automático da cotação do dólar via <a href="https://docs.awesomeapi.com.br/api-de-moedas">AwesomeAPI</a></td>
    </tr>
    <tr>
      <td align="center">📊</td>
      <td><b>Análise de Dados</b>: Processamento das informações de cotação em tempo real</td>
    </tr>
    <tr>
      <td align="center">📤</td>
      <td><b>Publicação Automática</b>: Posts automáticos com atualizações na plataforma X (Twitter)</td>
    </tr>
    <tr>
      <td align="center">⚙️</td>
      <td><b>Tecnologia Moderna</b>: Desenvolvido com Node.js e TypeScript para maior robustez</td>
    </tr>
    <tr>
      <td align="center">☁️</td>
      <td><b>Hospedagem Confiável</b>: Serviço hospedado via <a href="https://render.com/">Render</a> como cron job</td>
    </tr>
  </table>
</div>

---

## 📦 Requisitos

- 🟩 Node.js v18 ou superior
- 📦 Gerenciador de pacotes [pnpm](https://pnpm.io/)
- 🔑 Credenciais da API da plataforma [X (Twitter)](https://developer.x.com/en)

---

## 🚀 Instalação

### 1. Clone o repositório:

```bash
git clone https://github.com/josevitorsoares/twee-dollar.git
cd twee-dollar
```

### 2. Instale as dependências:

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`.

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais da API da plataforma X:

```
# Configurações da API
API_PORT=3333

# URL para chamadas à Awesome API
EXTERNAL_API="https://economia.awesomeapi.com.br/json/last/usd"

# Credenciais da API do Twitter (X)
TWITTER_API_KEY=sua_api_key
TWITTER_API_SECRET=seu_api_secret
TWITTER_ACCESS_TOKEN=seu_access_token
TWITTER_ACCESS_SECRET=seu_access_secret

# Localização da imagem de um dólar
IMAGE_DOLLAR_PATH="./assets/images/dollar.jpg"

# Configurações de agendamento (formato cron)
CRON_SCHEDULE="0 */5 * * * *"  # A cada 5 minutos
```

---

## ▶️ Execução

Para iniciar o bot em seu ambiente local:

```bash
pnpm start
```

O bot verificará periodicamente a cotação do dólar e postará atualizações no Twitter automaticamente, de acordo com a programação definida no arquivo `.env`. 📈

### Exemplo de post

```
🚨 ALTERAÇÃO NO DÓLAR 🚨

🚀 Dólar subindo que nem boleto no fim do mês
💵 Agora: R$ 5,87 às 15:05
📈 Subiu +0.05 (+0.86%)
📲 Segue o bot pra não perder nada!
```

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

### 🏷️ Convenções de Commit

Este projeto segue as convenções de [Conventional Commits](https://www.conventionalcommits.org/):

- ✨ `feat`: Nova funcionalidade
- 🐛 `fix`: Correção de bug
- 📚 `docs`: Alterações na documentação
- 💄 `style`: Formatação, ponto e vírgula, etc; sem alteração de código
- ♻️ `refactor`: Refatoração de código
- 🧪 `test`: Adição ou correção de testes
- 🔧 `chore`: Alterações no processo de build, ferramentas, etc.

---

## 📄 Licença

Este projeto está licenciado sob a [Licença Apache 2.0](https://github.com/josevitorsoares/twee-dollar/blob/main/LICENSE). 📝

---

## 💡 Autor

Feito com 💜 por [José Vitor G. Soares](https://github.com/josevitorsoares)
