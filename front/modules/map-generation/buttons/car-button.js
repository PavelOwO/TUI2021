function createCarButton() {
    var btnRetry = {
        x:canvas.width/2 - 60,
    y:canvas.height/2 - 20,
    w:120,
    h:40,
    text:"Retry",
    state:"default",
    draw: function(){
        ctx.font = "20px Arial ";
        switch(this.state){
            case "over":      
            ctx.fillStyle = "darkred";
                ctx.fillRect(this.x,this.y,this.w,this.h);
            ctx.fillStyle = "black";
            ctx.fillText("Retry?",this.x+this.w/2 - ctx.measureText("Retry").width/2,this.y+this.h/2+10 );
        break;
            default:
            ctx.fillStyle = "red";
                ctx.fillRect(this.x,this.y,this.w,this.h);
            ctx.fillStyle = "black";
            ctx.fillText("Retry",this.x+this.w/2 - ctx.measureText("Retry").width/2,this.y+this.h/2+10 );
        }
    }
    };
    btnRetry.draw();
    canvas.addEventListener("mousedown",function(e){
            if(checkCollision(e.offsetX,e.offsetY,btnRetry ))
            alert("Retrying!")
    },false);
    
    
    canvas.addEventListener("mousemove",function(e){
    btnRetry.state = checkCollision(e.offsetX,e.offsetY,btnRetry )?"over":"def";
        btnRetry.draw();
    },false);
    
    function checkCollision(x,y,obj){//Проверяет входит ли точка в  прямоугольник
        return x >= obj.x && x <= obj.x + obj.w &&
        y >= obj.y && y <= obj.y + obj.h ;
    }
}

export default createCarButton;