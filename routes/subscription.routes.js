import { Router } from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ message: 'Get all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ message: `Get subscription with id ${req.params.id}` }));
subscriptionRouter.post('/', (req, res) => res.send({ message: 'Create new subscription' }));
subscriptionRouter.put('/:id', (req, res) => res.send({ message: `Update subscription with id ${req.params.id}` }));
subscriptionRouter.delete('/:id', (req, res) => res.send({ message: `Delete subscription with id ${req.params.id}` }));
subscriptionRouter.get('/user/:id', (req, res) => res.send({ message: `Get all user subscription`}));
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ message: `Cancel subscription with id ${req.params.id}` }));
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ message: `Get all upcoming renewals`}));

export default subscriptionRouter;