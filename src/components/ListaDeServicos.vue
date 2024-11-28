<script>
import { useApi } from '../utils/api'

const { dados: servicos, erro: erroServicos } = useApi('https://co-plex.com/api/servicos');

</script>

<template>
  <div style="width: 100%">
    <h2>Serviços</h2>
    <div v-if="erroServicos" class="erro">
      Erro encontrado: {{ erroServicos.message }}
    </div>
    <ul v-else>
      <li v-for="servico in servicos" :key="servico.nome">
        {{ servico.nome }}
      </li>
    </ul>
  </div>
</template>

<style>
.erro {

}
</style>
