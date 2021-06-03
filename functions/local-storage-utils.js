
const CURRENT = 'CURRENT';

//creates new user object in local storage, logs new user in as current user
export function createUser(username, password, petname, pet) {

    if (localStorage.getItem(username)) {
        alert('this username already exists');
    } else {
        const user = {
            username: username,
            password: password,
            petname: petname,
            love: 10,
            food: 10,
            water: 10,
            pet: pet
        };
        setUser(user);
        loginUser(username, password);
    }
}

//sets user in local storage
export function setUser(user) {
    const stringyUser = JSON.stringify(user);
    localStorage.setItem(user.username, stringyUser);
}

//gets user from local storage
export function getUser(username) {
    const stringyUser = localStorage.getItem(username);
    const parsedUser = JSON.parse(stringyUser);
    return parsedUser;
}

//gets current user from local storage
export function getCurrentUser() {
    const currentUser = localStorage.getItem(CURRENT);
    const user = getUser(currentUser);
    return user;
}

//logs out current user, redirects to home page
export function logoutUser() {
    localStorage.setItem(CURRENT, []);
    window.location.href = '../index.html';
}

//logs in user provided user name and password match an existing user in local storage
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
