const num1=Math.ceil(Math.random() * 10);
const num2=Math.ceil(Math.random() * 10);

const questionE1=document.getElementById("question");

const formE1=document.getElementById("form");

const inputE1=document.
getElementById("input");

let score=0;

questionE1.innerText=`What is  ${num1} multiply by ${num2}?`;

const correctAns= num1*num2;

formE1.addEventListener("submit", () => {
const userAns = +inputE1.value;
if(userAns===correctAns)
{
    score++;
    updateLocalStorage()
}
else{
    score--;
    updateLocalStorage()
}
});

function updateLocalStorage()
{
    localStorage.set("score",JSON.stringify(score));
}


