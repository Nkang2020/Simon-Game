$(document).ready(function(){
  var game = {
    
    possibilities: ["#green", "#red", "#yellow","#blue"],
    currentGame: [],
    player :[],
  };
  
  
  var intEnd=0;
  var a;
  var b;
  var count = 0;
  var simonPush = [];
  var youPush = [];
  
  var startNum = 1;
  function reset(){
    simonPush=[];
    youPush=[];
    a=[];
    b=[];
    count=0;
    intEnd=0;
  }
  
  var ring = new Audio('http://soundbible.com/grab.php?id=1630&type=mp3');
  var buzzer1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
  var buzzer2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
  var buzzer3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
  var buzzer4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
  

 $("#start").click(function(){
   
   if(startNum>=11){
     alert("You won");
     return;
   }
   
   $("#num").html(startNum);
   var newVar = 0;
 var newInterval = setInterval(function(){
   var ranNum = Math.floor(Math.random()*4)
    newVar++;
    if(newVar >= startNum){
    clearInterval(newInterval);
    }
   
   if(ranNum==0){
   $("#green").effect("highlight",{},1000);
   buzzer1.play();
     simonPush.push(0);
   }
   else if(ranNum==1){
   $("#red").effect("highlight",{},1000);
   buzzer2.play();
     simonPush.push(1);
   }
   else if(ranNum==2){
   $("#yellow").effect("highlight",{},1000);
   buzzer3.play();
     simonPush.push(2);
   }
   else if(ranNum==3){
   $("#blue").effect("highlight",{},1000);
   buzzer4.play();
     simonPush.push(3);
   }
   console.log(simonPush);
  },1000);
   

   
   //end of start
    });
  $("#green").click(function(){
   $("#green").effect("highlight",{},1000);
   buzzer1.play();
   youPush.push(0);
     console.log(youPush);
   count++;
   if(count===startNum){
     a = simonPush.toString();
     b = youPush.toString()
     if(a===b){
       
       startNum++;
       
       ring.play();
       
       reset();
       setTimeout(function(){
       $("#start").trigger("click");
         },3000);
     }
     else{
       reset();
       alert("nope");
       
     }
   }
  
 });
  $("#red").click(function(){
    $("#red").effect("highlight",{},1000);
    buzzer2.play();
    youPush.push(1);
    console.log(youPush);
    count++
    if(count===startNum){
     a = simonPush.toString();
     b = youPush.toString()
     if(a===b){
       
       startNum++;
       
       ring.play();
       
       reset();
       setTimeout(function(){
       $("#start").trigger("click");
         },3000);
     }
     else{
       reset();
       alert("nope");
       
     }
   }
  
 });
   $("#yellow").click(function(){
     $("#yellow").effect("highlight",{},1000);
     buzzer3.play();
     youPush.push(2);
     console.log(youPush);
     count++
     if(count===startNum){
     a = simonPush.toString();
     b = youPush.toString()
     if(a===b){
       
       startNum++;
       
       ring.play();
      
       reset();
       setTimeout(function(){
       $("#start").trigger("click");
         },3000);
     }
     else{
       reset();
       alert("nope");
       
     }
   }
    
 });
   $("#blue").click(function(){
     $("#blue").effect("highlight",{},1000);
     buzzer4.play();
     youPush.push(3);
     console.log(youPush);
     count++
     if(count===startNum){
     a = simonPush.toString();
     b = youPush.toString()
     if(a===b){
       
       startNum++;
       
       ring.play();
       
       reset();
       setTimeout(function(){
       $("#start").trigger("click");
         },3000);
     }
     else{
       reset();
       alert("nope");
       
     }
   }
   
 });
  //end
   });