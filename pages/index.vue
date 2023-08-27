<template>
  <div id="app">
    <div v-for="(message, index) in messages" :key="index">
      {{ message.type }} : {{ message.message }}
    </div>
    <input v-model="text" type="text" />
    <button>Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      messages: [],
    }
  },
  mounted() {
    this.handleEmit()
  },

  methods: {
    handleEmit() {
      console.log(11111)
      socket.emit('test-connect', { value: 1 })
      socket.on('test-connect', function (data) {
        console.log(data)
      })
    },
  },
}
</script>
