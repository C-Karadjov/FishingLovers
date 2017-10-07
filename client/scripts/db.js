import $ from 'jquery';

function createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function singIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

function singOut() {
    return firebase.auth().signOut();
}

export { createUser, singIn, singOut };