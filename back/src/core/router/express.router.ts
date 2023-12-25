import { HttpContext, StringObject } from './../http.context';
import { AppRouter } from './app.router';
import { Request, Response, Express } from 'express';

export class ExpressRouter implements AppRouter {
  private _app: Express;

  constructor(app: Express) {
    this._app = app;
  }

  post<
    Body = unknown,
    Param = StringObject | undefined,
    Query = StringObject | undefined,
  >(
    path: string,
    controllerMethod: (ctx: HttpContext<Body, Param, Query>) => unknown,
  ) {
    this._app.post(path, async (req: Request, res: Response) => {
      try {
        const params = req.params as Param;
        const query = req.query as Query;
        const body = req.body as Body;
        const ctx = { req, res, params, query, body };
        const result = await controllerMethod(ctx);
        res.status(201).json(result);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    });
  }

  get<Param = StringObject, Query = StringObject>(
    path: string,
    controllerMethod: (
      ctx: HttpContext<undefined, Param, Query>,
    ) => void | Promise<void>,
  ) {
    this._app.get(path, async (req: Request, res: Response) => {
      try {
        const params = req.params as Param;
        const query = req.query as Query;
        const ctx = { req, res, params, query };
        await controllerMethod(ctx);
      } catch (error: any) {
        res.status(500).json({ message: error.message });
      }
    });
  }
}
