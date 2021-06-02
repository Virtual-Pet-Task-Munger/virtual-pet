import { loginUser } from '../functions/local-storage-utils.js';

//gets form and home-button elements from the DOM
const loginForm = document.querySelector('form');
const homeButton = document.querySelector('#homepage');

//calls login user function to match user and password with local storage
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userInfo = new FormData(loginForm);

    loginUser(userInfo.get('username'), userInfo.get('password'), userInfo.get('petname'), userInfo.get('pet'));
});

//redirects user to the home page
homeButton.addEventListener('click', () => {
    window.location.href = '../index.html';
});






