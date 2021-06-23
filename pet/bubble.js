function bubble(user, key, stringsArray) {
    if (user[key] > 20) {
        return stringsArray[0];
    }
    if (user[key] > 5) {
        return stringsArray[1];
    }
    else {
        return stringsArray[2];
    }
}

//puts conditional values on food state for use in bubble display
function bubbleFood(user) {
    return bubble(user, 'food', ['too-much', 'yum', 'feed-me']);
}

//puts conditional values on water state for use in bubble display
function bubbleWater(user) {
    return bubble(user, 'water', ['too-much', 'water-yum', 'thirsty']);

}

//puts conditional values on love state for use in bubble display
function bubbleLove(user) {
    return bubble(user, 'love', ['boundaries', 'loved', 'talk']);

}

function renderBubbles(user, callback) {
    let item = callback(user);
    
    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/bubbles/${item}.gif`;
}

//displays speech bubbles based on food state
export function renderFoodBubbles(user) {
    // seems like you could just grab the user in all the functions in this file from local storage here instead of needing to remember to pass it as an argument?

    return renderBubbles(user, bubbleFood);
}

//displays speech bubbles based on water state
export function renderWaterBubbles(user) {
    return renderBubbles(user, bubbleWater);
}

//displays speech bubbles based on love state
export function renderLoveBubbles(user) {
    return renderBubbles(user, bubbleLove);
}

//renders a blank speech bubble as a placeholder on page load
export function blankBubble() {
    const gif = document.querySelector('#food-bubble');
    gif.src = '../assets/bubbles/blank.gif';
}