'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _event = require('../models/event');

var _user = require('../models/user');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventController = function () {
	function EventController() {
		_classCallCheck(this, EventController);
	}

	_createClass(EventController, [{
		key: 'save',


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
		value: function save(request, response) {
			var organizer = new _user.User({
				name: request.body.organizerName,
				email: request.body.organizerEmail,
				phone: request.body.organizerPhone
			});
			var event = new _event.Event({
				name: request.body.eventName,
				organizer: organizer,
				activities: []
			});
			event.save().then(function (event) {
				response.json(event);
			});

			console.log('Saving the event');
			console.log(event);
		}
	}]);

	return EventController;
}();

exports.default = new EventController();