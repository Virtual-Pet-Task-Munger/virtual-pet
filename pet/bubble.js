
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

export function renderFoodBubbles(user) {
    let food = bubbleFood(user);
    
    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${food}.gif`;

}

export function renderWaterBubbles(user) {
    let water = bubbleWater(user);

    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${water}.gif`;

}

export function renderLoveBubbles(user) {
    let love = bubbleLove(user);

    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${love}.gif`;
}

export function blankBubble() {
    const gif = document.querySelector('#food-bubble');
    gif.src = '../assets/bubbles/blank.gif';
}