import { compile } from 'templatesCompiler';
import $ from 'jquery';

const $mainContainer = $('#main-container');
const $carouselContainer = $('#carousel-container');

function getHomePage() {
    return compile('carousel')
        .then((template) => {
            $carouselContainer.html(template);
        })
        .then(() => {
            compile('home')
                .then((template) => {
                    $mainContainer.html(template);
                });
        });
    
}

export { getHomePage };