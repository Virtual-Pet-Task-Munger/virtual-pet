import { logoutUser } from '../functions/local-storage-utils.js';

const logoutButton = document.querySelector('#logout');

logoutButton.addEventListener('click', () => {
    logoutUser();
});