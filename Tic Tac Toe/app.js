let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let win=document.querySelector(".win");
let turn0=true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


boxes.forEach((box)=>{
    
        box.addEventListener("click",()=>{
            if(turn0){
            box.innerText='O'
            turn0=false;          
            }
            else{
                box.innerText='X'
                turn0=true;
            }
            box.disabled = true;

            checkWinner();
        });
        reset.addEventListener("click",()=>{
                
                resetGame();
                
            
        });
           
});

const resetGame=()=>{
    boxes.forEach((box)=>{
        console.log("Empty");
        box.innerText="";
        box.disabled=false;
        
    });
    win.innerText="Winner :";
    turn0=true;
}

const checkWinner = () => {
    let filledBox=true;
    for(let pattern of winPattern){
    

        
        let pos0=boxes[pattern[0]].innerText;
        let pos1=boxes[pattern[1]].innerText;
        let pos2=boxes[pattern[2]].innerText;

        
    
        if(pos0!=""&&pos1!=""&&pos2!=""){
            if(pos0==pos1&&pos1==pos2){
                if(pos0 =='O')
                win.innerText="Winner : Player O";
                else
                win.innerText="Winner : Player X";

                boxes.forEach((box)=>{
                    box.disabled=true;
                });
            
            }
        }


       

    }
    boxes.forEach((box)=>{
        if(box.innerText=="")
            filledBox= false;

    });
    if(filledBox){
        win.innerText="It is a draw please reset the game!!"
    }
    // let pattern; 
    // let pos1=boxes[pattern[0]].innerText;
    // let pos2=boxes[pattern[1]].innerText;
    // let pos3=boxes[pattern[2]].innerText;

    // if(pos0!=""&&pos1!=""&&pos2!=""){
    //     if(pos0==pos1&&pos1==pos2){
    //         console.log("Winner is player",pos1);
    //     }
    // }
}





