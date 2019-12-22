(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var a = function a() {};
var a = function a(b) {
  return b;
};

var double = [1, 2, 3].map(function (num) {
  return num * 2;
});
console.log(double); // [2,4,6]

var bob = {
  _name: "Bob",
  _friends: ["Sally", "Tom"],
  printFriends: function printFriends() {
    var _this = this;

    this._friends.forEach(function (f) {
      return console.log(_this._name + " knows " + f);
    });
  }
};
console.log(bob.printFriends());

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksSUFBSSxTQUFKLENBQUksR0FBTSxDQUFFLENBQWhCO0FBQ0EsSUFBSSxJQUFJLFNBQUosQ0FBSSxDQUFDLENBQUQ7QUFBQSxTQUFPLENBQVA7QUFBQSxDQUFSOztBQUVBLElBQU0sU0FBUyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFRLEdBQVIsQ0FBWSxVQUFDLEdBQUQ7QUFBQSxTQUFTLE1BQU0sQ0FBZjtBQUFBLENBQVosQ0FBZjtBQUNBLFFBQVEsR0FBUixDQUFZLE1BQVosRSxDQUFxQjs7QUFFckIsSUFBSSxNQUFNO0FBQ1IsU0FBTyxLQURDO0FBRVIsWUFBVSxDQUFDLE9BQUQsRUFBVSxLQUFWLENBRkY7QUFHUixjQUhRLDBCQUdPO0FBQUE7O0FBQ2IsU0FBSyxRQUFMLENBQWMsT0FBZCxDQUFzQjtBQUFBLGFBQ3BCLFFBQVEsR0FBUixDQUFZLE1BQUssS0FBTCxHQUFhLFNBQWIsR0FBeUIsQ0FBckMsQ0FEb0I7QUFBQSxLQUF0QjtBQUVEO0FBTk8sQ0FBVjtBQVFBLFFBQVEsR0FBUixDQUFZLElBQUksWUFBSixFQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwidmFyIGEgPSAoKSA9PiB7fTtcclxudmFyIGEgPSAoYikgPT4gYjtcclxuIFxyXG5jb25zdCBkb3VibGUgPSBbMSwyLDNdLm1hcCgobnVtKSA9PiBudW0gKiAyKTtcclxuY29uc29sZS5sb2coZG91YmxlKTsgLy8gWzIsNCw2XVxyXG4gXHJcbnZhciBib2IgPSB7XHJcbiAgX25hbWU6IFwiQm9iXCIsXHJcbiAgX2ZyaWVuZHM6IFtcIlNhbGx5XCIsIFwiVG9tXCJdLFxyXG4gIHByaW50RnJpZW5kcygpIHtcclxuICAgIHRoaXMuX2ZyaWVuZHMuZm9yRWFjaChmID0+XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUgKyBcIiBrbm93cyBcIiArIGYpKTtcclxuICB9XHJcbn07XHJcbmNvbnNvbGUubG9nKGJvYi5wcmludEZyaWVuZHMoKSk7Il19
