<script setup lang="ts">
import { useCarrinhoStore } from "../stores/Carrinho.js";
import { useFormatarDinheiro } from "../utils/conversorDinheiro";

const formatarEuro = useFormatarDinheiro('EUR', 'en-US');

const carrinho = useCarrinhoStore()
</script>

<template>
    <div class="navegacao">
        <span class="logo">Loja PDM</span>

        <div>
            <router-link to="produtos">Produtos</router-link>
            <router-link to="servicos">Serviços</router-link>
        </div>

        <span>Carrinho: {{ formatarEuro(carrinho.total) }}</span>
    </div>
</template>

<style>
.navegacao {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-weight: bold;
    font-size: 1.3rem;
}
</style>