import { HttpContext, StringObject } from '../http.context';

export interface AppRouter {
  post: <
    Body = unknown,
    Param = StringObject | undefined,
    Query = StringObject | undefined,
  >(
    path: string,
    controllerMethod: (ctx: HttpContext<Body, Param, Query>) => unknown,
  ) => void;
  get: <Param = StringObject, Query = StringObject>(
    path: string,
    controllerMethod: (
      ctx: HttpContext<undefined, Param, Query>,
    ) => void | Promise<void>,
  ) => void;
}
