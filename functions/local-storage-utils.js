import petData from '../data/pet-data.js'; 


const CURRENT = 'CURRENT';


export function createUser(username, password, petname, pet) {

    if (localStorage.getItem(username)) {
        alert('this username already exists');
    } else {
        const user = {
            username: username,
            password: password,
            petname: petname,
            love: 5,
            food: 5,
            water: 5,
            pet: pet
        };
        setUser(user);
        loginUser(username, password);
    }
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(user.username, stringyUser);
}

export function getUser(username) {
    const stringyUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

export function getCurrentUser() {
    const currentUser = localStorage.getItem(CURRENT);
    const user = getUser(currentUser);
    return user;
}


export function logoutUser() {
    localStorage.setItem(CURRENT, []);
    window.location.href = '../index.html';
}

export function loginUser(username, password) {
    const user = getUser(username);
    if (user) {
        if (user.password === password) {
            localStorage.setItem(CURRENT, username);
            window.location.href = '../pet/index.html';
        } else {
            alert('Username and password do not match!');
        }
    } else {
        alert ('User does not exist!');
    }
}
