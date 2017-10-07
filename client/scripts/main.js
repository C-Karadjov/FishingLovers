import 'jquery';
import 'bootstrap';
import Navigo from 'navigo';
import { getHomePage } from 'homeController';
import * as userController from 'usersController';
import * as blogController from 'blogController';
import * as galleryController from 'galleryController';

const router = new Navigo(null, true, '#');

router
    .on('/home', getHomePage)
    .on('/blog', blogController.getBlogPage)
    .on('/blog/details', blogController.getBlogDetails)
    .on('/register', userController.register)
    .on('/login', userController.login)
    .on('/logout', userController.logout)
    .on('/profile', userController.profile)
    .on('/gallery', galleryController.getGalleryPage)
    .resolve();

