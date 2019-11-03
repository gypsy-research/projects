function myFunction() {
  document.getElementById('jsdemo').innerHTML = Date();
  document.getElementById('demo').innerHTML = "Hallo Khanh";

  

 }

 function idiot()
 {

  alert("I am an idiot");

 }


var showBild1 = true;
var showBild2 = false;


 function switchImages()
 {
  if(showBild1 == true)
  {
    document.getElementById('myImage').src="b2.png";
    showBild1 = false;
    
  }
  else
  {
    if(showBild2 == false)
    {
    document.getElementById('myImage').src="b1.jpg";
    showBild1 = true;
    }
  }
 }


var bildName = "b1.jpg";

 function switchImages2()
 {
  if(bildName == "b1.jpg")
    bildName = "b2.png";
  else
    bildName = "b1.jpg"

  document.getElementById('myImage').src = bildName;
 }


 var IamRed = true;

 function changeStyle()
 {
   if(IamRed == true)
   {  
    document.getElementById("test123").style.display = "none";
    IamRed = false;
   }
    else
    {
      document.getElementById("test123").style.color = "red";
      document.getElementById("test123").style.display = "block";
      IamRed = true;
    }
 }