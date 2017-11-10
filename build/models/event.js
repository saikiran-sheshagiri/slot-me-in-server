'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Event = exports.eventSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _activity = require('./activity');

var _user = require('./user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var eventSchema = exports.eventSchema = new _mongoose2.default.Schema({
	name: String,
	organizer: _user.userSchema,
	activities: [_activity.activitySchema]
}, {
	timestamps: true
});

var Event = exports.Event = _mongoose2.default.model('Event', eventSchema);