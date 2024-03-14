// Grab id
let result=document.getElementById("result");
let calculate=document.getElementById("calculate");
function calculatum(){
 
function getvalue(){
let box=document.getElementById("input-box");
let box1=document.getElementById("input-box1");
let value=box.value;
let value1=box1.value;
console.log(value);
console.log(value1);
try{
  if(value==="" || value1==="")
   throw("Enter Name ! ");
   else
     console.log(calcifunction());
}
catch(err){
  alert(err);
}
}

let flames=["Friend","Love","Affection","Marriage","Enemy","Sister"];

if(getvalue()==value && getvalue==value1){
  console.log(calcifunction());
}
else{
  alert("ERROR 404");
}
function calcifunction(){
   a=flames[Math.floor(Math.random()*6)];
  if(a=="Friend"){
    result.innerHTML= "Result : "+a;
  }
   else if(a=="Love"){
    result.innerHTML="Result : "+a;
  }
   else if(a=="Affection"){
    result.innerHTML="Result : "+a;
  }
   else if(a=="Marriage"){
    result.innerHTML="Result : "+a;
  }
   else if(a=="Enemy"){
    result.innerHTML="Result : "+a;
  }
   else if(a=="Sister"){
    result.innerHTML="Result : "+a;
  }
  setInterval(function() {
  location.reload();
}, 5000);
}
}