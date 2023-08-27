/* eslint-disable no-console */
// eslint-disable-next-line import/no-named-as-default
import io from "socket.io-client";
const socket = io("http://127.0.0.1:8000");
window.socket = socket;
// import Vue from "vue";
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'

// /* Establish Connection */
// const socketConnection = SocketIO('http://10.100.6.139:4113');


// Vue.use(new VueSocketIO({
//     debug: false,
//     connection:socketConnection,
//     options: {path: "/realtime/", transports: ["websocket"]} 
//   })
// );
