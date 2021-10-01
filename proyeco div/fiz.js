var numeros = 100;
var div = false;
for(var i = 0; i <= numeros; i++){
    div = false;
    if(dividir(i,3) == 0){
        document.write("fizz");
        div = true;
    }
    if(dividir(i,5) == 0){
        document.write("buzz");
        div = true;
    }
    if(!div){
        document.write(i);
        
    }
    document.write("<br/>");
}

function dividir(count, numero){
    var x = count;
    var y = numero;
    var result
    if(y == 3){
        result = x % y;
        return result;
    }
    if(y == 5){
        result = x % y;
        return result;
    }
}