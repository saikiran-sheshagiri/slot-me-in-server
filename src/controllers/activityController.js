import { Activity } from '../models/activity';
import { Slot } from '../models/slot';
import { User } from '../models/user';
import { Event } from '../models/event';

class ActivityController {

	/**
	 * 
	 * @param request {
	 * 			"activityName": "",
	 * 			"activityDateTime": "",
	 * 			"activityDuration": "",
	 * 			"numberOfSlots": 3
	 * 		}  
	 * @param {*} response 
	 */
	save(request, response) {
		Event.findById(request.params.eventId, 
				(error, event) => { 
					if (error) response.send('Unable to find event with id: ' + request.params.eventId + '. ' + error);
					else {
						console.log(event);
						let activity = new Activity({
							name: request.body.activityName,
							activityDate: request.body.activityDateTime,
							duration: request.body.activityDuration,
							numberOfSlots: request.body.numberOfSlots,
							slots: []
						});
				
						for(let index = 0; index < request.body.numberOfSlots; index++) {
							let slot = new Slot({
								participant: null,
								notes: ''
							});
				
							activity.slots.push(slot);
						}

						event.activities.push(activity);

						event.save((error, event) => {
							if (error) response.send('unable to save activity');
                            else response.json(event);
						});
					}
				});
	}
}

export default new ActivityController();