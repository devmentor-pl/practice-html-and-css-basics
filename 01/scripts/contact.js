
// contact.js

function addComment() {

	let contentNick = document.getElementById('content').value;
	let contentEmail = document.getElementById('content').value;
	let contentTextArea = document.getElementById('content').value;

	var commentField = document.createElement('div');
	commentField.setAttribute('id', 'solution_1');
	commentField.setAttribute('class', 'solution');
	commentField.innerHTML = contentTextArea;
	document.body.appendChild(commentField);
}