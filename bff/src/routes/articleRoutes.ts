import { Router } from 'express';

import { getArticlesController } from '../controllers/articleController';

const appRouter: Router = Router();

appRouter.get('/articles', getArticlesController);

export default appRouter;
