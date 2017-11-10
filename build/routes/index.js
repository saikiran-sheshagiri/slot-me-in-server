'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _eventRouter = require('./eventRouter');

var _eventRouter2 = _interopRequireDefault(_eventRouter);

var _activityRouter = require('./activityRouter');

var _activityRouter2 = _interopRequireDefault(_activityRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/heartbeat', function (request, response) {
    response.send('API is running');
    console.log('API is running!');
});

router.use('/events', _eventRouter2.default);
_eventRouter2.default.use('/:eventId/activities', _activityRouter2.default);

exports.default = router;