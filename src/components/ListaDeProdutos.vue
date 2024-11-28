<script setup lang="ts">
import { computed, ref, defineProps } from 'vue'
import Pesquisa from './Pesquisa.vue';
import { useCarrinhoStore } from '../stores/Carrinho';
import { useFormatarDinheiro } from "../utils/conversorDinheiro";

const formartarEuro = useFormatarDinheiro('EUR', 'en-US');

const termo = ref('');

const props = defineProps({
  produtos: {
    type: Array,
    default: []
  },

  erroProdutos: {
    type: Object,
    default: null
  },
})

const { addProduto } = useCarrinhoStore();

const produtosFiltrados = computed(() => props.produtos
    .filter(({ nome }) => nome.toLowerCase().includes(termo.value.toLowerCase())))

</script>

<template>
    <div style="width: 70%">
      <div class="cabecalho">
        <h2>Produtos</h2>
  
        <Pesquisa v-model="termo" />
      </div>
  
      <div v-if="erroProdutos" class="erro">
        Erro encontrado: {{ erroProdutos.message }}
      </div>
      <ul v-else class="grade">
        <li v-for="produto in produtosFiltrados" class="produto" :key="produto.nome">
          <img :src="produto.imagem"
               :alt="produto.nome" width="100%" />
          <div class="detalhesProduto">
            {{ produto.nome }} - {{ formartarEuro(produto.preco) }}<br>
            {{ produto.avaliacao }}<br>
            <button @click="addProduto(produto)">Adicionar ao carrinho</button>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <style>
  .cabecalho {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .erro {
    color: red
  }
  
  .grade {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
  }
  
  .produto {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: clip;
    max-width: 180px;
    margin: 10px;
  }
  
  .detalhesProduto {
    padding: 10px;
  }
  </style>
  