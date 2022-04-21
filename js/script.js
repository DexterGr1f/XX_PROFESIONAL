(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function validarRegistro() {
    var password = document.getElementById("validationPass").value;
    var password2 = document.getElementById("validationPass2").value;
    if (password2 != password) {
        document.getElementById("resValPass2").innerHTML = "Las contraseñas deben ser iguales";
    }
}


$(document).ready(function() {
    $("#btnLogin").click(function() {
        var Usuario = $("#emailLogin").val();
        var Contraseña = $("#ContrasenaLogin").val();
        var res;
        if (Usuario == "" && Contraseña == "") {
            res = "Inicio de sesion valido"
            $("#resultadoLoginBien").html(res);
            $("#resultadoLoginMal").html("");
        } else {

            res = "Email/Contraseña incorrecto"
            $("#resultadoLoginMal").html(res);
            $("#resultadoLoginBien").html("");
            
        }
    });

    $("#ValidarPass").click(function() {
        var password = $("#validationPass").val();
        var password2 = $("#validationPass2").val();
        var res;
        if ((password2 == password) && (password2 != "")) {
            res = "Contraseña valida"
            $("#valPass").html(res);
            $("#valPass2").html("");
        } else {
            res = "Las contraseñas no son iguales"
            $("#valPass2").html(res);
            $("#valPass").html("");
        }
    });

});


$(document).ready(function () {
    var emailreg = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    $(".boton").click(function (){
        $(".error").remove();
        if( $(".nombre").val() == "" ){
            $(".nombre").focus().after("<span class='error'>Ingrese su nombre</span>");
            return false;
        }else if( $(".email").val() == "" || !emailreg.test($(".email").val()) ){
            $(".email").focus().after("<span class='error'>Ingrese un email correcto</span>");
            return false;
        }else if( $(".telefono").val() == ""){
            $(".telefono").focus().after("<span class='error'>Ingrese un telefono</span>");
            return false;
        }else if( $(".asunto").val() == ""){
            $(".asunto").focus().after("<span class='error'>Ingrese un asunto</span>");
            return false;
        }else if( $(".mensaje").val() == "" ){
            $(".mensaje").focus().after("<span class='error'>Ingrese un mensaje</span>");
            return false;
        }
    });
    $(".nombre, .asunto, .mensaje, .telefono").keyup(function(){
        if( $(this).val() != "" ){
            $(".error").fadeOut();
            return false;
        }
    });
    $(".email").keyup(function(){
        if( $(this).val() != "" && emailreg.test($(this).val())){
            $(".error").fadeOut();
            return false;
        }
    });
});
/*Validar Contraseña*/
$(document).ready(function () {
    $("#blogin").click(function (event) {
      var password = $("#inputPassword").val();
  
      if (password == "") {
        $("#inputPassword").focus();
        $("#error3").fadeIn();
        $("#inputPassword").css({ 'borderColor': '#fa1b1b' });
        event.preventDefault();
      } else {
        $("#error3").hide();
        $("#inputPassword").css({ 'borderColor': '#008000' });
      }
  
    });
  });
  
  
  /*Validar Correo*/
  $(document).ready(function () {
    $("#blogin").click(function (event) {
      var expr = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+).+([a-zA-Z0-9]{2,4})+$/;
      var correo = $("#inputCorreo").val();
  
      if (correo == "" || !expr.test(correo)) {
        $("#inputCorreo").focus();
        $("#error2").fadeIn();
        $("#inputCorreo").css({ 'borderColor': '#fa1b1b' });
        event.preventDefault();
      } else {
        $("#error2").hide();
        $("#inputCorreo").css({ 'borderColor': '#008000' });
      }
  
    });
  });
  