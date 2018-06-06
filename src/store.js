import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const BASE_URL = 'https://hl100-runnertracking.herokuapp.com/api/beta/runners'

export default new Vuex.Store({
    state: {
        runners: []
    },
    mutations: {
        listRunners(state, payload){
            state.runners = payload;
        }
    },
    actions: {
        listRunners(store){
            const runners = [{
                "id": 0,
                "bibNumber": "1",
                "name": "Caleb Efta",
                "shirtSize": "Men/s Large",
                "locationStaying": "Camping at start/finish",
                "shoeBath": "Yes, at runner checkin",
                "medicalCondition": "Type I Diabetes",
                "medication": "Sthyroid",
                "Started": false,
                "RasberryOneIn": "21:57:00",
                "RasberryOneOut": "22:45:00",
                "AnteroIn": "18:42:00",
                "AnteroOut": "18:59:00",
                "StElmoOneIn": "09:30:00",
                "StElmoOneOut": "09:47:00",
                "CottonwoodIn": "00:00:00",
                "CottonwoodOut": "00:00:00",
                "StElmoTwoOut": "00:00:00",
                "StElmoTwoIn": "00:00:00",
                "HancockIn": "00:00:00",
                "HancockOut": "00:00:00",
                "LostWonderIn": "00:00:00",
                "LostWonderOut": "00:00:00",
                "PurgatoryIn": "00:00:00",
                "PurgatoryOut": "00:00:00",
                "MonarchIn": "00:00:00",
                "MonarchOut": "00:00:00",
                "FoosesIn": "00:00:00",
                "FoosesOut": "00:00:00",
                "BlanksIn": "00:00:00",
                "BlanksOut": "00:00:00",
                "RasberryTwoIn": "00:00:00",
                "RasberryTwoOut": "00:00:00",
                "HancockPacerIn": false,
                "HancockPacerOut": false,
                "LostWonderPacerIn": false,
                "LostWonderPacerOut": false,
                "PurgatoryPacerIn": false,
                "PurgatoryPacerOut": false,
                "MonarchPacerIn": false,
                "MonarchPacerOut": false,
                "FoosesPacerIn": false,
                "FoosesPacerOut": false,
                "BlanksPacerIn": false,
                "BlanksPacerOut": false,
                "RasberryTwoPacerIn": false,
                "RasberryTwoPacerOut": false,
                "Finish": "00:00:00"
                }];
            fetch(`${BASE_URL}`)
                .then(response => response.json())
                .then((runners) => {
                    store.commit("listRunners", runners);
                });
        }
    }
})