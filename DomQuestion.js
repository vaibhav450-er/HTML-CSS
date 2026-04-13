let btn=document.createElement("button");
btn.innerText="Click Me!";
btn.style.backgroundColor='red';
btn.style.color='white';
console.log(btn);
let h1=document.querySelector("h1");
h1.prepend(btn);