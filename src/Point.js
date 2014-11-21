// Copyright (C) 1998-2000 Greg J. Badros
// Use of this source code is governed by http://www.apache.org/licenses/LICENSE-2.0
//
// Parts Copyright (C) 2011, Alex Russell (slightlyoff@chromium.org)
// Parts Copyright (C) 2014, Victor Genin

(function(c) {
"use strict";
c.Point = c.inherit({
  initialize: function(x, y, suffix) {
    if (typeof x === "string") { // only name constractor
      suffix = x;
      x = null;
    }

    if (typeof suffix !== 'undefined') { // count '0' as a valid suffix
      this._name = suffix;
    }
    if (x instanceof c.Variable) {
      this._x = x;
    } else {
      var xArgs = { value: x };
      if (suffix) {
        xArgs.name = "x" + suffix;
      }
      this._x = new c.Variable(xArgs);
    }
    if (y instanceof c.Variable) {
      this._y = y;
    } else {
      var yArgs = { value: y };
      if (suffix) {
        yArgs.name = "y" + suffix;
      }
      this._y = new c.Variable(yArgs);
    }
  },

  get name() { return this._name; },
  get x() { return this._x; },
  set x(xVar) {
    if (xVar instanceof c.Variable) {
      this._x = xVar;
    } else {
      this._x.value = xVar;
    }
  },

  get y() { return this._y; },
  set y(yVar) {
    if (yVar instanceof c.Variable) {
      this._y = yVar;
    } else {
      this._y.value = yVar;
    }
  },

  toString: function() {
    return "(" + this.x + ", " + this.y + ")";
  },
});

})(this["c"]||module.parent.exports||{});
