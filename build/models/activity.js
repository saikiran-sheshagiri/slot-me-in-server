'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Activity = exports.activitySchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('./user');

var _slot = require('./slot');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activitySchema = exports.activitySchema = new _mongoose2.default.Schema({
	name: String,
	activityDate: Date,
	duration: Number,
	numberOfSlots: Number,
	slots: [_slot.slotSchema]
}, {
	timestamps: true
});

var Activity = exports.Activity = _mongoose2.default.model('Activity', activitySchema);