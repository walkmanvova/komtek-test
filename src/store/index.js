import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import consultations from './modules/consultations'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        users,
        consultations
    }
})
