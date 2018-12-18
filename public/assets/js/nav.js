$("#mysites").click(function () {
    var uuid = localStorage.getItem("uuid");
    window.location.href = "/mysites/" + uuid;
});


const hideform = function () {
    $(".index").hide();
    $(".home").hide();
    $(".admin").hide();
    $(".site").hide();
    $("#login").hide();
    if (localStorage.getItem("username") == null){
        $("#mysites").hide();
        $("#login").show()
        $("#submitSignout").hide();
    }
};
hideform();