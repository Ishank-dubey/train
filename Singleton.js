var myst = (function () {var MySingletonClass = function () {
     console.log(MySingletonClass.prototype._singletonInstance);
    if (MySingletonClass.prototype._singletonInstance) {
      console.log('INIT');
      return MySingletonClass.prototype._singletonInstance;
    }
    console.log('EXISTS');
    MySingletonClass.prototype._singletonInstance = {};
    MySingletonClass.prototype._singletonInstance.name = 'Test123'
    MySingletonClass.prototype._singletonInstance.Foo = function() {
      console.log(this.name);
    };
    return MySingletonClass.prototype._singletonInstance;
  };
return MySingletonClass;})();
