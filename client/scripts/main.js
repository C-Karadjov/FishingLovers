import 'jquery';
import 'bootstrap';
import Navigo from 'navigo';
import * as homeController from 'homeController';
import * as userController from 'usersController';
import * as blogController from 'blogController';
import * as galleryController from 'galleryController';
import { toggleButtonsIfLoggedIn } from 'utils';

toggleButtonsIfLoggedIn();

const router = new Navigo(null, true, '#');

router
    .on('/home', homeController.getHomePage)
    .on('/blog', blogController.getBlogPage)
    .on('/blog/details', blogController.getBlogDetails)
    .on('/blog/create', blogController.getBlogCreatePage)
    .on('/register', userController.register)
    .on('/login', userController.login)
    .on('/logout', userController.logout)
    .on('/profile', userController.profile)
    .on('/gallery', galleryController.getGalleryPage)
    .on('*', homeController.getHomePage)
    .resolve();

