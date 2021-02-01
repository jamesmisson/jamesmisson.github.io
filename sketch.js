//ripples
let v = 40; //growth speed
let ripples = [];
let newRipples = [];

var r = 60; //radius
let alpha = 'fybslmsolohsqrxlobolwcvqfubntrytndypuctudyfsegtshsfmevfxkvgrytrkslmzyglahelmcyfyhvgeylvbrfwacptadofmcolcbspcrlsbelmevpfxhcfmyotzdcqcnlodalsyxqlrbotwrmctudegnrludstwayqlchatnnlvhsqnrfebrfmsaptskstwaufehcpyrlsbnlraspfsbzfnytrdrgeelckztmcugfedelnrlykompcrtxbctmysgfsbmytwastrdygectudrlmcogtskxlwaofxhzgszlahelwvsptzdulcufsbzgaslnkztsurgfvbvfwyzlzkzqnytcwhxtmyxgtubxlwyntckoqeztrdulwraqfobvfovtxhapncfxhrlwvxpfvhxflnxlskngcztahelmyvglybctmcefehuqoetrdutwzaglakxlmuetskuqzrfehvtmcnptohufwnytuwdugyefebrlweuqfedvlweyfekrpsomtubufwvuptndntwootekaqaufsdvtwuxqlzdvtmvclvhnqxstnhulwseqfzdrtseolykygnotykolwsegtykotmovtndegcotsbslwueqtodyfwuofchaqertobstwrcpfadsfmezfskzqyxfrkxtmysqtobzlwyalnbugortnhofwevpfekylmevfshrqoytndatmsuptnkyfwsztzbnpyztxkclwecqlshnfwvxlxhxgmxmztvbvtmoxpfckrfmvrtydvpocteknfmerqtcbulwxcfadzpcytabztmxnqfrdztmxsfyhzqrzfzdslmrvqtyhrfwrofrbuqvotxhalmszqtsdzfwzstobuqxrtcbvfwrcqtskotmxrfudsqeufxdztmncplubxfmaafrdrqeetukulfssgtckylmxutzkrgsolsdofsyqfydztwzvlrkrgustsdufmacqlohctwsntudagrylrhzlwayplydyfmnrlybzpszfcbufmuxqlakefwsvfudagzslvhofmnyqlvkvfwcvlcdnqyzlahxfwcuqtvbnlmsylskapcxlvdntwospfshefwxxfxdeqavlobotweoqfrbzfwacloknpculchvtmrxpfsdelwvelohrgyxlxbvtmeyg';

let counter = 0;
let s = 1;

let myFont;
function preload() {
  myFont = loadFont('CloisterBlack.ttf');
}

function setup() {
  var myCanvas = createCanvas(windowWidth / 2, windowHeight - 200);
    myCanvas.parent("canvasdiv");
}

class Ripple {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.r = r;
  }
  grow() {
    this.r += v;
  }
}

function draw() {
  background(255);

  let xgap = 18;
  let ygap = 23;
  let counter = 0

  // Loop as long as there is space on the canvas
  for (let y = 40; y < windowHeight - 250; y += ygap) {
    for (let x = 20; x < (windowWidth/ 2) - 20; x += xgap) {

    let letter = alpha[counter];
    fill(0)
    textFont(myFont)
    textAlign(CENTER, BASELINE);
    

        
    if (dist(x, y, mouseX, mouseY) < r) {
          textSize(17), textFont('Times New Roman'), textStyle(ITALIC), fill(0);
      }
        
//      else if (dist(x ,y, mouseX, mouseY) >= r && dist(x,y, mouseX, mouseY) <= r + 60) {
//          fill(0), textSize(18), textFont('Times New Roman'), textStyle(NORMAL);
//      }
    
    else {
        textSize(25)
           }

    for (let i = 0; i < ripples.length; i++) {
        if (dist(x, y, ripples[i].x, ripples[i].y) < ripples[i].r && dist(x, y, ripples[i].x, ripples[i].y) > ripples[i].r - 40){
          fill(0), textSize(17), textFont('Times New Roman'), textStyle(NORMAL), fill(0);
        }
    }
     
      // Draw the letter
    text(letter, x, y);

      // move to next letter
    counter++ 
        
}
}
      if (mouseIsPressed) {
    append(ripples, new Ripple());
    // console.log(ripples.length);
  }

  for (let i = 0; i < ripples.length; i++) {
    ripples[i].grow();
    // console.log(ripples[i].r)
  }

  
  for (let i = 0; i < ripples.length; i++) {
    if (ripples[i].r <= 1200) {
      append(newRipples, ripples[i])
    }
  }
  ripples = newRipples;
  newRipples = []; 
}

function mouseClicked() {
    append(ripples, new Ripple());
    // console.log(ripples.length);
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}