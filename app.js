let box=document.querySelectorAll(".box");

let trunO=true;  
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


box.forEach(b => {
  b.addEventListener("click", ()=>{
  if(trunO){
      b.innerText="O";
      trunO=false;
  }else{
          b.innerText="X";
      trunO=true;
  }
  
   b.disabled=true;

   checkWinner();

  });
    
});


const checkWinner=()=>{
    for(let pattern of winPatterns){
       
        
       let posi1=box[pattern[0]].innerText;
       let posi2=box[pattern[1]].innerText;   // each pattern on box (box array means elements in box class 0 to 9 index wise so pattern are filled in as index to check wipattern)
       let posi3= box[pattern[2]].innerText;  // so basically on each winning patterns postion find outed herer like which box or button and inner text for next checking

       if(posi1 !="" && posi2 !="" && posi3 !=""){
        if(posi1 === posi2 && posi2 === posi3){
            console.log("winnerr");
        }
       }
        
    }
}