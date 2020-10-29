
function validarelformulario(){
    valorpass = document.getElementById("password").value;
    valorcolor = document.getElementById("color").value;
    var regexpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){12,100}$/;
    var regexpcolor = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/g;
    
    var reusltadopass = regexpass.test(valorpass);       

    var resltadocolor = regexpcolor.exec(valorcolor).slice(1);
     
    alert("Color:"+reusltadopass+ "\nHue: " + resltadocolor[0] + "\nSaturation: " + resltadocolor[1] + "\nValue: " + resltadocolor[2]);      
    
    return false;
}



