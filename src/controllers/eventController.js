import {Event} from '../models/event';
import {User} from '../models/user';

class EventController {

	/**
	 * Save a new Event
	 *	@param  {
					"eventName": "",
					"organizerName": "",
					"organizerEmail": "",
					"organizerPhone": ""
				} request 
	* 	@param {*} response
	*/
	save(request, response) {
		let organizer = new User({
			name: request.body.organizerName,
			email: request.body.organizerEmail,
			phone: request.body.organizerPhone
		});
		let event = new Event({
			name: request.body.eventName,
			organizer: organizer,
			activities: []
		});
		event.save()
			.then((event) => {
				response.json(event);
			});

		console.log('Saving the event');
		console.log(event);
	}
}

export default new EventController();