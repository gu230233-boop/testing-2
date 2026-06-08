# testing

Aplicação simples em JavaScript com funções básicas.

## Funcionalidades

- **Saudação**: Função que cumprimenta um usuário pelo nome
- **Soma**: Realiza a adição de dois números
- **Multiplicação**: Realiza a multiplicação de dois números

## Como usar

### Instalação
```bash
npm install
```

### Executar
```bash
npm start
```

### Testar
```bash
npm test
```

## Exemplo de uso

```javascript
const { saudacao, soma, multiplicacao } = require('./index.js');

console.log(saudacao("João"));        // Olá, João! Bem-vindo à aplicação.
console.log(soma(10, 5));              // 15
console.log(multiplicacao(3, 4));      // 12
```

## Licença

MIT
