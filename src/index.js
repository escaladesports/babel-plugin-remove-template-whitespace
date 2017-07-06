import 'better-log/install';

module.exports = function ({ types: t }) {
	return {
		visitor: {
			TemplateLiteral: function(node, parent, scope, file){
				for(let elem of obj.node.quasis){
					elem.value.cooked = elem.value.cooked.replace(regBreaks, '')
				}
			}
		}
	};
};
