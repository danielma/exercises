module.exports = function curry(originalFunc) {
  var arity = originalFunc.length;

  var initialFunc = function() {
    var args  = Array.prototype.slice.call(arguments);

    var curriedFunc = function() {
      args = args.concat(Array.prototype.slice.call(arguments));

      if (args.length >= arity) {
        return originalFunc.apply(null, args);
      } else {
        return curriedFunc;
      }
    };

    return curriedFunc;
  };

  return initialFunc;
}
