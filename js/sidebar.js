$(document).ready(function () {
    $("#toggle-button").click(function () {
        $(".nav_name").each(function () {
            $(this).toggleClass("d-none");
        });
        $(".searchIcon").toggleClass("d-none");
        $("#searchInput").toggleClass("d-flex");
        $(".sidebar").toggleClass("bg-light border-right border-bottom border-secondary h-100");
        $(".headerNutureIcon").toggleClass("d-none");
        $(".links").toggleClass("d-block");     
    })
});