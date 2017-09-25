import 'jquery';
import 'bootstrap';
import Navigo from 'navigo';
import { getHomePage } from 'homeController';


const router = new Navigo(null, false);

router
    .on('/home', getHomePage)
    .resolve();

