import { createUser } from '../functions/local-storage-utils.js';

//grabs the form element from the DOM
const form = document.querySelector('form');

//gets data from the form to use in local storage
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    createUser(formData.get('username'), formData.get('password'), formData.get('petname'), formData.get('pet'));
});
