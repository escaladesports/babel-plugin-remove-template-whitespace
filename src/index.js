import 'better-log/install';

module.exports = function ({ types: t }) {
	return {
		visitor: {
			TemplateLiteral: function(node, parent, scope, file){
				for(let i in node){
					console.log(i)
				}
			}
		}
	};
};
