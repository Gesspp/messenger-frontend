import { createStore } from "vuex";
const store = createStore({
    state(){
        return{
            APIUrl: "http://185.251.89.127:3002",
            token: false
        }
    },
    actions: {
        async signup(ctx, user) {
            const data = JSON.stringify(user);
            const res = await fetch(`${ctx.state.APIUrl}/signup`, {
                method: "POST",
                headers : {
                    "Content-Type" : "application/json;charset=utf-8"
                  },
                body: data
            })
            const result = await res.json();
            console.log(result);
        },
        async signin(ctx, user) {
            const data = JSON.stringify(user);
            const res = await fetch(`${ctx.state.APIUrl}/signin`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json;charset=utf-8"
                },
                body: data
            })
            const result = await res.json();
            console.log(result);
        }
    },
    mutations: {

    },
    getters: {

    }
})

export default store;