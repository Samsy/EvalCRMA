/*
 * websockets
 
 *
 * Copyright (c) 2013 Jonathan Blanchet
 * Licensed under the MIT license.
 */
'use strict';
var Twitter = require('ntwitter');
var io = require('socket.io').listen(9003);
var EE = require('events').EventEmitter;
var pubsub = new EE();
var twitterClient = new Twitter({
    consumer_key: 'PiwYrnwDNFPjmdTAcAUrQ',
    consumer_secret: 'JsddWp05jKsICuXgSoSH9BYzlVDn7dTafigA22Uo',
    access_token_key: '860327684-Pw38HJ8E1yvdV6lcfUoPRWGkXNx7Q9H5iNXm8GgK',
    access_token_secret: 'VXUuY5578ZFIuqAiKRpfyHpYqLAB8wGFFCY3folrG4'
});
twitterClient.stream('statuses/filter', {'track': 'God'}, function(stream) {
  stream.on('data', function (data) {
    pubsub.emit('tweet', data);
  });
});

io.sockets.on('connection', function  (socket) {
    // Au moins un user connecté
    pubsub.on('tweet', function  (tweet) {
        socket.emit('tweet', tweet);
    });
})