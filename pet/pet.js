import { logoutUser, getCurrentUser, setUser } from '../functions/local-storage-utils.js';
import { renderFoodBubbles, renderWaterBubbles, renderLoveBubbles, blankBubble } from './bubble.js';
import { conveyStats } from './conveyance.js';
import { gameOver, petInterval, renderPet } from './render-pet.js';

//grabs button elements from the DOM to use in click events
const logoutButton = document.querySelector('#logout');
const foodButton = document.querySelector('#food');
const waterButton = document.querySelector('#water');
const loveButton = document.querySelector('#love');

//renders pet on the page
renderPet();

//renders blank gif as a placeholder for speech bubbles
blankBubble();

//decrements pet stats in local storage
petInterval();

// worried about the two "user" variables floating around
const _user = getCurrentUser();

//updates the image displays based on local storage state
conveyStats(_user);


//logs out current user, redirects to home page
logoutButton.addEventListener('click', () => {
    logoutUser();
});

function handleClick(key, callback) {
    const user = getCurrentUser();
    user[key]++;
    setUser(user);
    conveyStats(user);
    callback(user);
    gameOver(user);
}

//increments food stat on click, displays relevant information
foodButton.addEventListener('click', () => {
    handleClick('food', renderFoodBubbles);    
});

//increments water stat on click, displays relevant information
waterButton.addEventListener('click', () => {
    handleClick('water', renderWaterBubbles);    
});

//increments love stat on click, displays relevant information
loveButton.addEventListener('click', () => {
    handleClick('love', renderLoveBubbles);    
});

