var particleArray = [];
var SCREEN_WIDTH = 1290;
var SCREEN_HEIGHT = 1080;
var Particles = [];

var colorTheme=new Array("93,16,54","198,19,89","247,222,235","24,6,19");





var keysDown = {};
var clickDown;
window.addEventListener('keydown', function(e) {

    move(e.keyCode);
});
window.addEventListener('mousedown', function(e) {

    clickDown = true;
});
window.addEventListener('mouseup', function(e) {

    clickDown = false;
});



var mouseX;
var mouseY;
var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d');
canvas.width = (SCREEN_WIDTH);
canvas.height = (SCREEN_HEIGHT);
document.body.appendChild(canvas);

var moncanvas = document.getElementById('canvas');

function getMousePos(canvas, evt) {
    mouseX = evt.clientX;
    mouseY = evt.clientY;

}




canvas.addEventListener('mousemove', function(evt) {
    getMousePos(moncanvas, evt);
}, false);


var Particle = function(x, y, indexNb) {
    this.index = indexNb;
    this.x = x;
    this.y = y;
    this.speedX =Math.floor((Math.random() * 10)) +2;
    this.speedY =  Math.floor((Math.random() * 1)) +1;

    if(this.y > SCREEN_HEIGHT/2)
    {
        this.speedY = -this.speedY;
    }

    this.grip = false;
    this.color = colorTheme[Math.floor((Math.random() * 4)) ] ;
    this.opacity = 1;
    this.size = 30;

}







Particle.prototype = {

    render: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.floor((Math.random() * 2) + this.size), 0, 2 * Math.PI, false);
   
        ctx.globalAlpha = this.opacity;
          ctx.fillStyle = "rgb("+this.color+ ")";
        ctx.fill();
    },
    update: function() {

        if(this.x > (SCREEN_WIDTH /2))
        {
             this.opacity -= 0.003;

                if (this.size > 1) {
             this.size-=0.3;
                  };
        }
       

     
       

        this.x += this.speedX;

       
       
            this.y += this.speedY;
        
       


        if (this.x > SCREEN_WIDTH) {
           
            // particleArray.pop();
            // console.log(particleArray.length);
        }
        if (this.x < 0) {
            this.x = SCREEN_WIDTH;
        }
        if (this.y < 0) {
            this.y = SCREEN_HEIGHT;
        }

       

    },
    distance: function() {
        if (Math.sqrt(((this.x - mouseX) * (this.x - mouseX)) + ((this.y - mouseY) * (this.y - mouseY))) < 300) {
            this.grip = true;
        } else this.grip = false;
    },
    gripme: function() {
        if (this.x > mouseX) {
            this.x -= 2;
        } else {
            this.x += 2;
        }
        if (this.y > mouseY) {
            this.y -= 2;
        } else {
            this.y += 2;
        }
    }
}





function draw() {
    ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);


    for (var i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
        particleArray[i].render();

        // particleArray[i].distance();
        // if (!particleArray[i].grip){
        //         particleArray[i].update();
        // }
        // else if(clickDown)  {
        //     particleArray[i].gripme();
        // }
        // particleArray[i].render();
    }


}

setInterval(draw, 25);