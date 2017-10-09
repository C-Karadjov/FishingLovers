function createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
}

function singIn(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

function signOut() {
    return firebase.auth().signOut();
}

function checkIsSignIn(user) {
    return firebase.auth().onAuthStateChanged(user);
}

function addArticle(article) {
    const articles = firebase.database().ref('/articles');
    articles.push(article);
    return Promise.resolve(article);
}

export { createUser, singIn, signOut, checkIsSignIn, addArticle};