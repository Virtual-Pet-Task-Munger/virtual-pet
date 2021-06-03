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
blankBubble();

//decrements pet stats in local storage
petInterval();

const user = getCurrentUser();
conveyStats(user);


//logs out current user, redirects to home page
logoutButton.addEventListener('click', () => {
    logoutUser();
});

//increments food stat on click
foodButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.food++;
    setUser(user);
    conveyStats(user);
    renderFoodBubbles(user);
    gameOver(user);
    //console.log(renderBubbles(user))
});

//increments water stat on click
waterButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.water++;
    setUser(user);
    conveyStats(user);
    renderWaterBubbles(user);
    gameOver(user);
});

//increments love stat on click
loveButton.addEventListener('click', () => {
    const user = getCurrentUser();
    user.love++;
    setUser(user);
    conveyStats(user);
    renderLoveBubbles(user);
    gameOver(user);
});

