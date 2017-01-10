<template>
  <div class="notification is-danger" v-show="alertMsg.length > 0">
    <button class="delete"></button>
      Error: {{ alertMsg }}
  </div>
</template>
<script>
  export default {
    props: ['alertMsg']
  }
</script>
