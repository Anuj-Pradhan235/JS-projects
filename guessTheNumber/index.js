 //random number generate
 const min=1;
 const max=100;
 const randomNum=parseInt(Math.floor(Math.random()*(max-min+1))+min);
 const submit=document.querySelector("#subt");
 const guessValue=document.querySelector("#guessField");
 const guesses=document.querySelector(".guesses");
 const remGuesses=document.querySelector(".lastResult");
 const restart=document.querySelector("#restart");
 const message=document.querySelector(".message");
 let attempts=10;
 let flag=true;
 let prevGuess=[];
 const validateGuess=(guess)=>{
         if((isNaN(guess))||(guess<=0)||(guess>100))return false;
         else return true;
 }
 submit.addEventListener("click",(event)=>{
     event.preventDefault();
     const guess=parseInt(guessValue.value);
     if(flag){
         if(validateGuess(guess)){
             if(guess===randomNum){
                 message.innerHTML=`You Won!`;
                 submit.style.display="none";
                 restart.style.display="visible";
             }
             else if(guess<randomNum){
                 message.innerHTML="Enter a greater value";
                 
             }
             else{
                 message.innerHTML="Enter a smaller value";
             }
             prevGuess.push(guess);
             guesses.innerHTML=prevGuess;
             attempts=attempts-1;
             if(attempts==0){
                 message.innerHTML=`You Loss! Random Number : ${randomNum}`;
                 submit.style.display="none";
                 restart.style.display="inline-block";
             }
             remGuesses.innerHTML=`${attempts}`;
             
         }else{
             message.innerHTML=`Please enter a valid number ${guess}`;
         }

     }
     else{
         restart.style.display="inline-block";
     }
 })
 restart.addEventListener("click",(event)=>{
     prevGuess.restart();
     event.preventDefault();
     flag=true;
     attempts=10;
     remGuesses.innerHTML=attempts;
     message.innerHTML="All the best!";
     restart.style.display="none";
     submit.style.display="inline-block";
 }) 