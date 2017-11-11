'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = require('../models/event');

var _user = require('../models/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SlotController = function () {
	function SlotController() {
		_classCallCheck(this, SlotController);
	}

	_createClass(SlotController, [{
		key: 'update',


		/**
   * 
   * @param {
   * 	"participantName": "",
   * 	"participantEmail": "",
   *  "participantPhone": "",
   * 	"participantNotes": ""
   * } request 
   * @param {*} response 
   */
		value: function update(request, response) {

			_event.Event.findById(request.params.eventId, function (error, event) {
				if (error) response.send('Unable to find event with id: ' + request.params.eventId + '. ' + error);else {
					var activity = event.activities.find(function (activity) {
						return activity._id.equals(request.params.activityId);
					});

					if (typeof activity === 'undefined') response.send('Unable to find the acitity with id: ' + request.params.activityId);else {
						var slot = activity.slots.find(function (slot) {
							return slot._id.equals(request.params.slotId);
						});

						if (typeof slot === 'undefined') response.send('Unable to find the slot with slot id: ' + request.params.slotId);else {
							var oParticipant = new _user.User({
								name: request.body.participantName,
								email: request.body.participantEmail,
								phone: request.body.participantPhone
							});

							slot.participant = oParticipant;
							slot.notes = request.body.participantNotes;

							event.save(function (error, event) {
								if (error) {
									console.log('Unable to save the event with slot update');
									console.log(error);
								} else {
									response.json(event);
								}
							});
						}
					}
				}
			});
		}
	}]);

	return SlotController;
}();

exports.default = new SlotController();