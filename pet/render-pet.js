import { getCurrentUser, getUser } from '../functions/local-storage-utils.js';
import petData from '../data/pet-data.js';
import { findById } from '../functions/utils.js';



export function redenderPet() {
    const user = getCurrentUser();

    const id = Number(user.pet);

    console.log(id);

    const userPet = findById(petData, id);

    const image = document.createElement('img');

    const petDiv = document.querySelector('div');

    image.src = userPet.gif;

    petDiv.append(image);

}
