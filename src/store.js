import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta'

export default new Vuex.Store({
    state: {
        runners: []
    },
    mutations: {
        listRunners(state, payload){
            state.runners = payload.runners
        }
    },
    actions: {
        listRunners(store){
            fetch(`${BASE_URL}/runners`)
                .then(response => response.json())
                .then(({runners}) => {
                    store.commit("listRunners", { runners })
                })
        }
    }
})
