var img = [];
img["cauchin"] = "./img/vaca.png";
img["pokacho"] = "./img/pollo.png";
img["tocinauro"] = "./img/cerdo.png";



var coleccion = [];
coleccion.push(new pakiman("cauchin", 100, 30));
coleccion.push(new pakiman("pokacho", 80, 50));
coleccion.push(new pakiman("tocinauro", 120, 40));
//of miestra el objeto y in muestra el indice
//for(p of coleccion)
for(p in coleccion){
    coleccion[p].mostrar();
}
