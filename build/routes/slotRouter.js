'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _slotController = require('../controllers/slotController');

var _slotController2 = _interopRequireDefault(_slotController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router({ mergeParams: true });

router.route('/:slotId').put(function (request, response, next) {
	_slotController2.default.update(request, response);
});

exports.default = router;