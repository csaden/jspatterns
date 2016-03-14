define(function(require) {
  'use strict';

  var CommunicationHandler = function(communcationType, handler, nextHandler) {
    this.communcationType = communcationType;
    this.handler = handler;
    this.nextHandler = nextHandler;
  };

  CommunicationHandler.prototype.handleCommunication = function(communication) {
    if (communication.type !== this.communcationType) {
      (this.nextHandler) ? this.nextHandler.handleCommunication(communication) :
          console.log('Communication type', communication.type, 'could not be handled');
      return;
    }
    this.handler(communication);
  };

  return CommunicationHandler;
});
