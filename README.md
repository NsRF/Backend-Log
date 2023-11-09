
# NodeJs com TypeScript - Teste Log

Projeto feito em NodeJs, Express e TypeScript que simula a administração de usuários e produtos.

Por meio do Sequelize foi feita a integração com banco de dados MYSQL.

Toda organização das pastas e arquivos, foram pensados com ideia de tornar a responsabilidade mais segregada, ou seja, cada classe tem sua função separadamente.


## Rodando localmente (Sem Docker)

Clone o projeto

```bash
  git clone url....
```

Entre no diretório do projeto

```bash
  cd backend-log
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```
Para execução do projeto, não se esqueça de subir um servidor MYSQL localmente ou cloud.



## Rodando localmente (Com Docker)

Clone o projeto

```bash
  git clone url....
```

Entre no diretório do projeto

```bash
  cd backend-log
```

Altere as variáveis de ambiente no .env

Execute o comando docker para subir o banco de dados mysql e o server

```bash
  docker-compose up
```

## Buildando o projeto

Execute o comando abaixo para instalação de todas dependencias necessárias para o funcionamento da API.

```bash
  npm install
```
Realize o build do projeto

```bash
  npm run build
```
## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`DB_NAME`

`DB_USER`

`DB_PASSWORD`

`DB_HOST`


