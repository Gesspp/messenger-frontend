import { createApp } from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import {uniAngleDoubleUp, uniCommentPlus, uniUserPlus, uniNotes} from 'vue-unicons/dist/icons'
import router from "./router"
import store from "./store"
import "./index.css"

Unicon.add([uniAngleDoubleUp, uniCommentPlus, uniUserPlus, uniNotes])

createApp(App).use(router).use(store).use(Unicon).mount('#app')

