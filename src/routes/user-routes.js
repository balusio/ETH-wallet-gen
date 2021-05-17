import { Router } from 'express';
import { registerUser, loginUser } from '@controllers/userController';

export default () => {
  const router = Router();
  router.post('/register', registerUser);
  router.post('/login', loginUser);
  router.use((err, req, res, next) => {
    res.status(500).send('Something broke!');
    next();
  });

  return router;
};
