<template>
  <div>
    <navBar></navBar>
    <div class="container">
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <errorMessage :alertMsg="alertMsg"></errorMessage>
          <cardSelector></cardSelector>
          <card :cardListTitle="cardListTitle" :isLastCard="isLastCard" :counter="counter" :cardListSize="cards.length"></card>
        </div>
      </div>
    </div>
    <footerBar></footerBar>
</template>
<script>
  import NavBar from './components/NavBar.vue'
  import ErrorMessage from './components/ErrorMessage.vue'
  import CardSelector from './components/CardSelector.vue'
  import Card from './components/Card.vue'
  import FooterBar from './components/FooterBar.vue'
  import Axios from 'axios'
  import eventHub from './EventHub'
  import store from './components/AppStore.js'
  import Vuex from 'vuex'

  export default {
    store: store,

    data() {
      return {
        counter: 0,
        isLastCard: false,
        cards: [],
        alertMsg: '',
        cardListName: 'vocabulary-data.json'
      }
    },
    components: {
      'navBar': NavBar,
      'errorMessage': ErrorMessage,
      'cardSelector': CardSelector,
      'card': Card,
      'footerBar': FooterBar
    },

    computed: {
      cardListTitle: function() {
        return this.cardListName.replace('-data.json', '').split('-').join(' ').toUpperCase()
      }
    },

    created: function() {
      this.getCards(this.cardListName)
      eventHub.$on('getNextCard', this.getNextCard)
      eventHub.$on('getCards', this.getCards)
    },

    methods: {
      ...Vuex.mapActions([
        'createCard'
      ]),

      initState() {
        this.isLastCard = false
        this.counter = 0
        this.alertMsg = ''
      },

      getCards(selectedCardListName) {
        this.initState()
        this.cardListName = selectedCardListName
        Axios.get('./static/data/' + this.cardListName)
          .then((response) => {
            this.cards = response.data
            this.getNextCard()
          })
          .catch((err) => {
            this.alertMsg = err.message
          })
      },
      getNextCard() {
        if ((this.cards.length) > this.counter) {
          this.createCard(this.cards[this.counter])
          this.counter++
        } else {
          this.isLastCard = true
        }
      }
    }
  }

</script>
<style scoped>
  .border-line {
    box-shadow: 0 3px 2px lightgrey;
  }

</style>
