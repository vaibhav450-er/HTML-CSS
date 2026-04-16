let btn=document.querySelector("#btn");
let modebtn="light";
btn.addEventListener("click",()=>{
    if(modebtn==="light"){
        modebtn="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }
    else{
        modebtn="light";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";

    }
})

const student={
    name:"vaibhav",
    age:23,
    printage:function(){
        console.log("age= ",this.age);
    }
}
student.printage();