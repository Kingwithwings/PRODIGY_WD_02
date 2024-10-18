let boxes = document.querySelectorAll(".box");
let turn0 = true;
let reset = document.querySelector(".reset");
let  i = 0;



boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0 == true){
            
            box.innerText = "X";
            
            turn0 = false;
        }else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;
        draw();
        checkWinner();
       
        
       
    })
})
let winner = document.querySelector(".winner");

const winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]

]


 
        
    
       let draw = ()=>{
        i++;
        console.log(i);
       }
         

        






const checkWinner = ()=> {
    
    for(pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val ===pos2Val && pos2Val === pos3Val){
                     winner.innerText = "Winner  " + pos1Val;
                     disbtn();
            }else  if( i === 9 ){
                winner.innerText = "Draw";
                disbtn();
            }
                
            
        }
    }
}

// const draw = ()=>{
   
// }



const disbtn = () =>{
    for(box of boxes){
        box.disabled = true;
    }
    reset.innerText = "New Game";
}

const enBtn = () =>{
    for(box of boxes){
        box.disabled = false;
    }
}

const valBtn = ()=>{
    for(box of boxes){
        box.innerText = "";
    }
}

const resetBtn = () =>{
   turn0 = true;
   enBtn();
   valBtn();
   winner.innerText = "";
   reset.innerText = "Reset Game";
   i = 0;

}



reset.addEventListener("click",resetBtn);