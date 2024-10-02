# Formulário de Pré-Matrícula - Escola Virtual

Este projeto é um formulário de pré-matrícula para uma escola virtual, desenvolvido com Express.js e HTML/JavaScript para a atividade "Validando Dados No Backend" da matéria de PWEB2, ministrada pelo professor Leo Fernandes, no curso Bacharelado em Sistemas de Informação do Instituto Federal de Alagoas.

## Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório ou faça o download dos arquivos.

2. Abra um terminal na pasta do projeto.

3. Instale as dependências do projeto executando o seguinte comando:

   ```
   npm install
   ```

## Executando o servidor

1. Para iniciar o servidor, execute um dos seguintes comandos:

   - Para iniciar o servidor normalmente:
     ```
     npm start
     ```

   - Para iniciar o servidor com nodemon (reinicia automaticamente quando há alterações nos arquivos):
     ```
     npm run dev
     ```

2. O servidor será iniciado e estará escutando na porta 3000 por padrão.

## Visualizando a página HTML

1. Com o servidor em execução, abra seu navegador web.

2. Acesse a seguinte URL:

   ```
   http://localhost:3000
   ```

3. Você deverá ver o formulário de pré-matrícula da Escola Virtual.

## Enviando o formulário

1. Preencha todos os campos obrigatórios do formulário.

2. Clique no botão "Enviar Formulário".

3. Se houver erros de validação, eles serão exibidos em um alerta.

4. Se o envio for bem-sucedido, você verá uma mensagem de confirmação.

## Desenvolvimento

- O arquivo HTML principal está localizado em `public/index.html`.
- O JavaScript do cliente está em `public/javascripts/index.js`.
- O CSS está em `public/stylesheets/index.css`.
- As rotas do servidor estão definidas em `routes/index.js`.
- As validações do servidor estão em `routes/validations.js`.

Para fazer alterações, edite esses arquivos conforme necessário e reinicie o servidor (a menos que esteja usando nodemon).

## Observações

- Certifique-se de que a porta 3000 não está sendo usada por outro processo.
- Se precisar mudar a porta, você pode modificar o arquivo `bin/www`.
