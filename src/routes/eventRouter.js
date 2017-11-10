import express from 'express';
import eventController from '../controllers/eventController';

let router = express.Router();

router.route('/')
		.post((request, response, next) => {
			eventController.save(request, response);
		});

export default router;