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
   *	@param  {"name":"Birthday celebrations of Mike","organizer":{"name":"John Doe","email":"joh.doe@gmail.com","phone":"1234123421"}} request 
  * 	@param {*} response
  */
		value: function save(request, response) {
			var organizer = new _user.User({
				name: request.body.organizer.name,
				email: request.body.organizer.email,
				phone: request.body.organizer.phone
			});
			var event = new _event.Event({
				name: request.body.name,
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