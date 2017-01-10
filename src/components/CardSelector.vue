<template>
  <p class="control" style="padding-top: 10px;">
    <span class="select is-medium is-fullwidth">
      <select v-on:change="changeItem($event)">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
    </span>
  </p>
</template>
<script>
  import eventHub from '../EventHub'
  export default {
    data() {
      return {
        options: [{
          value: 'vocabulary-data.json',
          text: 'Vocabulary'
        },
        {
          value: 'verbs-data.json',
          text: 'Verbs'
        },
        {
          value: 'perf-imperf-data.json',
          text: 'Perfective/Imperfective'
        }]
      }
    },
    methods: {
      changeItem(event) {
        eventHub.$emit('getCards', event.target.value)
      }
    }
  }
</script>
