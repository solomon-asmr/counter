//let myDiv = document.getElementById('app');

// Create a new element (e.g., a paragraph)

//let arr=[];
// Add content to the new paragraph
/*for(let i=1;i<=50;i++){  
  arr.push(document.createElement("p"));

}


// Append the new paragraph to the div
for(let j=0;j<=50;j++){
  myDiv.appendChild(arr[j].innerHTML("1"));
}*/
let five=document.getElementById('five');
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');
let counter = 5;

function countup(){    
    if(counter < 10){
      counter++;
      five.textContent = counter;
  }
  else{
    alert("You can't increment any more!")
  }
}
function countDoun(){    
    if(counter>5){
      counter--;
      five.textContent = counter;
    }
    else{
      alert("You can't Decrement any more!")
    }
}
plus.onclick=countup;
countup();
minus.onclick=countDoun;
countDoun();
