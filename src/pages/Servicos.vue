<script setup lang="ts">
import ListaDeServicos from "../components/ListaDeServicos.vue";
import { useApi } from "../utils/api";

const { dados: servicos, erro: erroServicos } = useApi('https://co-plex.com/api/servicos')
</script>

<template>
    <h1>Servicos</h1>

    <ListaDeServicos :servicos="servicos" :erro-servicos="erroServicos" />
</template>