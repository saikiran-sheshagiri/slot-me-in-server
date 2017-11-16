'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _activity = require('../models/activity');

var _slot = require('../models/slot');

var _user = require('../models/user');

var _event = require('../models/event');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActivityController = function () {
	function ActivityController() {
		_classCallCheck(this, ActivityController);
	}

	_createClass(ActivityController, [{
		key: 'save',


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
		value: function save(request, response) {
			_event.Event.findById(request.params.eventId, function (error, event) {
				if (error) response.send('Unable to find event with id: ' + request.params.eventId + '. ' + error);else {
					console.log(event);
					var activity = new _activity.Activity({
						name: request.body.name,
						activityDate: request.body.activityDate,
						duration: request.body.duration,
						numberOfSlots: request.body.numberOfSlots,
						slots: []
					});

					for (var index = 0; index < request.body.numberOfSlots; index++) {
						var slot = new _slot.Slot({
							participant: null,
							notes: ''
						});

						activity.slots.push(slot);
					}

					event.activities.push(activity);

					event.save(function (error, event) {
						if (error) response.send('unable to save activity');else response.json(event);
					});
				}
			});
		}
	}]);

	return ActivityController;
}();

exports.default = new ActivityController();