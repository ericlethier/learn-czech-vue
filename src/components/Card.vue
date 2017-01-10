<template>
<v-touch v-on:swipeleft="getNextCards">
  <article class="notification is-primary shadow-box" style="margin-bottom:10px; padding-right:20px; padding-left:20px;">
    <p class="title" style="color: black; font-size:20px;">
      {{cardListTitle}} {{counter}} / {{cardListSize}}
    </p>
    <hr/>
    <p class="content">
      <div class=" has-text-centered">
        <h1 class="title is-1">{{ card.front }}</h1>
        <h2 class="title is-2" v-show="show" style="font-style: oblique;">{{ card.back }}</h3>
      </div>
    </p>
    <hr/>
    <div class="control is-grouped" style="margin-top:15px">
      <p class="control">
        <a class="button is-inverted is-primary is-outlined" v-on:click="showAnswer()">{{showText}} Answer</a>
      </p>
      <p class="control">
        <a class="button is-inverted is-primary" v-on:click="getNextCards()" v-show="!isLastCard">Next Card</a>
      </p>
    </div>
  </article>
  </v-touch>
</template>
<script>
  import eventHub from '../EventHub'
  export default {
    data() {
      return {
        show: false,
        showText: 'Show'
      }
    },
    props: ['cardListTitle', 'card', 'isLastCard', 'counter', 'cardListSize'],
    methods: {
      getNextCards() {
        eventHub.$emit('getNextCard')
        this.show = false
      },
      showAnswer() {
        this.show = !this.show
        this.showText = this.show ? 'Hide' : 'Show'
      }
    }
  }

</script>

<style scoped>
  .shadow-box {
    border-radius: 15px;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    box-shadow: 14px 14px 7px -7px lightgrey;
    -moz-box-shadow: 14px 14px 7px -7px lightgrey;
  }

 .border-line {
   border-bottom: 3px solid white;
 }

</style>