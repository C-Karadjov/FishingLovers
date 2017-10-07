import $ from 'jquery';
import { compile } from 'templatesCompiler';

const $mainContainer = $('#main-container');
const $carouselContainer = $('#carousel-container');

function getBlogPage() {
    $carouselContainer.html('');
    return compile('blog')
        .then((template)=>{
            $mainContainer.html(template);
        })
}

function getBlogDetails() {
    $carouselContainer.html('');
    return compile('blog-details')
        .then((template)=> {
            $mainContainer.html(template)
        })
}

export { getBlogPage, getBlogDetails };