var enterButton = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));

	var button = document.createElement("button");
	button.innerText = "Delete";
	button.className = "delete";

	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone(event) {
	event.target.classList.toggle("done");
}

function deleteListItem(event) {
	event.target.parentNode.remove();
}

function respondToListClick(event) {
	if (event.target) {
		if (event.target.matches("li")) {
			toggleDone(event);
		} else if (event.target.matches("button") && event.target.classList.contains("delete")) {
			deleteListItem(event);
		}
	}
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", respondToListClick);