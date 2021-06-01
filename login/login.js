import { loginUser } from '../functions/local-storage-utils.js';

const loginForm = document.querySelector('form');
const homeButton = document.querySelector('#homepage');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInfo = new FormData(loginForm);

    loginUser(userInfo.get('username'), userInfo.get('password'), userInfo.get('petname'), userInfo.get('pet'));''
});

homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});






