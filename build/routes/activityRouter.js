'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _activityController = require('../controllers/activityController');

var _activityController2 = _interopRequireDefault(_activityController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ mergeParams: true });

router.route('/').get(function (request, response, next) {
	_activityController2.default.getAll(request, response);
}).post(function (request, response, next) {
	_activityController2.default.save(request, response);
});

router.route('/:activityId').delete(function (request, response, next) {
	_activityController2.default.deleteActivity(request.params.activityId, request, response);
});

exports.default = router;