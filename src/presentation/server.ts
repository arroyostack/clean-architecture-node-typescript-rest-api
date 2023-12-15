import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  public_path?: string;
  routes: Router;
}

export class Server {

  private app = express();
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor( options: Options ) {
    const { routes, port, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  public async start() {
    //* Middlewares
    /* Any request that passes through the server. If a body is coming, it will serialize it as json format  */
    this.app.use( express.json() );

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );
    // Routes
    this.app.use( this.routes );

    this.app.get( '*', );


    this.app.listen( this.port, () => {
      console.log( `Server running on port ${this.port}` );
    } );

  }

}