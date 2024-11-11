import url from "url";
import { createServer, Server as NodeServer } from 'http'
import { IRoute } from "./types";

export class Server {

    private server:NodeServer|undefined;

    constructor(
        private router:IRoute[]
    ) { }

    async start(port:number) {
        this.server = createServer(async (req, res) => {

            try {
                const reqUrl = url.parse(req.url!, true);
                const route = this.router.find((item) => item.method === req.method && item.path === reqUrl.pathname);
                
                //console.log(reqUrl)
              
                if(!route) {
                  res.statusCode = 404;
                  return res.end();
                }

                await route.requestHandler.handle(req, res);
           
            } catch (error:any) {
                res.writeHead(500, JSON.stringify(`Internal server error: ${error.message}`))
                console.log(error);
            }

         });

         this.server.listen(port);
         console.log('server started')
    }

    async stop() {
        if (this.server) {
            this.server.close();
            console.log('server closed')
        }
    }
}