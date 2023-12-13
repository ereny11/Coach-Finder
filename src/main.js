// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import TheButton from './components/ui/TheButton.vue'
import Badge from './components/ui/Badge.vue'
 
import store from './store/index.js'

const app = createApp(App)

app.use(router)
app.use(store)

app.component('TheButton', TheButton)
app.component('Badge', Badge)

app.mount('#app')
