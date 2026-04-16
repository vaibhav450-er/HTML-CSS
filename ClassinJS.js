class Animal{

    constructor(){
        
    }

    walk(name,height){
        this.name=name;
        this.height=height;
       console.log(this.name+" is walking and age is"+this.height );
    }

    run(){
        console.log("running");
    }
}

let a= new Animal();
a.walk("dog",1);