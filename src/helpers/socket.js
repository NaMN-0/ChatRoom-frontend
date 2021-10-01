import io from "socket.io-client";
import { apiUrls } from "../helpers/urls";

const ENDPOINT = apiUrls.backendAPI();

export const socket = io(ENDPOINT, {transports: ['websocket']});