$(document).ready(function(){
    $(".thumbnail").click(function(evento){
        evento.preventDefault();
        $("#imagen-ampliada img").attr("src", $(this).children("img").attr("src"));
        });
});
