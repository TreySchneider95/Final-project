var dice1 = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
}
var dice2 = {
    sides: 6,
    roll2: function () {
      var randomNumber2 = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber2;
    }
}
  
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
  

function printNumber(number) {
var placeholder = document.getElementById('placeholder');
placeholder.innerHTML = number;

}
function printNumber2(number) {
    var placeholder2 = document.getElementById('placeholder2');
    placeholder2.innerHTML = number;
}
function printpicture(number) {
    var placeholder = document.getElementById('left_pic');
    if(number = 5){
        placeholder.src = "pics/One.jpg"
    }
    
}

var button = document.getElementById('button');


button.onclick = function() {
var result = dice1.roll();
var result2 = getRandomInt(6) + 1;
printNumber(result);
console.log(result)
printNumber2(result2)
if(result === 1){
    document.getElementById("left_pic").src="Pics/One.jpg"
}else if(result===2){
    document.getElementById("left_pic").src="Pics/Two.jpg"
}else if(result===3){
    document.getElementById("left_pic").src="Pics/Three.jpg"
}else if(result===4){
    document.getElementById("left_pic").src="Pics/Four.jpg"
}else if(result===5){
    document.getElementById("left_pic").src="Pics/Five.jpg"
}else if(result===6){
    document.getElementById("left_pic").src="Pics/Six.jpg"
};
if(result2 === 1){
    document.getElementById("right_pic").src="Pics/One.jpg"
}else if(result2===2){
    document.getElementById("right_pic").src="Pics/Two.jpg"
}else if(result2===3){
    document.getElementById("right_pic").src="Pics/Three.jpg"
}else if(result2===4){
    document.getElementById("right_pic").src="Pics/Four.jpg"
}else if(result2===5){
    document.getElementById("right_pic").src="Pics/Five.jpg"
}else if(result2===6){
    document.getElementById("right_pic").src="Pics/Six.jpg"
};
if(result>result2){
    document.getElementById("winner").innerHTML = "Player One Wins"
}else if(result2>result){
    document.getElementById("winner").innerHTML = "Player Two Wins"
}else{
    document.getElementById("winner").innerHTML = "Its A Tie"
};
};
  
var button2 = document.getElementById('button2');

button2.onclick = function() {
    var result = dice1.roll();
    var result2 = getRandomInt(6) + 1;
    printNumber(result);
    if(result === 1){
        document.getElementById("left_pic").src="Pics/One.jpg"
    }else if(result===2){
        document.getElementById("left_pic").src="Pics/Two.jpg"
    }else if(result===3){
        document.getElementById("left_pic").src="Pics/Three.jpg"
    }else if(result===4){
        document.getElementById("left_pic").src="Pics/Four.jpg"
    }else if(result===5){
        document.getElementById("left_pic").src="Pics/Five.jpg"
    }else if(result===6){
        document.getElementById("left_pic").src="Pics/Six.jpg"
    };
    if(result>result2){
        document.getElementById("winner").innerHTML = "Player One Wins"
    }else if(result2>result){
        document.getElementById("winner").innerHTML = "Player Two Wins"
    }else{
        document.getElementById("winner").innerHTML = "Its A Tie"
    };
};

var button3 = document.getElementById('button3');

button3.onclick = function() {
    var result = dice1.roll();
    var result2 = getRandomInt(6) + 1;
    printNumber2(result2)
    if(result2 === 1){
        document.getElementById("right_pic").src="Pics/One.jpg"
    }else if(result2===2){
        document.getElementById("right_pic").src="Pics/Two.jpg"
    }else if(result2===3){
        document.getElementById("right_pic").src="Pics/Three.jpg"
    }else if(result2===4){
        document.getElementById("right_pic").src="Pics/Four.jpg"
    }else if(result2===5){
        document.getElementById("right_pic").src="Pics/Five.jpg"
    }else if(result2===6){
        document.getElementById("right_pic").src="Pics/Six.jpg"
    }; 
    if(result>result2){
        document.getElementById("winner").innerHTML = "Player One Wins"
    }else if(result2>result){
        document.getElementById("winner").innerHTML = "Player Two Wins"
    }else{
        document.getElementById("winner").innerHTML = "Its A Tie"
    };  
};