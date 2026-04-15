let newbtn=document.createElement("button");
newbtn.innerHTML="click me!";
console.log(newbtn);

let h1=document.querySelector("h1");
h1.after(newbtn);

let r=document.querySelector("button");
r.remove();  