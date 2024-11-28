export interface ProdutoParams {
  id: string;
  nome: string;
  preco: Number;
  cor: Cor;
  imagem: string;
  avaliacao: Number;
}

type Cor = "Vermelho" | "Azul" | "Verde" | "Amarelo" | "Preto" | "Branco";
