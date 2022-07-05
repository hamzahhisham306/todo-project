let name = prompt("please enter his/her name?");
let gender = prompt("please enter his/her gender (male or female)?");
let age = prompt("please enter your age");

checkAge(age);

let message=confirm("Do you want to skip the welcome message?");

checkMessage(message);

askQuestions();

function askQuestions(){
 let questions=["Do you like play football?", "Can you swim?", "Do you like play video games?"];
 let arrayAnswers=[];
 for(let i=0;i<questions.length;i++){
    let ques=prompt(questions[i]);
    if(ques===""){
       arrayAnswers.push("invalid");
    }
    else if(ques=="yes" || ques=="Yes"){
    arrayAnswers.push("Yes");
   }
    else if(ques=="no" || ques=="No"){
    arrayAnswers.push("No");
   }
 }
 console.log(arrayAnswers);
}


function checkMessage(message){
    if(message){
        console.log("Skip")
      }
      else{
          if(gender=="male"){
              alert(`Welcome Mr.${name}`);
          }
          else if(gender=="female"){
              alert(`Welcome Ms.${name}`);
          }
          else{
              alert("welcome here");
          }
      }
}

function checkAge(age){
    if(age<=0){
        alert("your age less than or equal 0");
    }
}