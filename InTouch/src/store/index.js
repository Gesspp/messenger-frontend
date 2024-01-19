import { createStore } from "vuex";
const store = createStore({
    state(){
        return{
            APIUrl: "http://141.8.194.221:3002",
            token: false,
            user : false,
            chats: false
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
            return res.ok;
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
            const token = result.token;
            ctx.commit("SET_AUTH", token);
            await ctx.dispatch("me");
            return res.ok;
        },
        async me(ctx) {
            const token = localStorage.getItem("token") ? localStorage.getItem("token") : ctx.state.token;
            if (!token) {
                return false;
            }
            console.log("token:", token)
            const res = await fetch(`${ctx.state.APIUrl}/users/me`, {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json;charset=utf-8",
                    "Authorization" : `Bearer ${token}`
                }
            })
            const result = await res.json();
            if(res.ok){
                ctx.commit("SET_USER", result.user);
            }
            return res.ok;
        },
        async addChat(ctx, title) {
            const data = JSON.stringify({title})
            const res = await fetch(`${ctx.state.APIUrl}/chats/add`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json;charset=utf-8"
                },
                body: data
            })
            const result = await res.json();
            await ctx.dispatch("getChats");
            return res.ok;
        },
        async getChats(ctx) {
            const token = localStorage.getItem("token") ? localStorage.getItem("token") : ctx.state.token;
            if (!token) {
                return false;
            }
            const res = await fetch(`${ctx.state.APIUrl}/chats/`, {
                method: "GET",
                headers: {
                    "Content-Type" : "application/json;charset=utf-8",
                    "Authorization" : `Bearer ${token}`
                }
            })
            const result = await res.json();
            ctx.commit("SET_CHATS", result.chats)
            return res.ok;
        }
    },
    mutations: {
        SET_AUTH(state, token){
            localStorage.setItem("token", token)
            state.token = token;
        },
        SET_USER(state, user){
            console.log("Вошел пользователь с ником", user.nickname)
            state.user = user;
        },
        SET_CHATS(state, chats){
            state.chats = chats;
        }
    },
    getters: {

    }
})

export default store;