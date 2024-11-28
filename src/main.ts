import { createApp } from "vue";
import { createRouter, createMemoryHistory } from "vue-router";
import { createPinia } from "pinia";
import "./styles/style.css";
import App from "./App.vue";
import routes from "./router/routes";

const app = createApp(App);

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

app.use(router);
app.use(createPinia());

app.mount("#app");
