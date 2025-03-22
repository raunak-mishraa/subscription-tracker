import express from 'express';
import { PORT } from './config/env.js';
const app = express();

import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);
app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
});

export default app;