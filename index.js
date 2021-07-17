console.log('working');

const form = document.getElementById('subscription');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let email = e.target.children[0].value;

	localStorage.setItem(email, email);
	e.target.children[0].value = '';
});
