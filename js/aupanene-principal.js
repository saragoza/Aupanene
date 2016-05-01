 $(document).ready(function(){
              //carga la animación de inicio al acceder al sitio
              $("main").load("html/inicio.html");
              //carga la pag correspondiente en función de la opción de menú seleccionada
              $("#galeria").click(function(evento){
                  evento.preventDefault();
                  $("main").load("html/galeria.html");
              });
             $("#informacion").click(function(evento){
                  evento.preventDefault();
                  $("main").load("html/informacion.html");
              });
             $("#contacto").click(function(evento){
                  evento.preventDefault();
                  $("main").load("html/contacto.html");
              });
             $("#agenda").click(function(evento){
                  evento.preventDefault();
                  $("main").load("html/agenda.html");
              });
              //enlace al documento donde se detallan los recursos técnicos
             $("#recursos").click(function(evento){
                  evento.preventDefault();

              });
          });
