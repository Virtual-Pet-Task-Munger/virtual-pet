import { createUser } from '../functions/local-storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    //console.log(formData);
    createUser(formData.get('username'), formData.get('password'), formData.get('petname'), formData.get('pet'));
});