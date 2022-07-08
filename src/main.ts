import { createApp } from 'vue'
import App from './App.vue'

const { worker } = await import('./mocks/browser')

worker.start()

createApp(App).mount('#app')
