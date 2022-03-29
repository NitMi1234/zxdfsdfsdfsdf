class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state){
    database.ref('/').update({gameState:state})
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1=createSprite(width/2-100,height-100)
    car1.addImage("car1",car1_img)
    car1.scale=0.07

    car2=createSprite(width/2+100,height-100)
    car2.addImage("car2",car2_img)
    car2.scale=0.07

    cars=[car1,car2]
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if(allPlayers!==undefined){
    image(track,0,-5*height,width,height*6)

    var index=0
    //for every player in the all players array
    for(var plr in allPlayers){
      index+=1

      //use data from the data base to display cars in the X and Y position
      var x=allPlayers[plr].positionX
      var y=height-allPlayers[plr].positionY

      cars[index-1].position.x=x
      cars[index-1].position.y=y

      //checking current player
      if(index===player.index){
        stroke(10)
        fill("red")
        ellipse(x,y,60,60)

        //moving camera with the car
        camera.position.x=cars[index-1].position.x
        camera.position.y=cars[index-1].position.y
    }
    }
    
  this.handlePLayerControls();
    drawSprites();
    }
  }

  handlePLayerControls(){
    if(keyIsDown(UP_ARROW)){
      player.positionY+=10
      player.update();
    }
  };
}
