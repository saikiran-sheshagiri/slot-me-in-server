'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// parse body params and attache them to req.body
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

//connect to the mongodb instance
var mongo_uri = 'mongodb://localhost:27017/slotmein';
// Use bluebird
var mongo_options = { promiseLibrary: _bluebird2.default };

_mongoose2.default.connect(mongo_uri, mongo_options);
_mongoose2.default.connection.on('error', function () {
    console.log('Unable to connect to database');
});

_mongoose2.default.connection.once('open', function () {
    console.log('Connected to local instance of the database');
});

//enable cors
app.use((0, _cors2.default)());

//mount the routes on api
app.use('/api', _routes2.default);

app.listen(4747, function () {
    console.log('Example running on at 4747');
});