import { Server } from "./lib/server"; 
import { router } from "./router";

const server = new Server(router);
//const port = +process.env.!PORT;
server.start(3000);