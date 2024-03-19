import { createApp } from 'vue'
import App from './App.vue'
import Unicon from 'vue-unicons'
import {uniAngleDoubleUp, uniCommentPlus, uniUserPlus, uniNotes, uniTimes} from 'vue-unicons/dist/icons'
import router from "./router"
import store from "./store"
import "./index.css"

Unicon.add([uniAngleDoubleUp, uniCommentPlus, uniUserPlus, uniNotes, uniTimes])

const app = createApp(App);
app.use(router).use(store).use(Unicon);

app.mount('#app');