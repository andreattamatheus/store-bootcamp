<script setup>
import { useCarrinhoStore } from '../stores/Carrinho';
import { useFormatarDinheiro } from '../utils/conversorDinheiro';

const formatarEuro = useFormatarDinheiro('EUR', 'en-US');

const carrinho = useCarrinhoStore();

</script>

<template>
  <div style="width: 30%">
    <h2>Carrinho ({{ formatarEuro(carrinho.total) }})</h2>
    <ul v-if="carrinho.produtosNoCarrinho.length > 0" class="grade-carrinho">
      <li v-for="produto in carrinho.produtosNoCarrinho" class="produto-carrinho" :key="produto.nome">
        <img :src="produto.imagem"
             :alt="produto.nome" width="100"/>
        <div>
          {{ produto.nome }}<br>
          Quantidade: {{ produto.quantidade }}
          <button @click="carrinho.removerProduto(produto)">Remover do carrinho</button>
        </div>
      </li>
    </ul>
    <h5 v-else>Carrinho vazio</h5>
  </div>
</template>

<style>
.grade-carrinho {
  list-style: none;
  margin: 0;
  padding: 0;
}

.produto-carrinho {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
</style>
