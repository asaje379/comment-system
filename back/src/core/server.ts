import express, { Express } from 'express';
import cors from 'cors';
import { AppRouter } from './router/app.router';

type Router = (app: Express) => AppRouter | null;
type AppConfig = {
  router: (app: Express) => AppRouter | null;
};

export class AppServer {
  private _app: Express;
  private router: Router = () => null;

  constructor(config: AppConfig) {
    this._app = express();
    this._app.use(cors());
    this._app.use(express.json());
    this.router = config.router;
  }

  start(port: number) {
    this._app.listen(port);
  }

  getRouter() {
    const router = this.router(this._app);
    if (!router) throw new Error();
    return router;
  }
}
