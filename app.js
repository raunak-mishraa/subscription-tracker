import express from 'express';
import { PORT } from './config/env.js';
import cookieParser from 'cookie-parser';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

import subscriptionRouter from './routes/subscription.routes.js';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import connectToDatabase from './database/mongodb.js';
import errorMiddleware from './middlewares/error.middleware.js';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';

app.use(arcjetMiddleware) // Apply Arcjet middleware before the routes
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware) // Apply Arcjet middleware before the routes

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);
    await connectToDatabase();
});

export default app;