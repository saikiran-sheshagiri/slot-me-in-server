'use strict';

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.User = exports.userSchema = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = exports.userSchema = new _mongoose2.default.Schema({
        name: String,
        email: String,
        phone: String
});

var User = exports.User = _mongoose2.default.model('User', userSchema);