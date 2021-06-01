import { logoutUser, getCurrentUser, setUser } from '../functions/local-storage-utils.js';
import { petInterval, redenderPet } from './render-pet.js';

const logoutButton = document.querySelector('#logout');
const foodButton = document.querySelector('#food');
const waterButton = document.querySelector('#water');
const loveButton = document.querySelector('#love');

redenderPet();
petInterval();

logoutButton.addEventListener('click', () => {
    logoutUser();
});

foodButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.food++;
    setUser(user);
});

waterButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.water++;
    setUser(user);
});

loveButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.love++;
    setUser(user);
});