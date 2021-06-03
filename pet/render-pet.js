import { getCurrentUser, setUser } from '../functions/local-storage-utils.js';
import petData from '../data/pet-data.js';
import { findById } from '../functions/utils.js';
import { conveyStats } from './conveyance.js';


//renders the pet gif on the pet page by combining current user data with pet data from data file
export function renderPet() {
    const user = getCurrentUser();

    const id = Number(user.pet);

    const userPet = findById(petData, id);

    const image = document.createElement('img');

    const petDiv = document.querySelector('div');

    image.src = userPet.gif;

    petDiv.append(image);

}


//decrements the food, water, and love amounts in local storage at a regular interval
export function petInterval() {
    
    setInterval(() => {
        const user = getCurrentUser();
        user.food--;
        user.water--;
        user.love--;
        setUser(user);
        conveyStats(user);
        gameOver(user);
    }, 
    5000);
}

export function gameOver(user) {
    if (user.food, user.water, user.love <= -20) {
        localStorage.clear();

        window.location.href = '../game-over/index.html';

    }
}