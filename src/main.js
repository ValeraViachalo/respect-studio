import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.scss';
import './assets/styles/reset.scss';
import Lenis from '@studio-freight/lenis';

const lenis = new Lenis({
  duration: 1.5,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

const app = createApp(App)

app.mount('#app')