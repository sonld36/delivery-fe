import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
// http://localhost:8080
var socket = new SockJS(
  "https://delivery-service-7elcupesca-uc.a.run.app/api/socket"
);
// var socket = new SockJS("http://localhost:8080/api/socket");
export const stompClient = Stomp.over(socket);
