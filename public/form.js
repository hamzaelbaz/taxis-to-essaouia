const form = document.querySelector('form')
const nom = document.querySelector('#name')
const depart = document.querySelector('#depart')
const destination = document.querySelector('#destination')
const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const telephone = document.querySelector('#phone')
const message = document.querySelector('#message')
const msgSucc = document.querySelector('.succes-message')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = nom.value;
    const start = depart.value;
    const destinations = destination.value;
    const numbers = nombre.value;
    const emails = email.value;
    const messages = message.value;
    const tel = telephone.value;
	msgSucc.classList.add('toggle')
    try {
        const response = await axios.post('/.netlify/functions/sendEmail', {
            name: name,
            start: start,
            destinations: destinations,
            numbers: numbers,
            emails: emails,
            messages:messages,
            tel:tel
        });
		nom.value = ""
        depart.value = ""
        destination.value =""
        nombre.value = ""
        email.value = "",
        message.value= "",
        telephone.value= ""
		setTimeout(()=>{
			msgSucc.classList.remove('toggle')
		},5000)

    } catch (error) {
        console.error("oups! elle y a une erreur:", error);
    }
});