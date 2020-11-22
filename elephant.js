
var measure;
var dataNumber;
var datap;
var data;
var dataSplit = [];
var itemName;
var has;
  var blocker;
var once=false;
var lazy;
var numC;
var posrow;
var poscol;
var direction;
var onceD=false;
var dataD;
var metric;
var savedV;
var theThing;
var savedD;
var directions=["H","L"];
var percentage;
var topPos;
var obwidth = parseInt(document.getElementById("object").width);
var obheight = parseInt(document.getElementById("object").height);
alert(parseInt(document.getElementById("objectC").left));
var leftPos;
var conversion = ["in","ft","m","cm","km"];
  function valueCheck(){
  if(event.target.checked){
    if(once===true){
      savedV.checked=false;
      savedV=event.target;
      event.target.checked=true;
    }else{
      for(var i;i<conversion.length;i++){
        if(event.target.name===conversion[i]){
          metric=conversion[i];
          savedV=event.target;
        }
      }
      once=true;
      savedV=event.target;
      metric=savedV.name;
    }
  }else{
  once=false;
  savedV=event.taget;
    metric=savedV.name;
  }
  }
  function directionCheck(){
  if(event.target.checked){
    if(onceD===true){
      savedD.checked=false;
      savedD=event.target;
      event.target.checked=true;
      direction=event.target.name;
    }else{
      for(var j;j<directions.length;j++){
        if(event.target.name===directions[j]){
          direction=directions[j];
          savedD=event.target;
        }
      }
      onceD=true;
      savedD=event.target;
      direction=event.target.name;
      direction=savedD.name;
    }
  }else{
  onceD=false;
  savedD=event.taget;
    direction=event.target.name;
      direction=savedD.name;
  }
  }
  function submit()
    itemName = document.getElementById("name").value;
    measure = document.getElementById("num").value;
    measure = parseInt(measure);
    if(direction==="H"){
      theThing="height.";
      data = 9;
      if(metric=="in"){
        data=measure/108;
      }else if(metric=="ft"){
        data=measure/9;
      }else if(metric=="km"){
        data=measure/0.0027432;
      }else if(metric=="cm"){
        data=measure/274.32;
      }else if(metric=="m"){
        data=measure/2.7432;
      }else{
        alert("An internal error has occured! error code: H");
      }
    }else if(direction==="L"){
      theThing="length.";
      data=21;
      if(metric=="in"){
        data=measure/252;

      }else if(metric=="ft"){
        data=measure/21;

      }else if(metric=="km"){
        data=measure/0.0064008;
      }else if(metric=="cm"){
        data=measure/640.08;
      }else if(metric=="m"){
        data=measure/6.4008;
      }else{
        alert("An internal error has occured! error code: L");
      }
    }else{
      alert("An internal error has occured! error code: G");

    }
   percentage = Math.trunc(data*100);
    if(data<1){


  }else{

  }
    document.getElementById("Item_Name").innerHTML="The wild "+itemName+" is approximately " + percentage + "% of an asian elephant's "+theThing+"";
    document.getElementById("object").style.visibility="visible";
  }
