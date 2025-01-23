function computerChoice(){
    let choice = Math.floor(Math.random()* 3 + 1);
    if(choice === 1){
        return "Computer chose Rock";
    }else if(choice === 2){
        return "Computer chose paper";
    }else if(choice === 3){
        return "Computer chose scissors";
    }else{
        console.log("ERROR");
    }
}

function getHumanChoice(choice = "Please input something"){
    choice = prompt("Rock, paper, scissors?");
    return choice;
}

// console.log(computerChoice());
console.log(getHumanChoice());