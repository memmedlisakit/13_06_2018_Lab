// document.addEventListener("DOMContentLoaded", function(){

// })


$(document).ready(function () {

    let div = $(".div");

    // function test() {
    //     alert("lxjfhgfdk")
    // }

    $("p").click(function () {
        $(div).hide(3000, function () {

        });
    });

    $(".btn_custom").on("mouseover", function () {
        let id = $(this).data("card-id")
        console.log(id)
        $("#"+id).hide(2000, function(){
            $("#"+id).show(2000);
        });

        // let jsid = this.dataset.card;
        // console.log(jsid);
    })






})

