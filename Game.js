class Game{
    constructor(){}
    getState()
    {
        var gamesStatesref = database.ref("gameStates");
        gamesStatesref.on("value",function (data){
            gameState = data.val();
        });
    }
    
    update(state)
    {
        database.ref("/").update({
            gameStates : state
        });
    };

    start()
    {
      if(gameState === 0)
      {
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
      }
    }
}
