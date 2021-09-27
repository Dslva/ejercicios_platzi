var z = random(10,20); 
var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

var fondo = {
    url:"./img/tile.png",
    cargaOk:false
};

var vaca = {
    url: "./img/vaca.png",
    cargaOK: false
};
var pollo = {
    url: "./img/pollo.png",
    cargaOK: false
};
var cerdo = {
    url: "./img/cerdo.png",
    cargaOK: false
};



fondo.imagen= new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

//cargar imagen antes de dibujar
function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
}
function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOK=true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOK=true;
    dibujar();
}


//dibujar
function dibujar(){
    if(fondo.cargaOk){
        papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargaOK){
        for (var i = 0;i<3;i++){
            var x = random(0,420);
            var y = random(0,420);
            papel.drawImage(vaca.imagen,x,y);
        }            
        
    }
    if(pollo.cargaOK){
        papel.drawImage(pollo.imagen,300,100);
    }
    if(cerdo.cargaOK){
        papel.drawImage(cerdo.imagen,250,400);
    }
}


function random (min, max){
    var r ; 
    r = Math.floor(Math.random()*(max - min + 1)) + min;
    return r;

}