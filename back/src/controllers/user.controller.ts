import { User } from '../dtos/users';
import { HttpContext } from './../core/http.context';

export const userController = {
  store(ctx: HttpContext<User>) {
    const { body: user } = ctx;

    // if (!user) throw new Error();

    console.log(user);

    // throw new Error();
    return user;
  },

  index(ctx: HttpContext) {
    const { res } = ctx;
    res.status(200).json([]);
  },

  delete(ctx: HttpContext) {},
};
