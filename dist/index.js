'use strict';

require('better-log/install');

module.exports = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			TemplateLiteral: function TemplateLiteral(node, parent, scope, file) {
				for (var i in node) {
					console.log(i);
				}
			}
		}
	};
};