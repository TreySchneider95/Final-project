/*------------------------------
Thank you to the guides out there that helped with this project. The game is the easy part, but making the computer smart is not easy by any means.

Credit:
1. Goes to this user in FreeCodeCamp: AllenPooley. Their game helped out a lot and also the comments and guide helped me figure out how the minMax function works.

You can find there page here: 
https://forum.freecodecamp.org/u/AllanPooley

There guide here: 
https://forum.freecodecamp.org/t/tic-tac-toe-and-the-minimax-algorithm-advice-and-tips-for-struggling-campers/97467

There project here: 
https://codepen.io/allanpooley/pen/qrrmoR?editors=0010

2. Also the people over at the 'neverstopbuilding' blog. There guide on the minMax algorithm also helped out alot in understanding what was going on.

There guide here:
https://www.neverstopbuilding.com/blog/2013/12/13/tic-tac-toe-understanding-the-minimax-algorithm13/

There contact information here:
https://www.neverstopbuilding.com/contact/
------------------------------*/

$(document).ready(function(){
    /*------------------------------
    This is a guide into how the function works. 
    **To see the specifics on how the individual functions work, please look right above the functions for descriptions.**
    1. The user selects what player character they want, also what level difficulty, then click start. The "start" button, calls a function and it does its thing. 
    2. The player always goes first, when a player clicks a square the move function is called. Look at the bottom of the code to see what happens when a square is clicked.
    3. After the player has there move the AI is called. It determines the level and processes the correct thing depending on that level. 
    4. After the process then the AI called the 'move' function and process accordingly. 
    ------------------------------*/
    
    /*------------------------------
    This is the game object. Instead of declairing a lot of "var's", it was eaiser tomake an object. The reason being is that we can copy this object very eaisly and not accidently change values of the origional. This will come in very handy down the road.
    ------------------------------*/
    var game = {
      board: [
        [" "," "," "],
        [" "," "," "],
        [" "," "," "]
      ],
      player: " ",
      computer: " ",
      level: "hard",
      totalMoves: 0,
      playersTurn: true,
      nextTurn: [null, null],
      winner: " ",
      gameOver: false,
      xScore: 0,
      oScore: 0,
      arr: []
    }
    
    /*------------------------------
    This function will set the player based on the radio button the user selects.
    
    1. I set a var to handel all the radio button options. It will be an array.
    2. I set a character variable. This is really just a placeholder.
    3. I loop through the arr of radio button options, in this case 'xOrO' (that is "x-Or-O").
    4. If the one the user checked is found set our 'character' var is that value.
    5. Check to see if a radio button was pushed. If not then return false. If 'character' hasnt had a value assoiated with it, then it will be 'undefined'.
    6. I set the 'game.player' as the 'character' if the previous 'if' statement is passed.
    7. I then set the computer player. It is just the opposite of 'game.player', so either 'x' or 'o'.
    8. I then return 'true', just to return something. In my mind, meaning that the player selection process was successful.
    ------------------------------*/
    function playerSelect(){
      
      var xOrO = document.getElementsByName("x-o");
      var character;
      
      for(var i = 0; i < xOrO.length; i++){
        if(xOrO[i].checked){
          character = xOrO[i].value;
        }
      }
      
      if(character === undefined){
        return false;
      }
      
      game.player = character;
      
      if(game.player === "x"){
        game.computer = "o";
      } else {
        game.computer = "x";
      }
      
      console.log("**Function playerSelect**");
      console.log("Player is now: " + game.player);
      console.log("Computer is now: " + game.computer);
      console.log("!!------------------------!!");
      return true;
    }
    
    /*------------------------------
    This function will set the level difficulty, based on what radio button the user selects.
    
    1. I set a var to handel all the radio button options. It will be an array.
    2. I set a level variable. This is really just a placeholder.
    3. I loop through the arr of radio button options.
    4. If the one the user checked is found set our 'level' var is that value.
    5. Check to see if a radio button was pushed. If not then return false. If 'level' hasnt had a value assoiated with it, then it will be 'undefined'.
    6. I set the 'game.level' as the 'level' if the previous 'if' statement is passed.
    7. I then return 'true', just to return something. In my mind, meaning that the level selection process was successful.
    ------------------------------*/
    function levelSelect(){
      
      var allLevels = document.getElementsByName("level");
      var level;
      
      for(var i = 0; i < allLevels.length; i++){
        if(allLevels[i].checked){
          level = allLevels[i].value;
        }
      }
      
      if(level === undefined){
        return false;
      }
      
      game.level = level;
      
      console.log("**Function levelSelect**")
      console.log("Level is now: " + game.level);
      console.log("!!------------------------!!");
      
      return true;
    }
    
    /*------------------------------
    This is what will happen when the start button is pushed. 
    
    1. Call the 'playerSelect' function. If that returns false, then I return false just to stop the function from running. If true is returned (meaning the "playerSelect" function was successful) then I continue the function.
    2. Call the "levelSelect" function. If that returns false, then I return false just to stop the function from running. If true is returned (meaning the "levelSelect" function was successful) then I continue the function.
    3. I then fade out the "playAs" area over 1 second.
    4. I change the "gameContainer" to a black backgroundover 1 second.
    5. I wait 1.1 secons while I was doing the pervious things, and then fade in the "gameBoard".
    6. The game has begun.
    ------------------------------*/
    $("#start").click(function(){
      
      if(playerSelect() === false){
        alert("Please Select a Character");
        return false;
      } 
      
      if(levelSelect() === false){
        alert("Please Select a Level");
        return false;
      }
      
      console.log("!!---Let the game Begin---!!");
      
      $(".playAs").fadeOut(1000);
      $(".gameContainer").animate({backgroundColor: "black"}, 1000);
      
      setTimeout(function(){
        $(".gameBoard").fadeIn(2000);
      }, 1100);
      
    });
    
    /*------------------------------
    This function will do a hard reset of the game and return it completly back to the origional as loaded. 
    
    1. I go through the "game" object, and set everything back to the origional values.
    2. I display out starting screen again for the user to select the choiches over again.
    ------------------------------*/
    function hardReset(){
      
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          $("#r" + i + "c" + j).html(" ");
          game.board[i][j] = " ";
        }
      }
      
      game.totalMoves = 0;
      game.winner = " ";
      game.playersTurn = true;
      game.gameOver = false;
      game.xScore = 0;
      game.oScore = 0;
      
      scoreBoard();
      
      $(".gameBoard").fadeOut(1000);
      $(".gameContainer").animate({backgroundColor: "black"}, 1000);
      
      setTimeout(function(){
        $(".playAs").fadeIn(2000);
      }, 1100);
      
    }
    
    /*------------------------------
    This function will do a soft reset of the game. It is used when the game is over but the user wants to keep playing. I only reset certain values and not all values.
    ------------------------------*/
    function softReset(){
      
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          $("#r" + i + "c" + j).html(" ");
          game.board[i][j] = " ";
        }
      }
      
      game.totalMoves = 0;
      game.winner = " ";
      game.playersTurn = true;
      game.gameOver = false;
      
    }
    
    /*------------------------------
    This function just updates the scoreboard.
    ------------------------------*/
    function scoreBoard(){
      $("#playerXScore").html(game.xScore);
      $("#playerOScore").html(game.oScore);
    }
    
    /*------------------------------
    This function picks a random number for the AI. 
    1. I pick a random number between 1-9.
    2. I declare var's assoicated with 'row', 'column', 'id', and 'zone'. 
    3. I use a switch and determine what to set the 'r', 'c', and 'id' var's to.
    4. I check if the 'game.board' is empty in that 'row' and 'column'.
    5. If so then I set the 'game.arr' to our values, so I can use them.
    6. If not then I run the "randomNumber" function again to pick a different number.
    ------------------------------*/
    function randomNumber(){
      
      console.log("**Called Function randomNumber**");
      var randomNum = Math.floor(Math.random() * 9 + 1);
      var zone = "#" + randomNum;
      var r;
      var c;
      var id;
      
      switch(zone){
        case "#1":
          r = 0;
          c = 0;
          id = "#r" + r + "c" + c;
          break;
        case "#2":
          r = 0;
          c = 1;
          id = "#r" + r + "c" + c;
          break;
        case "#3":
          r = 0;
          c = 2;
          id = "#r" + r + "c" + c;
          break;
        case "#4":
          r = 1;
          c = 0;
          id = "#r" + r + "c" + c;
          break;
        case "#5":
          r = 1;
          c = 1;
          id = "#r" + r + "c" + c;
          break;
        case "#6":
          r = 1;
          c = 2;
          id = "#r" + r + "c" + c;
          break;
        case "#7":
          r = 2;
          c = 0;
          id = "#r" + r + "c" + c;
          break;
        case "#8":
          r = 2;
          c = 1;
          id = "#r" + r + "c" + c;
          break;
        case "#9":
          r = 2;
          c = 2;
          id = "#r" + r + "c" + c;
          break;
      }
        
      console.log("randomNumber is: " + randomNum);
      console.log("'r' is: " + r + " and 'c' is: " + c);
      console.log("'id' is: " + id);
      
      if(game.board[r][c] === " "){
        
        game.arr = [r, c, id];
        console.log("Space is availible");
        console.log("Updating game.arr...");
        console.log("Exiting randomNumber function");
        console.log("!!-----------------------!!");
        
      } else {
        console.log("Space not availible, choosing another number");
        randomNumber();
      }
    }
    
    /*------------------------------
    This is the AI function.
    
    1. I first check what the "game.level" is. 
    1.A. If it is "easy" then I will ust be pickiing a random number, and haveing the AI moved at that spot. 
    1.B. If it is "intermediate" then I will pick a random number. If the number is between 0-4 then I pick a random number for the move. If the number is between 5-9 then I run the 'minMax" algorthim.
    1.C. If it is "hard" I will always run the "minMax" algorithm.
    2. Once it is determined what I will be doing, then I excuite the "move" function.
    ------------------------------*/
    function callAI() {
  
      console.log("**AI function called**");
      
      var id;
      
      if(game.level === "easy"){
        
        console.log("Game Level is: " + game.level);
        
        setTimeout(function(){
          
          randomNumber();
          
          console.log("Our arr is: ");
          console.log(game.arr);
          console.log("Proceding to move");
          console.log("!!------------------------!!");
          
          move(game.arr[0], game.arr[1], game.arr[2], game.computer);
          
        }, 1000);
        
      } else if(game.level === "intermediate"){
        
        console.log("Game Level is: " + game.level);
        
        setTimeout(function(){
          
          var randomNum = Math.floor(Math.random() * 9);
          
          console.log("Out randomNum is: " + randomNum);
          
          if(randomNum >= 0 && randomNum <= 4){
            
            randomNumber();
            
            console.log("Our arr is: ");
            console.log(game.arr);
            console.log("Proceding to move");
            console.log("!!------------------------!!");
            
            move(game.arr[0], game.arr[1], game.arr[2], game.computer);
            
          } else if(randomNum >= 5 && randomNum <= 9){
            
            if(game.totalMoves === 1){
              alert("Click 'OK' and then Please Wait...");
            }
            
            console.log("Calling the minMax function");
            console.log("Proceding to move");
            console.log("!!------------------------!!");
  
            minMax(game, 0);
            id = "#r" + game.nextTurn[0] + "c" + game.nextTurn[1];
            move(game.nextTurn[0], game.nextTurn[1], id, game.computer);
          }
          
        });
        
      } else if(game.level === "hard"){
        
        console.log("Game Level is: " + game.level);
        
        if(game.totalMoves === 1){
          alert("Click 'OK' and then Please Wait...");
        }
        
        setTimeout(function(){
          
          console.log("Calling the minMax function");
          console.log("Proceding to move");
          console.log("!!------------------------!!");
          
          minMax(game, 0);
          id = "#r" + game.nextTurn[0] + "c" + game.nextTurn[1];
          move(game.nextTurn[0], game.nextTurn[1], id, game.computer);
  
        }, 1000);
        
      }
    }
    
    /*------------------------------
    This function checks if there is a winner in the fake games that are made during the "minMax" algorithm.
    
    1. I pass in my potiential game.board.
    2. I check the horizontal lines for a winner. If there is I return "true".
    3. I check the verticle lines for a winner. If there is I return "true".
    4. I check diagonal line, from top left to bottom right for a winner. If there is I return "true".
    5. I check diagonal line, from bottom left to top right for a winner. If there is I return "true".
    6. If no winner is found then I return "false".
    ------------------------------*/
    function mockWinner(newArr){
      
      //Check horizonal lines (rows) for winner.
      for(var i = 0; i < 3; i++){
        if(newArr[i][0] !== " " && newArr[i][0] == newArr[i][1] && newArr[i][0] == newArr[i][2]){
          return true;
        }
      }
      
      //Check verticle lines (col) for winner.
      for(var j = 0; j < 3; j++){
        if(newArr[0][j] !== " " && newArr[0][j] == newArr[1][j] && newArr[0][j] == newArr[2][j]){
          return true;
        }
      }
      
      //Check diagonal line, top left to bottom right for winner.
      if(newArr[0][0] !== " " && newArr[0][0] == newArr[1][1] && newArr[1][1] == newArr[2][2]) {
        return true;
      }
      
      //Check diagonal line, bottom left to top right for winner.
      if(newArr[2][0] !== " " && newArr[2][0] == newArr[1][1] && newArr[1][1] == newArr[0][2]) {
        return true;
      }
  
      //no winner found
      return false;
      
    }
    
    /*------------------------------
    This function checks if there is a winner. This will be used to check for a true winner, and not just fake games that were made up during the "minMax" algorithm.
    
    1. I check the horizontal lines for a winner. If there is I return "true".
    2. I check the verticle lines for a winner. If there is I return "true".
    3. I check diagonal line, from top left to bottom right for a winner. If there is I return "true".
    4. I check diagonal line, from bottom left to top right for a winner. If there is I return "true".
    5. If no winner is found then I return "false".
    ------------------------------*/
    function realWinner(){
      console.log("**realWinner Function called**")
      //Check horizonal lines (rows) for winner.
      for(var i = 0; i < 3; i++){
        if(game.board[i][0] !== " " && game.board[i][0] == game.board[i][1] && game.board[i][0] == game.board[i][2]){
          return true;
        }
      }
      
      //Check verticle lines (col) for winner.
      for(var j = 0; j < 3; j++){
        if(game.board[0][j] !== " " && game.board[0][j] == game.board[1][j] && game.board[0][j] == game.board[2][j]){
          return true;
        }
      }
      
      //Check diagonal line, top left to bottom right for winner.
      if(game.board[0][0] !== " " && game.board[0][0] == game.board[1][1] && game.board[1][1] == game.board[2][2]) {
        return true;
      }
      
      //Check diagonal line, bottom left to top right for winner.
      if(game.board[2][0] !== " " && game.board[2][0] == game.board[1][1] && game.board[1][1] == game.board[0][2]) {
        return true;
      }
      
      return false;
      
    }
    
    /*------------------------------
    This function will be to get our score of the current "fake" game that is generated by the "minMax" algorithm.
    
    1. I check if the game is over or not, as well as who's turn it is in that particular test. 
    2. If it is the players turn and the game is over, then return (10 - depth). This will reslut in a more positive score. Remember the computer is running the "minMax" algorithm and that is not good for the computer. (10-6) will return a +4.
    3. If it is the computers turn and the game is over, then return (depth-10). This will reslut in a more negative score. Remember the computer is running the "minMax" algorithm and that is good for the computer. (6-10) is a -4. 
    4. If there is no winner, then just return 0 because its neurtal for both parites. 
    ------------------------------*/
    function getScore(gameState, depth){
      if(gameState.gameOver && gameState.winner === gameState.player){
        return 10 - depth;
      } else if(gameState.gameOver && gameState.winner === gameState.computer){
        return depth - 10;
      } else {
        return 0;
      }
    }
    
    /*------------------------------
    This function will generate all of our next moves for the "minMax" algorithm. I need to generate the entire game, so the algorithm can determine what is the best course of action.
    
    If the user moves in the top left corner then the algorithm will have to put every availible move that coule possibly happen from then on.
    
    I return an array of possible moves. The array will be 2D with the second array being [row, columb] pairs.
    ------------------------------*/
    function generateMoves(gameState){
      var avblMoves = [];
      
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          if(gameState.board[i][j] === " "){
            avblMoves.push([i, j]);
          }
        }
      }
      return avblMoves;
    }
    
    /*------------------------------
    This function if going to determine if the next move in our 'mock' game should be the players move, or the computers move. 
    
    1. Check to see if in the 'mock' it is the players turn or not. If so then make that move the players move. If not them make that move the computers move.
    2. Add to the total moves that have been taken in the 'mock' game.
    3. If there is a winner in the 'mock game' then dertime if it was the players turn or not. If so make the player the 'winner', if not then computer is the 'winner'.
    4. If no winner then check if the total moves are above 9. If so then there is a draw. 
    5. If the previous conditions are not meet then the players turn, equals the opposite of what it currently is.
    ------------------------------*/
    function generatePossibleGame(state, move){
      var gameState = JSON.parse(JSON.stringify(state));
      
      if(gameState.playersTurn){
        gameState.board[move[0]][move[1]] = gameState.player;
      } else {
        gameState.board[move[0]][move[1]] = gameState.computer;
      }
      
      gameState.totalMoves++;
      
      if(mockWinner(gameState.board)){
        gameState.gameOver = true;
        if(gameState.playersTurn){
          gameState.winner = gameState.player;
        } else {
          gameState.winner = gameState.computer;
        }
      } else if(gameState.totalMoves >= 9){
        gameState.gameOver = true;
        gameState.winner = "draw";
      } else {
        gameState.playersTurn = !gameState.playersTurn;
      }
      
      return gameState;
    }
    
    /*------------------------------
    This function checks what the max index of an array given, this is going to be used in the 'minMax' algorithm. We do not want the actual value, just the index of the value.
    ------------------------------*/
    function maxIndex(arr){
      var maxIndex = 0;
      
      if(arr.length > 1){
        for(var i = 1; i < arr.length; i++){
          if(arr[i] > arr[maxIndex]){
            maxIndex = i;
          }
        }
      }
      return maxIndex;
    }
    
    /*------------------------------
    This function checks what the minimum index of an array given, this is going to be used in the 'minMax algorithm. We do not want the actual value, just the index of that valus.
    ------------------------------*/
    function minIndex(arr){
      
      var minIndex = 0;
      
      if(arr.length > 1){
        for(var i = 1; i < arr.length; i++){
          if(arr[i] < arr[minIndex]){
            minIndex = i;
          }
        }
      }
      return minIndex;
    }
    
    /*------------------------------
    This is the minMax function that runs the minMax algorithm. The ultimate goal is for the computer to determine what is the best play that results in either it winning or a draw game.
    
    Please read the notes in the function for details.
    ------------------------------*/
    function minMax(state, depth){
      /*------------------------------
      I make a copy of 'state'. 'state' is just our game that is passed into 'minMax'.
      ------------------------------*/
      var gameState = JSON.parse(JSON.stringify(state));
      /*------------------------------
      I check if gameOver is true or not. If so then I return the score, which is determined by the 'getScore' function.
      ------------------------------*/
      if(gameState.gameOver){
        return getScore(gameState, depth);
      } else {
        /*------------------------------
        If the game is not over then I increase depth by 1.
        ------------------------------*/
        depth++;
        
         /*------------------------------
        I declare 2 variables both arrays. One for all the moves we generate and the other for the score the algorithm determines.
        ------------------------------*/
        var moves = [];
        var scores = [];
        
         /*------------------------------
        I generate all the moves with the 'generateMoves' function, and set the 'moves' var to that new array that comes from that.
        ------------------------------*/
        moves = generateMoves(gameState);
        
         /*------------------------------
        I itterate through the moves array.
        ------------------------------*/
        for(var i = 0; i < moves.length; i++){
           /*------------------------------
           I generate a possible game, with the 'generatePossobleGame' function. I then call the 'minMax' algorithm' with the new gaem that was generates. I push all of thoes games into the 'scores' array.
           ------------------------------*/
          var possibleGame = generatePossibleGame(gameState, moves[i]);
          scores.push(minMax(possibleGame, depth));
        }
        
        /*------------------------------
        I check if it is the 'playersTurn' or not.
        1. If so I get the 'maxScore' by calling the 'maxIndex" function.
        2. If not then I get the 'minScore' by calling the 'minIndex" function.
        ------------------------------*/
        
        if(gameState.playersTurn){
  
          var maxScore = maxIndex(scores);
          game.nextTurn = moves[maxScore];
            
          return scores[maxScore];
          
        } else {
          
          var minScore = minIndex(scores);
          game.nextTurn = moves[minScore];
          
          return scores[minScore];
          
        }
      }
    }
    
    /*------------------------------
    This function will determine if the game is over or not.
    1. The 'who' argument being passed in is going to either be our 'player' or our 'computer' character.
    2. If any of the conditions are meet then I do the following:
    2.A. I update the scoreboard.
    2.B. I do a soft reset so the user can still keep playing if they wish.
    3. If the game is a draw, then I just preform a soft reset.
    ------------------------------*/
    function gameOver(who){
  
      if(who == game.player && game.player == "x"){
        
        console.log("Player has won!");
        game.xScore++;
        scoreBoard();
        alert("You Won!!!.... Resetting the board...");
        setTimeout(function(){
          softReset();
        }, 1000);
        
      } else if(who == game.player && game.player == "o") {
        
        console.log("Player has won!");
        game.oScore++;
        scoreBoard();
        alert("You Won!!!.... Resetting the board...");
        setTimeout(function(){
          softReset();
        }, 1000);
        
      } else if(who == game.computer && game.computer == "x") {
        
        console.log("Computer has won!");
        game.xScore++;
        scoreBoard();
        alert("The Computer has won.... Resetting the board...");
        setTimeout(function(){
          softReset();
        }, 1000);
        
      } else if(who == game.computer && game.computer == "o") {
        
        console.log("Computer has won!");
        game.oScore++;
        scoreBoard();
        alert("The Computer has won.... Resetting the board...");
        setTimeout(function(){
          softReset();
        }, 1000);
        
      } else if(who == "draw") {
        
        console.log("Game is a draw");
        alert("The game is a draw.... Resetting the board...");
        setTimeout(function(){
          softReset();
        }, 1000);
        
      }
    }
    
    /*------------------------------
    This function is to update the game. I could put this all in the 'move' function, however I liked it like this. 
    1. I recieve 4 arguments for this function. This will be the 'row', 'column' , 'id', and the 'who' or 'character' of who made the move.
    2. I update the actual display of the game, as well as the 'game.board' and also add 1 to the 'totalMoves'.
    ------------------------------*/
    function updateGame(row, column, id, who){
      $(id).html(who);
      game.board[row][column] = who;
      game.totalMoves++;
    }
    
    /*------------------------------
    This function is to make a move on the game. 
    1. I check if it is the 'playersTuen' or not. Also I check if the space is availible. If so then call the 'updateGame; function with the 'player'. If not call the 'updateGame' function with the 'computer'.
    2. Check for a winner. If there is one then check to see whos turn it is. If it is the 'playersTurn' then call the 'gameOver' function with 'player' else call it with'computer'.
    3. If the game is not over, then check to see if the total moves is 9 or more. If so there is a draw. Call 'gameOver' with 'draw'.
    4. If neither of thoes is true, then check if it is the 'playersTurn' or not. If so turn 'playersTurn' to 'false' and call our AI with 'callAI' function.
    5. If it is not the 'playersTurn' then turn 'playersTurn' to 'true' and that is all.
    ------------------------------*/
    function move(r, c, id, character){
      console.log("**Called function move**");
  
      if(game.playersTurn === true && game.board[r][c] === " "){
        
        console.log("It is the players turn, and the space is free");
        updateGame(r, c, id, game.player);
        
      } else if (game.playersTurn === false && game.board[r][c] === " ") {
        
        console.log("It is the computers turn, and the space is free");
        updateGame(r, c, id, game.computer);
        
      }
      
      if(realWinner() === true){
        
        if(game.playersTurn === true){
          gameOver(game.player);
        } else {
          gameOver(game.computer);
        }
        
      } else if(game.totalMoves >= 9) {
        gameOver("draw");
      } else if(game.playersTurn === true) {
        game.playersTurn = false;
        callAI();
      } else if(game.playersTurn === false){
        game.playersTurn = true;
      }
    }
    
    /*------------------------------
    This is what happens when the 'reset' button is clicked. I preform a 'hardReset'.
    ------------------------------*/
    $("#reset").click(function(){
      hardReset();
    });
    
    /*------------------------------
    When a zone is clickedthis is what happens.
    1. I designate an 'id', which corresponds to a 'div' in the HTML.
    2. I call the 'move' function and pass in the coordinates of that area, and also the 'player'.
    ------------------------------*/
    $("#r0c0").click(function(){
      var id = "#r0c0";
      move(0, 0, id, game.player);
    });
    $("#r0c1").click(function(){
      var id = "#r0c1";
      move(0, 1, id, game.player);
    });
    $("#r0c2").click(function(){
      var id = "#r0c2";
      move(0, 2, id, game.player);
    });
    $("#r1c0").click(function(){
      var id = "#r1c0";
      move(1, 0, id, game.player);
    });
    $("#r1c1").click(function(){
      var id = "#r1c1";
      move(1, 1, id, game.player);
    });
    $("#r1c2").click(function(){
      var id = "#r1c2";
      move(1, 2, id, game.player);
    });
    $("#r2c0").click(function(){
     var id = "#r2c0";
      move(2, 0, id, game.player);
    });
    $("#r2c1").click(function(){
      var id = "#r2c1";
      move(2, 1, id, game.player);
    });
    $("#r2c2").click(function(){
      var id = "#r2c2";
      move(2, 2, id, game.player);
    });
   
  });