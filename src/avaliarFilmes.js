export function classificarMedia(media) {
  if (!Number.isFinite(media)) {
    throw new TypeError("A media deve ser um numero valido.");
  }

  if (media >= 4) {
    return "Filme recomendado";
  }

  if (media >= 3) {
    return "Filme razoavel";
  }

  return "Filme ruim";
}

export function calcularMedia(avaliacoes) {
  if (!Array.isArray(avaliacoes)) {
    throw new TypeError("As avaliacoes devem estar em um vetor.");
  }

  if (avaliacoes.length === 0) {
    return 0;
  }

  const soma = avaliacoes.reduce((total, nota, indice) => {
    if (!Number.isFinite(nota) || nota < 0 || nota > 5) {
      throw new TypeError(`A nota na posicao ${indice} e invalida.`);
    }

    return total + nota;
  }, 0);

  return soma / avaliacoes.length;
}

export function avaliarFilme(filme) {
  if (filme === null || typeof filme !== "object") {
    throw new TypeError("O filme deve ser um objeto.");
  }

  if (typeof filme.nome !== "string" || filme.nome.trim() === "") {
    throw new TypeError("O nome do filme e obrigatorio.");
  }

  const quantidadeVotos = filme.avaliacoes.length;
  const media = calcularMedia(filme.avaliacoes);

  return {
    nome: filme.nome,
    quantidadeVotos,
    media,
    avaliacao: classificarMedia(media),
  };
}

export function avaliarFilmes(filmes) {
  if (!Array.isArray(filmes)) {
    throw new TypeError("A entrada deve ser um vetor de filmes.");
  }

  return filmes.map(avaliarFilme);
}
