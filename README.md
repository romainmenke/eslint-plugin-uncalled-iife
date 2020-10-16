# eslint-plugin-uncalled-iife

Valid :

```js
(function() {
	console.log('hello!');
}());
```

Invalid :

```js
(function() {
	console.log('hello!');
});
```
