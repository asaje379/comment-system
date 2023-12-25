import { userController } from './controllers/user.controller';
import { ExpressRouter } from './core/router/express.router';
import { Express } from 'express';
import { AppServer } from './core/server';

const server = new AppServer({
  router: (app: Express) => new ExpressRouter(app),
});
server.start(4000);

const router = server.getRouter();

router.get('/users', userController.index);
router.post('/users', userController.store);

//  IOC container ; Inversion of control container

// SOLID

// I = Interface Segregation
// D = Dependency Injection

// S = Single Responsibility
// O = Open/Closed  ------ Ne presque jamais utiliser else
// L = Liskov
