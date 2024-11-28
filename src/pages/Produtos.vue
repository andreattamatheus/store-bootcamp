
<script setup lang="ts">
import ListaDeProdutos from '../components/ListaDeProdutos.vue';
import Carrinho from '../components/Carrinho.vue';
import { useApi } from '../utils/api.ts'

const { dados: produtos, erro: erroProdutos } = useApi('https://co-plex.com/api/produtos');

</script>

<template>
  <h1>Produtos</h1>

  <div style="display: flex; height: 100%;">
    <ListaDeProdutos :produtos="produtos" :erro-produtos="erroProdutos"  />
    <Carrinho  />
  </div>
</template>
