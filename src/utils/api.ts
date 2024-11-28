import axios from "axios";
import { ref } from "vue";

export const useApi = (url: string) => {
  const dados = ref([]);
  const erro = ref(null);

  axios
    .get(url)
    .then(({ data }) => {
      dados.value = data;
    })
    .catch((error) => (erro.value = error));

  return { dados, erro };
};
