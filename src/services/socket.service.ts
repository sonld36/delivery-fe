import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

var socket = new SockJS("https://delivery-system.onrender.com/api/socket");
export const stompClient = Stomp.over(socket);
