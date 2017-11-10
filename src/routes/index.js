import express from 'express';
import eventRouter from './eventRouter';
import activityRouter from './activityRouter';

const router = express.Router();

router.get('/heartbeat', (request, response) => {
    response.send('API is running');
    console.log('API is running!');
});

router.use('/events', eventRouter);
eventRouter.use('/:eventId/activities', activityRouter);

export default router;