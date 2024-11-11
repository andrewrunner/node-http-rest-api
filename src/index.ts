import { Server } from "./lib/server"; 
import { router } from "./router";

const server = new Server(router);
const port = +process.env.PORT! as number;
server.start(port);