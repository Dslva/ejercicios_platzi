
var monto = document.getElementById("monto_txt");
var caja = [];
caja.push(new Cajero(50,3));
caja.push(new Cajero(20,2));
caja.push(new Cajero(10,2));

var cantidad = 0;

function set_cantidad(cantidad){
    for(p in caja){
        cantidad = cantidad + caja[p].cantidad;
        return cantidad;
        
    }
}
window.onload = function(){
    set_cantidad(cantidad);
    console.log(cantidad);
}



document.getElementById("btn").onclick = function click(cantidad){
    retiro();
    
}

function opt(){
    var div = 0
    d = monto.value ;
    for(p of caja){
        if(d > 0){
            console.log(d);  
            div = Math.floor(monto/p.valor);
            if(div> p.cantidad){
                
            } 
        }else{
            alert("ingrese un monto valido");
            return false;
        }
    }
}

