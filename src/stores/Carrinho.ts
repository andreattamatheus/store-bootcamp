import { defineStore } from "pinia";
import { ProdutoParams } from "@/types/Produto";
import { ProdutosNoCarrinhoParams } from "@/types/ProdutoNoCarrinho";

export const useCarrinhoStore = defineStore("carrinho", {
  state: () => ({
    produtosNoCarrinho: [],
  }),

  actions: {
    encontrar({ id }: ProdutoParams): ProdutosNoCarrinhoParams {
      return this.produtosNoCarrinho.find(
        (produtoNaLista: ProdutoParams) => produtoNaLista.id === id
      );
    },

    addProduto(produtoAAdicionar: ProdutoParams): void {
      const produtoEncontrado = this.encontrar(produtoAAdicionar);

      if (produtoEncontrado) {
        produtoEncontrado.quantidade++;
      } else {
        this.produtosNoCarrinho.push({
          ...produtoAAdicionar,
          quantidade: 1,
        });
      }
    },

    removerProduto(produtoARemover: ProdutoParams): void {
      const produtoEncontrado = this.encontrar(produtoARemover);
      if (!produtoEncontrado) {
        return;
      }
      if (--produtoEncontrado.quantidade === 0) {
        const indice = this.produtosNoCarrinho.findIndex(
          (produtoNoCarrinho) => produtoNoCarrinho.id === produtoARemover.id
        );
        this.produtosNoCarrinho.splice(indice, 1);
      }
    },
  },

  getters: {
    total: ({ produtosNoCarrinho }): Number =>
      produtosNoCarrinho.reduce(
        (carga, produto) => carga + produto.preco * produto.quantidade,
        0
      ),
  },
});
