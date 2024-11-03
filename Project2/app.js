let playeScore=0;
let ComputerScore=0;
let i=0;
let j=0;
let choices=document.querySelectorAll(".choice");
let message=document.querySelector(".box");
let scoreP=document.querySelector("#player");
let ScoreC=document.querySelector("#computer")
let Reset=document.querySelector(".reset");

function computerChoice(){
    const choices=["rock","paper","scissor"];
    let random=Math.floor(Math.random()*3);

    return choices[random];
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        let computer=computerChoice();
        console.log(computer);

        let userChoice=choice.id;
        console.log(userChoice);
        
        Winner(userChoice,computer);

        
    });
});

Reset.addEventListener("click",resetGame);

function resetGame(){
    
        console.log("reset clicked");
        playeScore=0;
        ComputerScore=0;i=0;j=0;
        message.innerText="Pick your move.";
        ScoreC.innerText=ComputerScore;
        scoreP.innerText=playeScore;
        Reset.style.visibility="hidden";

    };


function Winner(userChoice,computer){
    if(i<5&&j<5){
        if(userChoice==computer){
            message.innerText="It is a Draw";
      

        }else if(userChoice=="rock"&&computer=="paper"){
            message.innerText="You lose, Paper beats rock!!";
            ComputerScore++;
            j++;

        }else if(userChoice=="rock"&&computer=="scissor"){
            message.innerText="You win, rock beats scissor!!";
            playeScore++;i++;

        }else if(userChoice=="paper"&&computer=="rock"){
            message.innerText="You win, Paper beats rock!!";
            playeScore++;i++;

        }else if(userChoice=="paper"&&computer=="scissor"){
            message.innerText="You lose, scissor beats paper!!";
            ComputerScore++;j++;

        }else if(userChoice=="scissor"&&computer=="rock"){
            message.innerText="You lose, rock beats scissor!!";
            ComputerScore++;j++;

        }else if(userChoice=="scissor"&&computer=="paper"){
            message.innerText="You win, Scissor beats paper!!";
            playeScore++;i++;
        }
        ScoreC.innerText=ComputerScore;
        scoreP.innerText=playeScore;
        console.log('i=', i,'j=',j);
         
        if(i>=5||j>=5){
            if(i>j){
                message.innerText="Player won, Reset Game!!";
            }
            else{
                message.innerText="Computer won, Reset Game!!";
            }
           
            Reset.style.visibility="visible";
        }
        
    }  
}
