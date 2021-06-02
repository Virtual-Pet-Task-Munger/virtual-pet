
export function evaluateFood(user){
    if (user.food > 10) {
        return 'full';
    }
    if (user.food > 0) {
        return 'hungry';
    }
    return 'starving';
}

export function evaluateWater(user){
    if (user.water > 15) {
        return 'hydrated';
    }
    if (user.water > 7) {
        return 'thirsty';
    }
    if (user.water > 0) {
        return 'parched';
    }
    return 'dehydrated';
}

export function evaluateLove(user){
    if (user.love > 10) {
        return 'happy';
    }
    if (user.love > 0) {
        return 'sad';
    }
    return 'neglected';
}

export function conveyStats(user) {
    let food = evaluateFood(user);
    let water = evaluateWater(user);
    let love = evaluateLove(user);
    //console.log(love);
    const image = document.querySelector('#love-stat');
    image.src = `../assets/${love}.png`;


}