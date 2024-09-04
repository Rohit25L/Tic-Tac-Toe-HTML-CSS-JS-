let body =document.querySelector("body");
let boxs =document.querySelectorAll(".box");
let resetBut =document.querySelector("#reset-butt");

let turnX= true;

let winPatterns=[[0,1,2],[0,3,6],[0,4,8],
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("rohit clicked")
        // box.innerHTML="X"
        if (turnX){
            box.innerHTML="X";
            turnX=false;
        }else{
            box.innerHTML="O";
            turnX=true;
        }
        box.disabled=true;
    })
})


