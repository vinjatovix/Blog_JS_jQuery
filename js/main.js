(function () {
    "use strict";

    //? Artículos metodos extraidos de getArticles.js
    let articles = getArticles();

    articles.forEach((item) => {
        printArticles(item);
    });





    //? selector de temas
    themeSelector();




    //? Login a local storage
    $(document).ready(function () {
        $("#loginForm form").submit(function () {
            let form_login = $("#form_login").val();
            localStorage.setItem("form_login", form_login);
        });
        var form_login = localStorage.getItem("form_login");
        $("#sidebar p").html('Welcome, ' + form_login);

    });
}());




