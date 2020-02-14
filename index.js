document.querySelector("button").addEventListener("click", handleclick);

function handleclick() {
  //Generate random image for first dice
  let randomNum1 = Math.floor(Math.random() * 6) + 1;
  let randomImg = "dice" + randomNum1 + ".png";
  let randomImgSrc = " images/" + randomImg;
  let image = document.querySelectorAll("img")[0];
  image.setAttribute("src", randomImgSrc);

  //Generate random image for second dice
  let randomNum2 = Math.floor(Math.random() * 6) + 1;
  let randomImg2 = "dice" + randomNum2 + ".png";
  let randomImgSrc2 = " images/" + randomImg2;
  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImgSrc2);

  //Declare result
  if (randomNum1 === randomNum2) {
    document.querySelector("h1").textContent = "DRAW!!!";
  } else if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "PLAYER 1 WINS!!!";
  } else {
    document.querySelector("h1").textContent = "PLAYER 2 WINS!!!";
  };
  //wait for reload before you can play again
  document.querySelector("button").disabled=true;
  document.querySelector(".wait").innerHTML="reloading...";
//timeout function
  setTimeout(function(){
    document.querySelector("h1").textContent = "Click button to play again";
    image.setAttribute("src", "images/dice6.png" );
    image2.setAttribute("src", "images/dice6.png" );
    document.querySelector("button").disabled=false;
    document.querySelector(".wait").innerHTML="";
  }, 4000)
 

};
