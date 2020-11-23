class Form {
constructor(){
    this.button = createButton('Play');
    this.reset = createButton('reset');
    this.reset1 = createButton('reset1');

    this.reset2 = createButton('Bring your player on the field!');
    this.title = createElement('h2');
    this.greeting = createElement('h3');
    this.input = createInput("Name"); 
}
hide(){
  this.button.hide();
  this.title.hide();
  this.greeting.hide();
  this.input.hide();
}
display(){
    this.title.html("Get The Ball");
    this.title.position(displayWidth/2 -50, 0);
    this.button.position(displayWidth/2 +30,displayHeight/2);
  
    this.input.position(displayWidth/2 -40, displayHeight/2 -80);
      console.log("HI");
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name);
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
        this.reset2.position(displayWidth/2 -85,displayHeight/4+300);
      });
      this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
      });
  
      this.reset1.mousePressed(()=>{
        player.resetName();
      })

      this.reset2.mousePressed(()=>{
        player.changePosition();
      })
}
}