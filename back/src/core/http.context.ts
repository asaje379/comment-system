import { Request, Response } from 'express';

export type StringObject = Record<string, string>;

export type HttpContext<
  Body = unknown,
  Param = StringObject | undefined,
  Query = StringObject | undefined,
> = {
  req: Request;
  res: Response;
  params?: Param;
  query?: Query;
  body?: Body;
};
