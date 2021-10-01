
class pakiman {
    constructor(n,v,a,){
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;
        this.tipo = "tierra";

        this.imagen.src = img[this.nombre];
    }
    habla(){
        alert(this.nombre);
    }
    mostrar(){
        
        document.body.appendChild(this.imagen);
        document.write("<p>");
        document.write("Nombre: "+this.nombre+"<br/>");
        document.write("Vida: "+this.vida+"<br/>");
        document.write("Ataque: "+this.ataque+"<br/>");
        document.write("</p>")
        
    }
}