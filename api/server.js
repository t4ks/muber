'use strict';

var engine = require('../engine/server');

engine.bootstrap({
    name: 'muber',
    version: '0.1.0'
}, null, function () {
    console.log('Server is online...');
});
