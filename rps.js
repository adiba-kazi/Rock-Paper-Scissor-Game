let userScore=0;
let compScore=0;
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#m");


const generateCompChoice=()=>{
    //rock, paper, Scisor
    const options=["r", "p", "s"];
    const res=Math.floor(Math.random() *3);
    return options[res];
}

const draw=()=>{
    console.log("Game draw.")
    msg.innerText="Draw!!"
    msg.style.backgroundColor="##081b31"
}


const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        user.innerText=userScore;
        console.log("you won!");
        msg.innerText="You Won & Computer lose."
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        comp.innerText=compScore;
        console.log("You Lose!");
        msg.style.backgroundColor="red";
        msg.innerText="You Lose & Computer Won."
    }
}
const playGame=(userChoice)=>{
    console.log("uer choice= ",userChoice);
    //generate computer choice
    let compchoice=generateCompChoice();
    console.log("computer choice = ",compchoice);

    if(userChoice==compchoice){
        //draw
        draw();
    }
    else{
        if(userChoice=="r"){
            userWin= compchoice=="p" ?false :true;
        }
        else if(userChoice=="p"){
            userWin= compchoice="s"? false :true;
        }
        else{
            userWin= compchoice="r" ? false :true;
        }
        showWinner(userWin);
    }
}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        //console.log(choices,userChoice);
        playGame(userChoice);
    });
});

