function setup() {
    let cvn = createCanvas(windowWidth, 300);
    cvn.parent("#container1");
    // var xlocation = []
    // var ylocation = []
    // var xlocation1 = []
    // var ylocation1 = []
    // var xlocation2 = []
    // var ylocation2 = []
    // var rcolor = []
    // var gcolor = []
    // var bcolor =[]
    // var rcolor1 = []
    // var gcolor1 = []
    // var bcolor1 =[]
    // var rcolor2 = []
    // var gcolor2 = []
    // var bcolor2 =[]
    // noStroke();
    // //blendMode(SOFT_LIGHT);
    // background(random(200,250),random(200,250),random(200,250));
    
  
    
    // for (x=0; x <=30 ; x++){
      
    //   xlocation.push(random(windowWidth));
    //   ylocation.push(random(windowHeight));
    //   rcolor.push(random(190,255));
    //   gcolor.push(random(180,255));
    //   bcolor.push(random(200,255));
    //   fill(rcolor[x],gcolor[x],bcolor[x]);
    //   ellipse(xlocation[x], ylocation[x],random(500));
      
    // }
  
    //   for (i=0; i<=10 ; i++){
      
    //   xlocation1.push(random(windowWidth));
    //   ylocation1.push(random(windowHeight));
    //   rcolor1.push(random(180,255));
    //   gcolor1.push(random(200,255));
    //   bcolor1.push(random(180,255));
    //   fill(rcolor1[i],gcolor1[i],bcolor1[i]);
    //   rect(xlocation1[i], ylocation1[i],random(50,200), random(50,200));
      
    // }
    
    // for (t=0; t<=10; t++){
    //   xlocation2.push(random(windowWidth));
    //   ylocation2.push(random(windowHeight));
    //   rcolor2.push(random(150,255));
    //   gcolor2.push(random(150,255));
    //   bcolor2.push(random(150,255));
    //   textSize(10);
    //   text('wiggle', xlocation2[t], ylocation2[t]);
    //   fill(rcolor2[t],gcolor2[t],bcolor2[t]);
    // }

    background(0);
    
  }
  function draw() {

    ellipse(mouseX-random(20), mouseY-random(20), 20, 20);
    stroke(0);
    fill(255,255,255);
    if (mouseIsPressed){
        fill(255,0,0);
    }
    
  }