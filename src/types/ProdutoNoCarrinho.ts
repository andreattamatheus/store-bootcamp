import { ProdutoParams } from "@/types/Produto";

export interface ProdutosNoCarrinhoParams extends ProdutoParams {
  quantidade: Number;
}
