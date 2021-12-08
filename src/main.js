import App from './App.vue'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";
import HelloWorld from './components/HelloWorld.vue'
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routers: [
    {
      path: '/',
      component: HelloWorld
    }
  ]
});

Sentry.init({
  Vue,
  dsn: "https://e580357ef7194376a083a1c586f2e36d@o1086016.ingest.sentry.io/6097687",
  integrations: [
    new Integrations.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "https://hello-world-dss.herokuapp.com/", /^\//],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");