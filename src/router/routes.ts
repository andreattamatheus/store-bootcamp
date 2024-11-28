import Inicial from "../pages/Inicial.vue";
import Produtos from "../pages/Produtos.vue";
import Servicos from "../pages/Servicos.vue";

export default [
  { path: "/", component: Inicial },
  { path: "/produtos", component: Produtos },
  { path: "/servicos", component: Servicos },
];
