<!-- eslint-disable no-console -->
<!-- eslint-disable no-console -->
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
    // eslint-disable-next-line no-undef
    socket.on('test', function (data) {
      console.log(11111)
    })
  },

  sockets: {
    connect: function () {
      console.log('socket connected')
    },
    // initRoom: function (message) {
    //   // Đây là nơi nhận cái even initRoom với param là message mà server emit về
    //   this.messages.push({
    //     message,
    //     type: 'status',
    //   })
    // },
  },
  beforeDestroy() {
    // this.sockets.unsubscribe('test')
  },
}
</script>
