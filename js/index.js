"use strict";

var myInit = { method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				},
				mode: 'cors',
				cache: 'default' };

let myRequest = new Request("./data.json", myInit);

fetch("./data.json")
		.then(function(resp) {
			return resp.json();
		})
		.then(function(data){
			console.log(data.title);
		})
		// .then(data => {
		// 	console.log(data.title)
		// 	document.querySelector("#app").innerText = data.title
		// })