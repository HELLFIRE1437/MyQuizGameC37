class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements

    //write code to change the background color here
    background("yellow");
    question.results.show();
    Contestant.getPlayerInfo(); 
    question.hide();
    fill("turquoise");
    textSize(20);
    text("Correct Answer : " + right_answer,330,160);
    if(allContestants !== undefined){
      var y = 300 ;
      fill("black");
      text("Players",310,265);
      for(var cnt in allContestants){
        textSize(20);
        if(allContestants[cnt].answer == right_answer){
          fill("green");
          status = "Correct Answer";
        }
        else {
          fill("red");
          status = "Wrong Answer";
          
        }
        text(allContestants[cnt].name + " : " + status,250,y);
        y += 30;
      }
    } 
    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
