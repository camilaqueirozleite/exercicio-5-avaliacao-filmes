import { avaliarFilmes } from "./avaliarFilmes.js";

const filmes = [
  { nome: "Minha mae e uma peca", avaliacoes: [5, 4, 4, 4, 5] },
  { nome: "Saneamento Basico", avaliacoes: [3, 4, 2, 3, 4] },
  { nome: "Se eu fosse voce", avaliacoes: [1, 2, 3] },
];

console.table(avaliarFilmes(filmes));
