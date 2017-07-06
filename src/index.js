import 'better-log/install'

module.exports = function ({ types: t }) {
	return {
		visitor: {
			TemplateLiteral: function(obj, parent, scope, file){
				for(let elem of obj.node.quasis){
					elem.value.cooked = elem.value.cooked.replace(regBreaks, '')
				}
			}
		}
	}
}

const regBreaks = /\t|\n/g
