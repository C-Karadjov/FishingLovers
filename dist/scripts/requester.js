"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function get(e){return new Promise(function(r,t){_jquery2.default.ajax({url:e,method:"GET"}).done(r).fail(t)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.get=void 0;var _jquery=require("jquery"),_jquery2=_interopRequireDefault(_jquery);exports.get=get;