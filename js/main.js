(function () {
    "use strict";

    //? Artículos metodos extraidos de getArticles.js
    let articles = getArticles();

    articles.forEach((item) => {
        printArticles(item);
    });

    //? selector de temas
    themeSelector();

    //? scroll up
    $('.goTop').click(function(e){
        e.preventDefault();

        $('html', 'body').animate({
            scrollTop: 0
        }, 5000);
        return false;
    });
        




}());




