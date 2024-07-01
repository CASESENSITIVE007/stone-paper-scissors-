


let computer=()=>{
    let computer_turn="";
    let random_num= Math.floor(Math.random()*3);
    if (random_num===0){
        computer_turn="rock";
    
    }
    else if(random_num==1){
        computer_turn="paper";
    }
    else{
     computer_turn="scissor";
    }
    return computer_turn;
    // console.log("computer turn",computer_turn)
}






let rock= document.querySelector(".rock");
rock.addEventListener("click",()=>{
    // console.log("rock clicked")
    user="rock"
    // computer()
    game_logic()
})
let paper= document.querySelector(".paper");
paper.addEventListener("click",()=>{
    // console.log("paper clicked")
    user="paper"
    // computer()
    game_logic()
})
let scissor= document.querySelector(".scissor");
scissor.addEventListener("click",()=>{
    // console.log("scissor clicked")
    user="scissor"
    // computer()
    game_logic()
})





// let opponent=computer();
// for computer selection process 
// console.log(Math.floor(Math.random()*4))
let score_user=0;
let score_opponent=0;
let game_logic=()=>{
      console.log("user:",user)
    const opponent=computer();
    console.log("computer:",opponent)
    
  
    let winner="";
  
     if(user==="rock" && opponent==="paper"){
        winner="YOU";
        score_opponent+=1;
     }
     else if(user==="rock" && opponent==="scissor"){
        winner="YOU";
        score_user+=1;
     }
     else if(user==="paper" && opponent==="rock"){
        winner="YOU";
        score_user+=1;
     }
     else if(user==="paper" && opponent==="scissor"){
        winner="Opponent";
        score_opponent+=1;
     }
     else if(user==="scissor" && opponent==="rock"){
        winner="Opponent";
        score_opponent+=1;
     }
     else if(user==="scissor" && opponent==="paper"){
        winner="YOU";
        score_user+=1;
    
     }
     else{
        winner="No-one";
     }

     document.querySelector(".user_score").innerText=`User Score ${score_user}`
     document.querySelector(".comp_score").innerText=`Computer Score ${score_opponent}`
     document.querySelector(".info").innerText=`Computer:${opponent} \n YOU:${user} \n The winner is ${winner}`
}
