import { getCurrentUser, setUser } from '../functions/local-storage-utils.js';
import petData from '../data/pet-data.js';
import { findById } from '../functions/utils.js';



export function renderPet() {
    const user = getCurrentUser();

    const id = Number(user.pet);

    const userPet = findById(petData, id);

    const image = document.createElement('img');

    const petDiv = document.querySelector('div');

    image.src = userPet.gif;

    petDiv.append(image);
}

export function petInterval() {
    
    setInterval(() => {
        const user = getCurrentUser();
        user.food--;
        user.water--;
        user.love--;
        setUser(user);}, 
    5000);
}
