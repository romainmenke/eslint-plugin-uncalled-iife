function reportPossibleIIFE(context, node) {
	context.report({
		node: node,
		message: "Possible uncalled IIFE"
	});
}


module.exports = {
	meta: {
		type: "problem",
		
		docs: {
			description: "disallow uncalled IIFE",
			category: "Errors",
			recommended: true
		},
		schema: [] // no options
	},
	create: function(context) {
		return {
			FunctionExpression: function (node) {
				if (node.id && node.id.type === 'Identifier') {
					return;
				}

				if (!node.parent) {
					reportPossibleIIFE(context, node);
					return;
				}

				if (node.parent.type === 'VariableDeclarator') {
					return;
				}

				if (node.parent.type === 'Property') {
					return;
				}

				if (node.parent.type === 'BinaryExpression') {
					reportPossibleIIFE(context, node);
					return;
				}

				if (node.parent.type !== 'CallExpression') {
					reportPossibleIIFE(context, node);
					return;
				}
			},
		};
	}
}
