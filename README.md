# Exercício 5 - Avaliação de filmes

Projeto Node.js para calcular, a partir de um vetor de filmes:

- quantas pessoas votaram em cada filme;
- qual e a média das notas;
- qual e a classificação do filme.

## Regras

- Média maior ou igual a 4: `Filme recomendado`
- Média entre 3 e menor que 4: `Filme razoavel`
- Média menor que 3: `Filme ruim`

## Entrada usada no exercicio

```js
[
  { nome: "Minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Básico", avaliações: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse voce", avaliações: [1, 2, 3] },
]
```

## Como executar

Na pasta do projeto:

```bash
npm test
```

Para ver a saída no terminal:

```bash
npm start
```

Os testes usam o runner nativo `node:test`, sem dependências externas.
