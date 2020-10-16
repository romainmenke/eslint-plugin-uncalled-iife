"use strict";

const rule = require("../lib/rule.js");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("uncalled-iife", rule, {
	valid: [
		{
			code: "function A() { }"
		},
		{
			code: "(function(){ }())"
		},
		{
			code: "var alpha = function(){ };"
		}
	],
	invalid: [
		{
			code: "(function(){ })",
			errors: [{ message: "Possible uncalled IIFE" }]
		},
		{
			code: "(function(){ })",
			errors: [{ message: "Possible uncalled IIFE" }]
		}
	]
});
