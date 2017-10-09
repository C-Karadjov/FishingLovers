import * as db from 'db';
import { compile } from 'templatesCompiler';
import $ from 'jquery';
import * as toastr from 'toastrConfig';
import { User } from 'userModel';

const $mainContainer = $('#main-container');
const $carouselContainer = $('#carousel-container');

function login() {
    $carouselContainer.html('');
    return compile('login')
        .then((template) => {
            $mainContainer.html(template)
        })
        .then(() => {
            const $email = $('#l-form-login__email');
            const $password = $('#l-form-login__password');
            const $btnLogin = $('#l-form-login');
            
            $btnLogin.on('click', () => {
                const email = $email.val();
                const password = $password.val();
                
                db.singIn(email, password)
                    .then((loggedUser) => toastr.success('Successfully logged in!'))
                    .catch((err) => toastr.error(err.message));
            });
            
            db.checkIsSignIn((user) => {
                if (user) {
                    $(location).attr('href', '#/home');
                }
                else {
                    $(location).attr('href', '#/login');
                }
            });
        });
}

function register() {
    $carouselContainer.html('');
    return compile('register')
        .then((template) => {
            $mainContainer.html(template)
        })
        .then(() => {
            const $firstName = $('#l-form-register__firstName');
            const $lastName = $('#l-form-register__lastName');
            const $username = $('#l-form-register__username');
            const $email = $('#l-form-register__email');
            const $password = $('#l-form-register__password');
            const $btnCreate = $('#l-form-create');
            
            $btnCreate.on('click', () => {
                const firstName = $firstName.val();
                const lastName = $lastName.val();
                const username = $username.val();
                const email = $email.val();
                const password = $password.val();
                
                db.createUser(email, password)
                    .then((createdUser) => toastr.success('Successfully registered!'))
                    .catch((err) => toastr.error(err.message));
                
                db.checkIsSignIn((firebaseUser) => {
                    if (firebaseUser) {
                        const refUser = firebase.database().ref();
                        const user = new User(firstName, lastName, username, email);
                        refUser.child('users/' + firebaseUser.uid).set(user);
                        $(location).attr('href', '#/home');
                    }
                });
            });
        })
}

function logout() {
    const $btnLogout = $('#l-nav-bar__logout');
    
    $btnLogout.on('click', () => {
        db.signOut();
        toastr.success('Successfully Log out!');
        $(location).attr('href', '#/home');
    })
}

function profile() {
    const userId = firebase.auth().currentUser.uid;
    
    const user = firebase.database().ref('users').child(userId);
    
    user.on('value', function (snapshot) {
        const userData = snapshot.val();
        console.log(userData);
        return compile('profile', userData)
            .then((template) => {
                $mainContainer.html(template);
            })
    });
}


export { register, login, logout, profile };