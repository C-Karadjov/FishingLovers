import { compile } from 'templatesCompiler';
import $ from 'jquery';

const $mainContainer = $('#main-container');

function getHomePage() {
    return compile('home')
        .then((template) => {
            $mainContainer.html(template);
        })
}

export { getHomePage };