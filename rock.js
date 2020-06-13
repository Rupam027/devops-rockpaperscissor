var playerchoice=""; 
var compchoice ="" ;
var choices = ["s" , "p" ,"r"];
var pscore=0 ,compscore=0 ;
var round = 1 ;
var tround;

function initialize(){
document.getElementById("you").innerHTML = localStorage["name"] ;
tround = parseInt(localStorage["round"]);
}
function computerchoice()
{
   var pos= parseInt(Math.random()*3) ;
   return choices[pos];

}
function fin(){
 
  
   if(pscore > compscore)
   alert(localStorage["name"] + " is the winner") ; 
   else if(compscore > pscore)
   alert("COMPUTER wins") ; 
   else
   alert("tie") ;
   
   window.location="rock.htm";

}

function calculate(p , c)
{
   if(p == c)
   return "t" ;
   else{
   if(p == "s")
   {
      if(c == "r")
      return "c" ; 
      else 
      return "p" ;
      
   }
   else if(p == "p")
   {
      if(c == "s")
      return "c" ; 
      else 
      return "p" ;
      
   }
   else if(p == "r")
   {
      if(c == "p")
      return "c" ; 
      else 
      return "p" ;
      
   }
   
   
   }

} 

function disablebuttons(){
document.getElementById("scissor").disabled=true; 
document.getElementById("paper").disabled=true; 
document.getElementById("stone").disabled=true; 


}

function enablebuttons(){
document.getElementById("scissor").disabled=false; 
document.getElementById("paper").disabled=false; 
document.getElementById("stone").disabled=false; 


}

function sleep(ms){
return new Promise(resolve => setTimeout(resolve,ms));
}

async function scissor()
{
   document.getElementById("pchoice").src="scissors.jpg" ;
   playerchoice="s" ; 
   disablebuttons();
   var choice = computerchoice();
   document.getElementById("computer").style.backgroundColor="yellow" ;
   document.getElementById("you").style.backgroundColor="white" ;
   
   
  
   await sleep(3000); 
   if(choice == "s") 
   document.getElementById("compchoice").src="scissors.jpg" ;
   else if(choice == "p")
   document.getElementById("compchoice").src="paper.jpg" ;
   else 
   document.getElementById("compchoice").src="stone.jpg" ;
   
   winner = calculate(playerchoice , choice);
   await sleep(2000);
   if(winner == "p")
   {
    document.getElementById("result").innerHTML= "PLAYER WINS" ;
    pscore += 1 ; 
   }
   
   else if(winner == "c")
   {
   document.getElementById("result").innerHTML= "COMPUTER WINS" ;
   compscore +=1 ;
   }
   else{
   document.getElementById("result").innerHTML= "TIE" ;
   }
   document.getElementById("pscore").innerHTML= pscore ; 
   document.getElementById("compscore").innerHTML= compscore ; 
   
   round++ ;
   
   
   await sleep(2000);
   document.getElementById("result").innerHTML="" ;
   enablebuttons();
   document.getElementById("you").style.backgroundColor="yellow" ;
   document.getElementById("computer").style.backgroundColor="white" ;
   document.getElementById("compchoice").src="blank.jpg" ;
   document.getElementById("pchoice").src="blank.jpg" ;
   if(round ==  (tround + 1))
   fin();
   document.getElementById("rnumber").innerHTML= round ;
   
   
 }

async function paper()
{
   document.getElementById("pchoice").src="paper.jpg" ;
   playerchoice="p" ; 
   disablebuttons();
   document.getElementById("computer").style.backgroundColor="yellow" ;
   document.getElementById("you").style.backgroundColor="white" ;
   
   var choice = computerchoice(); 
   await sleep(2000); 
   if(choice == "s") 
   document.getElementById("compchoice").src="scissors.jpg" ;
   else if(choice == "p")
   document.getElementById("compchoice").src="paper.jpg" ;
   else 
   document.getElementById("compchoice").src="stone.jpg" ;
   
   winner = calculate(playerchoice , choice); 
   await sleep(2000);
   if(winner == "p")
   {
    document.getElementById("result").innerHTML= "PLAYER WINS" ;
    pscore += 1 ; 
   }
   
   else if(winner == "c")
   {
   document.getElementById("result").innerHTML= "COMPUTER WINS" ;
   compscore +=1 ;
   }
   else{
   document.getElementById("result").innerHTML= "TIE" ;
   }
   document.getElementById("pscore").innerHTML= pscore ; 
   document.getElementById("compscore").innerHTML= compscore ; 
  
   round++ ;
   
   await sleep(2000);
   document.getElementById("result").innerHTML="" ;
   enablebuttons();
   document.getElementById("you").style.backgroundColor="yellow" ;
   document.getElementById("computer").style.backgroundColor="white" ;
   document.getElementById("compchoice").src="blank.jpg" ;
   document.getElementById("pchoice").src="blank.jpg" ;
   
   if(round ==  (tround + 1))
   fin();
   document.getElementById("rnumber").innerHTML= round ;
   
   
}

async function stone()
{
   document.getElementById("pchoice").src="stone.jpg" ;
   playerchoice="r" ; 
   disablebuttons();
   document.getElementById("computer").style.backgroundColor="yellow" ;
   document.getElementById("you").style.backgroundColor="white" ;
   
   var choice = computerchoice(); 
   await sleep(2000); 
   if(choice == "s") 
   document.getElementById("compchoice").src="scissors.jpg" ;
   else if(choice == "p")
   document.getElementById("compchoice").src="paper.jpg" ;
   else 
   document.getElementById("compchoice").src="stone.jpg" ;
   
   winner = calculate(playerchoice , choice); 
   await sleep(2000);
   if(winner == "p")
   {
    document.getElementById("result").innerHTML= "PLAYER WINS" ;
    pscore += 1 ; 
   }
   
   else if(winner == "c")
   {
   document.getElementById("result").innerHTML= "COMPUTER WINS" ;
   compscore +=1 ;
   }
   else{
   document.getElementById("result").innerHTML= "TIE" ;
   }
   
   document.getElementById("pscore").innerHTML= pscore ; 
   document.getElementById("compscore").innerHTML= compscore ; 
   
   round++ ;
   await sleep(2000);
   document.getElementById("result").innerHTML="" ;
   enablebuttons();
   document.getElementById("you").style.backgroundColor="yellow" ;
   document.getElementById("computer").style.backgroundColor="white" ;
   document.getElementById("compchoice").src="blank.jpg" ;
   document.getElementById("pchoice").src="blank.jpg" ;
   if(round ==  (tround + 1))
   fin();
   document.getElementById("rnumber").innerHTML= round ;
   

}
