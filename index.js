 let randomNum1 = Math.floor(Math.random() * 6 )+ 1; 
 let randomImg = "dice" + randomNum1 + ".png";
 let randomImgSrc = " images/" + randomImg;
 let image = document.querySelectorAll("img")[0];
image.setAttribute("src", randomImgSrc);   

let randomNum2 = Math.floor(Math.random() * 6 )+ 1; 
 let randomImg2 = "dice" + randomNum2 + ".png";
 let randomImgSrc2 = " images/" + randomImg2;
 let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);


if(randomNum1 === randomNum2){
    document.querySelector("h1").textContent="DRAW!!!";
}else if(randomNum1 > randomNum2){
    document.querySelector("h1").textContent="PLAYER 1 WINS!!!";
}else{
    document.querySelector("h1").textContent="PLAYER 2 WINS!!!";

};
