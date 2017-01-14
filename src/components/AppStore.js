import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  cards: [],
  currentCard: {
    front: '',
    back: ''
  }
}

const mutations = {
  CREATE_CARD: (state, card) => {
    state.currentCard = card
  }
}

const getters = {
  currentCard: state => state.currentCard
}

const actions = {
  createCard: (state, card) =>
    store.commit('CREATE_CARD', card)
}

let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
  strict: true
})

global.store = store

export default store
