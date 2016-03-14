define(function() {
  'use strict';

  var OldInterface = function() {}

  OldInterface.prototype.doSomethingOld = function() {
    console.log('doing this old thing');
  };

  return new OldInterface();
});
