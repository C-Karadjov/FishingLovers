import $ from 'jquery';
import * as toastr from 'toastrConfig';
import { compile } from 'templatesCompiler';
import { Article } from 'articleModel';
import * as db from 'db';

const $mainContainer = $('#main-container');
const $carouselContainer = $('#carousel-container');
const $addArticleBtn = $('.l-add-article__btn');

function getBlogPage() {
    $carouselContainer.html('');
    
    const articles = firebase.database().ref().child('articles');
    
    articles.on('value', (snapshot) => {
        const articlesData = snapshot.val();
        const dataArray = Object.keys(articlesData).map((key) => {
            return articlesData[key];
        });
        return compile('blog', dataArray)
            .then((template) => {
                $mainContainer.html(template);
            })
            .then(() => {
                db.checkIsSignIn((user) => {
                    if (user) {
                        $('.l-add-article__btn').show();
                    } else {
                        $('.l-add-article__btn').hide();
                    }
                });
            });
    });
}

function getBlogDetails() {
    $carouselContainer.html('');
    return compile('blog-details')
        .then((template) => {
            $mainContainer.html(template)
        })
}

function getBlogCreatePage() {
    $carouselContainer.html('');
    return compile('blog-create')
        .then((template) => {
            $mainContainer.html(template)
        })
        .then(() => {
            const $title = $('#l-form-article__title');
            const $photoUrl = $('#l-form-article__photoUrl');
            const $content = $('#l-form-article__content');
            const $category = $('#l-form-article__category');
            const $articleCreate = $('#l-form-article-create');
            
            $articleCreate.on('click', () => {
                const title = $title.val();
                const photoUrl = $photoUrl.val();
                const content = $content.val();
                const category = $category.val();
                
                let date = new Date();
                const options = {
                    year: "numeric", month: "long",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                };
                
                date = date.toLocaleDateString("bg-BG", options);
                
                const article = new Article(title, photoUrl, content, category, date);
                
                db.addArticle(article)
                    .then((article) => {
                        if ((article)) {
                            toastr.success('Article successfully created!');
                            $(location).attr('href', '#/blog');
                        } else {
                            toastr.error('An error occurred, please try again later!');
                            $(location).attr('href', '#/blog/create');
                        }
                    });
            });
        });
}

export { getBlogPage, getBlogDetails, getBlogCreatePage };