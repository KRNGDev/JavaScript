let enemigo1={
    sprite:"imagen.png"
    ,x:0,
    y:0,
    estado:"formacion"
}

function Enemigo(sprite, x, y, estado){
    this.sprite=sprite;
    this.x=x;
    this.y=y;
    this.estado=estado;


}


let enemigo2 =new Enemigo("imagen.png",1,0,"enformacion");

class SuperEnemigo{
    constructor (sprite, x, y){
        this.sprite=sprite;
        this.x=x;
        this.y=y;
        this.estado="neformacion";
    

    }
}