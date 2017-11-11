'use strict';

Object.defineProperty(exports, "__esModule", {
				value: true
});
exports.Slot = exports.slotSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('./user');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slotSchema = exports.slotSchema = new _mongoose2.default.Schema({
				participant: {
								type: _user.userSchema,
								default: null
				},
				notes: String
}, {
				timestamps: true
});

var Slot = exports.Slot = _mongoose2.default.model('Slot', slotSchema);