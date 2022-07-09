import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import Layout from './components/Layout.vue'

createInertiaApp({
  resolve: async (name) => {
    const page = (await import(`./Pages/${name}.vue`)).default
    page.layout = page.layout || Layout
    return page
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})