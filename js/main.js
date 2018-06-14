// document.addEventListener("DOMContentLoaded", function(){

// })


$(document).ready(function () {
    // let div = $(".div"); 
    // // function test() {
    // //     alert("lxjfhgfdk")
    // // } 
    // $("p").click(function () {
    //     $(div).hide(3000, function () {

    //     });
    // }); 
    // $(".btn_custom").on("mouseover", function () {
    //     let id = $(this).data("card-id")
    //     console.log(id)
    //     $("#"+id).slideUp(2000, function(){
    //         $("#"+id).slideDown(2000);
    //     }); 
    //     // let jsid = this.dataset.card;
    //     // console.log(jsid);
    // }) 

    $(".btn_position").on("click", function () {
        // let styles = {
        //     width: "500px",
        //     height: "200px",
        //     background: "red",
        // }

        // $(".green").css(styles);
        // $(".green").animate({
        //     top: "+=150px"
        // }, 1000, function(){
        //     $(".green").animate({
        //         top:"-=150px"
        //     }, 1000)
        // }).css({
        //     "fontSize":"55px"
        // }).addClass("div")



        // GET text
        // let text01 = $(".green").html();
        // let text02 = $(".green").text();
        // console.log(text01);



        //  SET text
        // $(".green").html("<h1>hello world</h1>")
        // $(".green").text("<h1>hello world</h1>")




        $(".green").prepend("<h1>prepend header</h1>")
        $(".green").append("<h1>append footer</h1>")



        $(".text").before("<i>before italic text</i>") 
        $(".text").after("<i>after italic text</i>")


        let width = $(".green").width();
        console.log(width);

        $(".green").toggleClass("div")


    })
})



