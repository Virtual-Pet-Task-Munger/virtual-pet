import { loginUser } from '../functions/local-storage-utils.js';

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInfo = new FormData(loginForm);

    loginUser(userInfo.get('username'), userInfo.get('password'), userInfo.get('petname'), userInfo.get('pet'));

    window.location.href = '../pet/index.html';
});





