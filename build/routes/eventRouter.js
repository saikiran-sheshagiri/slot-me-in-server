'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _eventController = require('../controllers/eventController');

var _eventController2 = _interopRequireDefault(_eventController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').post(function (request, response, next) {
	_eventController2.default.save(request, response);
});

router.route('/:eventId').get(function (request, response, next) {
	_eventController2.default.get(request.params.eventId, request, response);
});

exports.default = router;