function bubbleFood(user) {
    if (user.food > 20) {
        return 'too-much';
    }
    else {
        return 'yum';
    }
}

export function renderBubbles(user) {
    let food = bubbleFood(user);

    const gif = document.querySelector('#food-bubble');
    gif.src = `../assets/${food}.gif`;
}