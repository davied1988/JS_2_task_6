var list = document.getElementById('list');
var add = document.getElementById('addElem');

console.log(list);

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var test = document.getElementsByTagName("li");
	element.innerHTML = 'item ' + test.length;
	list.appendChild(element);
});
