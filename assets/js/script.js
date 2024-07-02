
// Codigo Jquery
$(document).ready(function() {
  
//Activando el tooltip de enviar en section contactame
    $('#tooltip-bs').tooltip();

//alerta cuando se envie datos de contacto
    $('#tooltip-bs').click(function(){

        alert('Estamos agradecidos de que quieras conectar con nosotros <3');
        
    });

//smooth scroll---
var scrollLink = $('.scroll');

scrollLink.click(function(e){
e.preventDefault();
$('body, html').animate({
    scrollTop: $(this.hash).offset().top

},1000 )

})

});
