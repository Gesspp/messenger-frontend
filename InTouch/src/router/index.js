import { createRouter, createWebHistory } from "vue-router";
import Signin from "../views/Signin.vue";
import Signup from "../views/Signup.vue";
import Header from "../components/Header.vue"

const routes = [
    {
        path : "/signin",
        component : Signin,
        name : "Signin"
    },
    {
        path : "/signup",
        component : Signup,
        name : "Signup"
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
});
export default router;