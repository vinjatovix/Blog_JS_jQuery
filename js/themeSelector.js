

function themeSelector() {
    $(document).ready(function () {

        //? Selector de tema de color de la página
        let theme = $("#theme");

        console.log(theme.attr('href'));

        $("#to-red").click(function () {

            theme.attr('href', "css/red.css");

        });
        $("#to-green").click(function () {
            theme.attr("href", "css/green.css");

        });
        $("#to-blue").click(function () {
            theme.attr("href", "css/blue.css");

        });
        $("#to-dark").click(function () {
            theme.attr("href", "css/dark.css");

        });
    });
};
