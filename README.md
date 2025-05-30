# Test Cubo Front End

Este projeto é a interface web (front-end) do desafio Test Cubo, desenvolvido com React, TypeScript e Vite.

> **Atenção:** Para funcionamento completo, este front-end consome uma API backend desenvolvida em Node.js.  
> O repositório da API está disponível em: [Test Cubo Node API](https://github.com/archiquito/test-cubo-node-ap)

## Como rodar o projeto

### Pré-requisitos

- Node.js (versão 18 ou superior recomendada)
- npm ou yarn

### Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/SEU_USUARIO/test-cubo-front-end.git
   cd test-cubo-front-end
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```
   ou
   ```sh
   yarn
   ```

### Rodando em modo desenvolvimento

```sh
npm run dev
```
ou
```sh
yarn dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000).

### Build para produção

```sh
npm run build
```
ou
```sh
yarn build
```

Os arquivos otimizados ficarão na pasta `dist/`.

### Pré-visualizar o build de produção

```sh
npm run preview
```
ou
```sh
yarn preview
```

---

Certifique-se de que a [API Node.js](https://github.com/archiquito/test-cubo-node-ap) esteja rodando para o funcionamento completo do front-end.