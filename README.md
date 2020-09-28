# Ruptiva Code-challenge - Top10

Projeto fullstack criado para o code-challenge da Ruptiva, ele tem como objetivo armazenar e compartilhar listas de Top10 suas de seus colegas.

Back-end criado com *Node.js + Express*, utilizando base de dados *SQLite3 e Knex* para a manipulação, as senhas foram salvas criptografadas utilizando *Bcrypt* e o token de autorização foi criado pelo *JSON-web-token*.

Front-end foi criado com *React.js + Axios* e o modal foi feito com *React-modal* - Durante o projeto foi utilizado os Hooks *useState e useContext*.

<img src="/images/1.png" alt="imagem 1" height="400"/> <img src="/images/2.png" alt="imagem 2" height="400"/> <img src="/images/3.png" alt="imagem 3" height="400"/> <img src="/images/4.png" alt="imagem 4" height="400"/> <img src="/images/5.png" alt="imagem 5" height="400"/>
 
## Instalação

Você precisará ter o [NodeJS](https://nodejs.org) instalado na sua máquina, e, após isso, clonar este repositório:
```sh
  git clone https://github.com/luizfverissimo/ruptiva-code-challenge-top10.git
```

Depois disso, instale as dependências do Front-end e do Back-end:
```sh
  cd ruptiva-code-challenge-top10/server && npm install # ou yarn install
  cd ../web && npm install # ou yarn install
```
## Executando a aplicação

Primeiro acesse a pasta do server e execute o seguinte comando:
```sh
  npm start
```

Caso queira recriar o banco de dados, delete o arquivo,
```sh
  ruptiva-code-challenge-top10/server/database/database.sqlite3
```
e rode o comando:
```sh
  npm run knex:migrate
```

Agora é só executar o front-end na past web:
```sh
  npm start
  ```