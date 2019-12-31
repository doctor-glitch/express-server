function hai(callbk){
  setInterval(callbk,1000);
}

function myFunc(){
  console.log("hi")
}

hai(myFunc);