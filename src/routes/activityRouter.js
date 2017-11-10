import express from 'express';
import activityController from '../controllers/activityController';

let router = express.Router({mergeParams: true});

router.route('/')
		.post((request, response, next) => {
			activityController.save(request, response);
		});

export default router;