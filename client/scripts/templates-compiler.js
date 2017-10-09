import 'jquery';
import  Handlebars from 'handlebars';
import { get as getTemplate } from 'requester';

// function compile(templateName) {
//     return getTemplate(`templates/${templateName}.handlebars`)
//         .then((template) => {
//             const compiledTemplate = Handlebars.compile(template);
//             return Promise.resolve(compiledTemplate);
//         });
// }

const cachedTemplates = {};

function _get(name) {
    if (cachedTemplates[name]) {
        return Promise.resolve(cachedTemplates[name]);
    } else {
        let url = `templates/${name}.mustache`;
        
        return getTemplate(url)
            .then(template => {
                cachedTemplates[name] = template;
                return Promise.resolve(template);
            });
    }
}

function compile(templateName, data) {
    return _get(templateName)
        .then(template => {
            let templateFunction = Handlebars.compile(template);
            return templateFunction(data);
        });
}


export { compile };