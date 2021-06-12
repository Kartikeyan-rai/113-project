    function setup() {
  canvas=createCanvas(600,500);
  canvas.position(100,150)
  video=createCapture(VIDEO);
  video.hide()
  }
  
  function draw() {
     image(video,150,130,300,250);
     fill('blue')
     ellipse(30, 30, 50);
     ellipse(570, 30, 50);
     ellipse(30, 470, 50);
     ellipse(570, 470, 50);
     fill('red')
     rect(50,15,500,30);
     rect(50,455,500,30);
     rect(15,50,30,400);
     rect(555,50,30,400);
  }
  function take_snapshot(){
      save('picture.png');
  }
  
  
