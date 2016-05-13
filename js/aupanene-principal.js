 $(document).ready(function(){
               function animar(){
                   $("#marco-inicio-1").fadeTo(150, 0.4, function(){
                    $("#marco-inicio-2").fadeTo(150, 0.4, function(){
                        $("#marco-inicio-3").fadeTo(150, 0.4, function(){
                            $("#marco-inicio-4").fadeTo(150, 0.4, function(){
                                $("#marco-inicio-5").fadeTo(150, 0.4, function(){
                                    $("#marco-inicio-6").fadeTo(150, 0.4, function(){
                                        $("#marco-inicio-7").fadeTo(150, 0.4, function(){
                                            $("#marco-inicio-8").fadeTo(150, 0.4, function(){
                                                $("#marco-inicio-9").fadeTo(150, 0.4, function(){
                                                    $("#marco-inicio-10").fadeTo(150, 0.4, function(){
                                                        $("#marco-inicio-11").fadeTo(150, 0.4, function(){
                                                            $("#marco-inicio-12").fadeTo(150, 0.4);
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
                $("#marco-inicio-24").fadeTo(150, 0.4, function(){
                    $("#marco-inicio-23").fadeTo(150, 0.4, function(){
                        $("#marco-inicio-22").fadeTo(150, 0.4, function(){
                            $("#marco-inicio-21").fadeTo(150, 0.4, function(){
                                $("#marco-inicio-20").fadeTo(150, 0.4, function(){
                                    $("#marco-inicio-19").fadeTo(150, 0.4, function(){
                                        $("#marco-inicio-18").fadeTo(150, 0.4, function(){
                                            $("#marco-inicio-17").fadeTo(150, 0.4, function(){
                                                $("#marco-inicio-16").fadeTo(150, 0.4, function(){
                                                    $("#marco-inicio-15").fadeTo(150, 0.4, function(){
                                                        $("#marco-inicio-14").fadeTo(150, 0.4, function(){
                                                            $("#marco-inicio-13").fadeTo(150, 0.4, function(){
                                                                $("#logo-inicio").fadeTo(2500, 1);
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
               }
              //carga la animación de bienvenida al acceder al sitio
              $("main").load("html/inicio.html", function(){
                  animar();
              });
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
                 $("main").load("doc/recursos-tecnicos.html");
              });
            //carga la animación de bienvenida al clicar en el logo
            $(".navbar-brand").click(function(evento){
                evento.preventDefault();
                $("main").load("html/inicio.html", function(){
                  animar();
              });

            });
	    //previene el comportamiento por defecto al hacer click en las imágenes
		$(".thumbnail").click(function(evento){
			evento.preventDefault();
		});

          });
