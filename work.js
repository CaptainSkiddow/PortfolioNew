function welcome() {
    console.log("Welcome")
};

welcome();

$(document).ready(function () {
    $('#test').click(function () {
        $("#test").hide();
    });
});

$(document).ready(function () { $("img").click(function () { this.requestFullscreen() }) });





