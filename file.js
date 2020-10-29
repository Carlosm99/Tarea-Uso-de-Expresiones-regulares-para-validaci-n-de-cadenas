
function validarelformulario(){
    valorpass = document.getElementById("password").value;
    valorcolor = document.getElementById("color").value;
    
    var regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){12,100}$/;
    var regexpcolor = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
    
    var reusltadopass = regexpass.exec(valorpass);       

    var resltadocolor = regexpcolor.exec(valorcolor).slice(1);
     
    alert("Contraseña :"+reusltadopass+ "\nMatiz: " + resltadocolor[0] + "\nSaturación: " + resltadocolor[1] + "\nValor: " + resltadocolor[2]);      
    
    return false;

    
}




