
// Show an element
var show = function (elem) {
	elem.classList.add('is-visible');
};

// Hide an element
var hide = function (elem) {
	elem.classList.remove('is-visible');
};

// Toggle element visibility
var toggle = function (elem) {
	elem.classList.toggle('is-visible');
};

document.addEventListener('click', function (event) {
	console.log(event.target);

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.seamBuilder_trigger')) return;

	// Don't follow the link
	event.preventDefault();
    let x =  document.getElementById(`t${event.target.id}`)
    toggle(x)
	// Log the clicked element in the console
	console.log(event.target);

}, false);