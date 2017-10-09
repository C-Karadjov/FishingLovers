import $ from 'jquery';

function toggleButtonsIfLoggedIn() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            $('#l-nav-bar__login').hide();
            $('#l-nav-bar__register').hide();
            $('#l-nav-bar__logout').show();
            $('#l-nav-bar__profile').show();
        } else {
            $('#l-nav-bar__profile').hide();
            $('#l-nav-bar__login').show();
            $('#l-nav-bar__register').show();
            $('#l-nav-bar__logout').hide();
        }
    });
}

export { toggleButtonsIfLoggedIn };