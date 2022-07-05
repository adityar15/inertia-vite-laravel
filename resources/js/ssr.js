import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'


createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: async (name) => {return (await import(`./Pages/${name}.vue`)).default},
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props),
    }).use(plugin)
  },
}))