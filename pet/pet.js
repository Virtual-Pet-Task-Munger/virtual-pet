import { logoutUser } from '../functions/local-storage-utils.js';
import { redenderPet } from './render-pet.js';

const logoutButton = document.querySelector('#logout');

redenderPet();

logoutButton.addEventListener('click', () => {
    logoutUser();
});