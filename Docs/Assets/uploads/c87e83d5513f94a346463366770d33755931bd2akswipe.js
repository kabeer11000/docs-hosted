'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Swipe = function () {
    function Swipe(element) {
        _classCallCheck(this, Swipe);

        this.xDown = null;
        this.yDown = null;
        this.element = typeof element === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function (evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);
    }

    _createClass(Swipe, [{
        key: 'onLeft',
        value: function onLeft(callback) {
            this.onLeft = callback;

            return this;
        }
    }, {
        key: 'onRight',
        value: function onRight(callback) {
            this.onRight = callback;

            return this;
        }
    }, {
        key: 'onUp',
        value: function onUp(callback) {
            this.onUp = callback;

            return this;
        }
    }, {
        key: 'onDown',
        value: function onDown(callback) {
            this.onDown = callback;

            return this;
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove(evt) {
            if (!this.xDown || !this.yDown) {
                return;
            }

            var xUp = evt.touches[0].clientX;
            var yUp = evt.touches[0].clientY;

            this.xDiff = this.xDown - xUp;
            this.yDiff = this.yDown - yUp;

            if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
                // Most significant.
                if (this.xDiff > 0) {
                    this.onLeft();
                } else {
                    this.onRight();
                }
            } else {
                if (this.yDiff > 0) {
                    this.onUp();
                } else {
                    this.onDown();
                }
            }

            // Reset values.
            this.xDown = null;
            this.yDown = null;
        }
    }, {
        key: 'run',
        value: function run() {
            this.element.addEventListener('touchmove', function (evt) {
                this.handleTouchMove(evt).bind(this);
            }.bind(this), false);
        }
    }]);

    return Swipe;
}();