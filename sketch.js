// 背景の色
let bg = ["#060301"];
// グラデーションの色　上, 下
let gradationpallet1 = [
  "#193c46",
  "#f34e3f",
  "#775954",
];
let gradationpallet2 = [
  "#d99830",
  "#d6ccc4",
  "#341d17",
 ];
 var balls = []  //所有球的資料內容
 var ball  //正在處理的球
 class ball_class{  //宣告一個ball_class物件，
   constructor(args){  //描述物件的初始值，只有設定物件的資料內容   
     this.p= args.p || {x:width/2,y:height/2}
     this.w=args.w || random(30,50)
     this.h=random(30,50)
     this.v= args.v || {x:random(-2,2),y:random(-2,2)}
     this.a = args.a || {x:0,y:random(0,5,1,2)} //加速度

     this.gdcolor1 = random(gradationpallet1);
     this.gdcolor2 = random(gradationpallet2);

   }
   draw(){   //畫出物件畫面的程式碼，一個物件繪出的程式碼    
    push();
    translate(this.p.x, this.p.y);
          
    //　どこからどこにかけてのグラデーションか
    let gradient = drawingContext.createLinearGradient(
      this.w / 2,
      -this.h / 2,
      this.w / 2,
      this.h / 2
    );

    // グラデーションの色(gradationpalletからランダムに決定)
    //let gdcolor1 = random(gradationpallet1);
    //let gdcolor2 = random(gradationpallet2);

    // グラデーションの設定(0～1 の間のどこに, その色を置く)
    gradient.addColorStop(0, this.gdcolor1);
    gradient.addColorStop(1, this.gdcolor2);

    // このグラデーションの線
    drawingContext.strokeStyle = gradient;

    let d = this.w * 0.6;
    strokeWeight(d);
    strokeCap(SQUARE);
    line(- d / 6, - d / 6, d / 4, d / 6);
    
    strokeWeight(d / 6);
    strokeCap(ROUND);
    stroke(bg);
    line(- d / 6, - d / 6, d / 4, d / 6);
    
    pop();
   }
 
  
   update(){  //物件移動更新後的程式碼
    this.p.x = this.p.x + this.v.x  //x軸
    this.p.y = this.p.y + this.v.y  //y軸 
    this.v.y = this.v.y + this.a.y
    
    this.v.x = this.v.x*0.99
    this.v.y = this.v.y*0.99
    if(this.p.x<0){
      this.v.x = -this.v.x
     }
    if(this.p.x>width){
      this.v.x = -this.v.x
     }
     if(this.p.y<0){
      this.v.y = -this.v.y
     }
     if(this.p.y>height){
      this.v.y = -this.v.y
     }
    

    }
  
  
  }

 
function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i=0;i<80;i=i+1){
    ball = new ball_class(
      {
        p:{x:random(0,width),y:random(0,height)},
        w:random(100,200),
        h:random(100,200),
        v:{x:random(-2,2),y:random(2,2)},
        a:{x:0,y:0}

      }
    )
    balls.push(ball)
  }
}

function draw() {
  background(bg);
  for(j=0;j<balls.length;j=j+1){
    ball = balls[j]
    ball.draw()
    ball.update()
  }

}

  



