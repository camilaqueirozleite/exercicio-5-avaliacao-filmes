import assert from "node:assert/strict";
import test from "node:test";
import {
  avaliarFilme,
  avaliarFilmes,
  calcularMedia,
  classificarMedia,
} from "../src/avaliarFilmes.js";

test("calcula quantidade de votos, media e classificacao dos filmes da entrada", () => {
  const filmes = [
    { nome: "Minha mae e uma peca", avaliacoes: [5, 4, 4, 4, 5] },
    { nome: "Saneamento Basico", avaliacoes: [3, 4, 2, 3, 4] },
    { nome: "Se eu fosse voce", avaliacoes: [1, 2, 3] },
  ];

  assert.deepEqual(avaliarFilmes(filmes), [
    {
      nome: "Minha mae e uma peca",
      quantidadeVotos: 5,
      media: 4.4,
      avaliacao: "Filme recomendado",
    },
    {
      nome: "Saneamento Basico",
      quantidadeVotos: 5,
      media: 3.2,
      avaliacao: "Filme razoavel",
    },
    {
      nome: "Se eu fosse voce",
      quantidadeVotos: 3,
      media: 2,
      avaliacao: "Filme ruim",
    },
  ]);
});

test("classifica como recomendado quando a media e maior ou igual a 4", () => {
  assert.equal(classificarMedia(4), "Filme recomendado");
  assert.equal(classificarMedia(4.8), "Filme recomendado");
});

test("classifica como razoavel quando a media fica entre 3 e menor que 4", () => {
  assert.equal(classificarMedia(3), "Filme razoavel");
  assert.equal(classificarMedia(3.9), "Filme razoavel");
});

test("classifica como ruim quando a media e menor que 3", () => {
  assert.equal(classificarMedia(2.99), "Filme ruim");
});

test("calcula media zero quando o filme ainda nao recebeu votos", () => {
  assert.deepEqual(avaliarFilme({ nome: "Filme sem votos", avaliacoes: [] }), {
    nome: "Filme sem votos",
    quantidadeVotos: 0,
    media: 0,
    avaliacao: "Filme ruim",
  });
});

test("rejeita notas invalidas", () => {
  assert.throws(() => calcularMedia([5, 6, 4]), /nota.*invalida/);
});
