# Exercicio 5 - Avaliacao de filmes

Projeto Node.js para calcular, a partir de um vetor de filmes:

- quantas pessoas votaram em cada filme;
- qual e a media das notas;
- qual e a classificacao do filme.

## Regras

- Media maior ou igual a 4: `Filme recomendado`
- Media entre 3 e menor que 4: `Filme razoavel`
- Media menor que 3: `Filme ruim`

## Entrada usada no exercicio

```js
[
  { nome: "Minha mae e uma peca", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Basico", avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse voce", avaliacoes: [1, 2, 3] },
]
```

## Como executar

Na pasta do projeto:

```bash
npm test
```

Para ver a saida no terminal:

```bash
npm start
```

Os testes usam o runner nativo `node:test`, sem dependencias externas.
