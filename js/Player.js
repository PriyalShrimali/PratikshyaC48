class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.x = 0;
        this.y = 0;
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }

      
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
 
      resetName(){
        var name1 = "players/player1";
        database.ref(name1).set({
          name:"",
        x:350,
         y:450
        })
        var name2 = "players/player2";
        database.ref(name2).set({
          name:"",
        x:650,
         y:600
        })
        var name3 = "players/player3";
        database.ref(name3).set({
          name:"",
        x:950,
         y:450
        })
        var name4 = "players/player4";
        database.ref(name4).set({
          name:"",
         x:475,
         y:250
        })
        var name5 = "players/player5";
        database.ref(name5).set({
          name:"",
        x:825,
         y:250
        })
        var name6 = "players/player6";
        database.ref(name6).set({
          name:"",
         x:600,
        y:415
        })
        var name7 = "players/player7";
        database.ref(name7).set({
          name:"",
        x:700,
        y:415
        })
      }
     
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          x:this.x,
          y:this.y
        });
      }


      changePosition(){
       if(this.index === 1){
        var name1 = "players/player1";
        database.ref(name1).set({
          name:this.name,
         x:350,
        y:450
        })
      }
      if(this.index === 2){
        var name2 = "players/player2";
        database.ref(name2).set({
          name:this.name,
         x:650,
         y:600
        })
      }

      if(this.index === 3){
        var name3 = "players/player3";
        database.ref(name3).set({
          name:this.name,
        x:950,
         y:450
        })
      }

      if(this.index === 4){
        var name4 = "players/player4";
        database.ref(name4).set({
          name:this.name,
        x:475,
        y:250
        })
      }

      if(this.index === 5){
        var name5 = "players/player5";
        database.ref(name5).set({
          name:this.name,
        x:825,
        y:250
        })
      }

      if(this.index === 6){
        var name6 = "players/player6";
        database.ref(name6).set({
          name:this.name,
         x:600,
         y:415
        })
      }

      if(this.index === 7){
        var name7 = "players/player7";
        database.ref(name7).set({
          name:this.name,
         x:700,
         y:415
        })
      }
      }
    
       static getPlayerInfo(){
         var playerInfoRef = database.ref('players');
         playerInfoRef.on("value",(data)=>{
           allPlayers = data.val();
         })
       }
}