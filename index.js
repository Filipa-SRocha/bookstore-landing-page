console.log('working');

const form = document.getElementById('subscription');
const formContainer = document.getElementById('subscribe');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let email = e.target.children[0].value;

	localStorage.setItem(email, email);

	formContainer.innerHTML = `<p>Vamos enviar o teu código para o email ${email} <br>Boas leituras!</p>`;
});
