//puts conditional values on food state for use in bubble display
function bubbleFood(user) {
    if (user.food > 20) {
        return 'too-much';
    }
    if (user.food > 5) {
        return 'yum';
    }
    else {
        return 'feed-me';
    }
}

//puts conditional values on water state for use in bubble display
function bubbleWater(user) {
    if (user.water > 20) {
        return 'too-much';
    }
    if (user.water > 5) {
        return 'water-yum';
    }
    else {
        return 'thirsty';
    }
}

//puts conditional values on love state for use in bubble display
function bubbleLove(user) {
    if (user.love > 20) {
        return 'boundaries';
    }
    if (user.love > 5) {
        return 'loved';
    }
    else {
        return 'talk';
    }
}

//displays speech bubbles based on food state
export function renderFoodBubbles(user) {
    let food = bubbleFood(user);
    
    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${food}.gif`;

}

//displays speech bubbles based on water state
export function renderWaterBubbles(user) {
    let water = bubbleWater(user);

    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${water}.gif`;

}

//displays speech bubbles based on love state
export function renderLoveBubbles(user) {
    let love = bubbleLove(user);

    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${love}.gif`;
}

//renders a blank speech bubble as a placeholder on page load
export function blankBubble() {
    const gif = document.querySelector('#food-bubble');
    gif.src = '../assets/bubbles/blank.gif';
}