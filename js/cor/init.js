define(function(require) {
  'use strict';

  return {
    init: function() {
      var call, sms, email, handler, telepathy,
          Handler = require('cor/handler'),
          callHandler = require('cor/handlers/call');

      call = {
        type: 'call',
        number: '071234567890',
        ownNumber: '070031101003'
      };

      sms = {
        type: 'sms',
        number: '071234567890',
        message: 'Hey Chris'
      };

      email = {
        type: 'email',
        recipient: 'me@me.com',
        message: 'Hi Chris'
      };

      telepathy = {
        type: 'esp',
        target: 'someone else',
        message: 'can\'t read minds'
      }

      handler = new Handler(null, null, callHandler);
      handler.handleCommunication(email);
      handler.handleCommunication(sms);
      handler.handleCommunication(call);
      handler.handleCommunication(telepathy);
    }
  };
});
