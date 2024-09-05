let body =document.querySelector("body");
let boxs =document.querySelectorAll(".box")
let resetBut =document.querySelector("#reset-butt");
let winDiv =document.querySelector("#winDiv")
let newGame =document.querySelector(".newGame")
let main =document.querySelector("#main")
let h4win = document.querySelector("#wi4")
let h1=document.querySelector("#winn")



let turnX= true;

let winPatterns=[[0,1,2],[0,3,6],[0,4,8],
[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

let count =0;
let col= "red";

const colorXO=()=>{
    if (col=="red"){
        boxs.classList.add("boxXcolor")
    }
    else{
            boxs.classList.remove("boxXcolor")
            boxs.classList.add("boxOcolor")
    }
}

boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("rohit clicked")
        // box.innerHTML="X"
        if (turnX){
            box.innerHTML="X";
            box.classList.add("boxXcolor")
            turnX=false;
            count++;
        }else{
            box.innerHTML="O";
            turnX=true;
            count++;
            box.classList.remove("boxXcolor")
            box.classList.add("boxOcolor")
  
        }
        box.disabled=true;
        checkPatterns(box);
        console.log(count);
        // colorXO();
        if (count==9){
            drawGame()
        }
    }) 
})
const winnerMsg =(winner)=>{
    h4win.innerHTML =winner +"\tplayer is the"
    winDiv.classList.remove("hide");
    main.classList.add("hide");
}
const checkPatterns=()=>{
    for(check of winPatterns){
        console.log(check[0],check[1],check[2])
        console.log(boxs[check[0]].innerText,boxs[check[1]].innerText,boxs[check[2]].innerText)
        let w1 =boxs[check[0]].innerText;
        let w2 =boxs[check[1]].innerText;
        let w3 =boxs[check[2]].innerText;
        if(w1 !=""&& w2 !="" && w3 != ""){
            if(w1==w2 && w2==w3){
                // console.log("winner",w1)
                winnerMsg(w1);

            }
        }
    }
}
let drawGame =()=>{
            turnX=true;
            count=0;
            for (box of boxs){
                box.innerHTML=" ";
                box.disabled=false;

        }
    }

let resetGame =()=>{
    turnX=true;
    count=0;
    for (box of boxs){
    box.innerHTML=" ";
    box.disabled=false;}
    main.classList.remove("hide");
    winDiv.classList.add("hide");

}
resetBut.addEventListener("click",resetGame)
newGame.addEventListener("click",resetGame)




