import { Router } from 'express';
import userRoutes from './user-routes';
/**
 * @return router general handler
 */
export default () => {
  const router = Router();
  router.use('/user', userRoutes());
  return router;
};
