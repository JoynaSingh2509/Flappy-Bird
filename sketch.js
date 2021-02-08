var bird;
var pipes=[];
var score=0;

function setup(){
    createCanvas(400,600);
    bird=new Bird();
    pipes.push(new Pipe());
}
function draw(){
    background(0);
    bird.update();
    bird.show();
   

    if(frameCount % 100 == 0){
        pipes.push(new Pipe());
    }

    for (var i=pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            console.log("HIT");
        }
       
        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }

} 
//fill("orange");
//textSize(25);
//textFont("calibri")
//text("Score : "+score,10,30);

bird.show();
}
  

function keyPressed(){
    if(key == ' '){
      bird.up();
    }
  }