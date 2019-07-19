
// 初始化
var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext('2d');
var flag = false;
drawSize();//初始化画布面积
window.onresize = function () {
    drawSize();//使画布能适应窗口变换
}
var eraserEnabled = false;//设置橡皮擦初始使用情况
var LastPoint = { x: undefined, y: undefined };


// 画圆
function drawCircle(x, y, radius) {
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
}

// 特性检测
if (document.body.ontouchstart !== undefined) {//触屏设备
    // 触摸点击
    canvas.ontouchstart = function (start) {
        // console.log(start);
        var x = start.touches[0].clientX;
        var y = start.touches[0].clientY;

        if (eraserEnabled) {
            flag = true
            ctx.clearRect(x - 5, y - 5, 10, 10)


        }
        else {
            flag = true;
            LastPoint = { x: x, y: y }
            // drawCircle(x, y,5);

        }


    }

    // 触摸移动
    canvas.ontouchmove = function (move) {
        var x = move.touches[0].clientX;
        var y = move.touches[0].clientY;

        if (eraserEnabled) {
            if (flag) {
                ctx.clearRect(x - 5, y - 5, 10, 10)
            }


        }
        else {
            if (flag) {

                var newPoint = { x: x, y: y }
                // drawCircle(x,y,5);
                drawLine(LastPoint.x, LastPoint.y, newPoint.x, newPoint.y);
                LastPoint = newPoint;

            }
        }
    }

    // 触摸松开
    canvas.ontouchend = function (up) {
        flag = false;

    }





}
else {
    // 非触屏设备

    // 鼠标点下
    canvas.onmousedown = function (down) {
        var x = down.clientX;
        var y = down.clientY;

        if (eraserEnabled) {
            flag = true
            ctx.clearRect(x - 5, y - 5, 10, 10)


        }
        else {
            flag = true;
            LastPoint = { x: x, y: y }
            // drawCircle(x, y,5);

        }



    }

    // 鼠标移动
    canvas.onmousemove = function (move) {
        var x = move.clientX;
        var y = move.clientY;

        if (eraserEnabled) {
            if (flag) {
                ctx.clearRect(x - 5, y - 5, 10, 10)
            }


        }
        else {
            if (flag) {

                var newPoint = { x: x, y: y }
                // drawCircle(x,y,5);
                drawLine(LastPoint.x, LastPoint.y, newPoint.x, newPoint.y);
                LastPoint = newPoint;

            }
        }
    }

    // 鼠标松开
    canvas.onmouseup = function (up) {
        flag = false;

    }
}



// 画线
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(x1, y1)

    ctx.lineTo(x2, y2)

    ctx.stroke()
    ctx.closePath()
}
// 设置画布
function drawSize() {
    var pageWidth = document.documentElement.clientWidth
    var pageHeight = document.documentElement.clientHeight
    canvas.width = pageWidth;
    canvas.height = pageHeight;
}
// 橡皮擦使用情况

pen.onclick = function () {
    eraserEnabled = false;
    pen.classList.add('active');
    eraser.classList.remove('active');
   

}

eraser.onclick = function () {
    eraserEnabled = true;
    eraser.classList.add('active');
    pen.classList.remove('active');

}
black.onclick=function(){
    black.classList.add('profiler');
    green.classList.remove('profiler');
    blue.classList.remove('profiler');
    red.classList.remove("profiler");
    // ctx.fillStyle="red";
    ctx.strokeStyle='black';
   

}
red.onclick=function(){
    red.classList.add('profiler');
    green.classList.remove('profiler');
    blue.classList.remove('profiler');
    black.classList.remove("profiler");
    // ctx.fillStyle="red";
    ctx.strokeStyle='red';
   

}
green.onclick=function(){

    green.classList.add('profiler');
    red.classList.remove('profiler');
    blue.classList.remove('profiler');
    black.classList.remove("profiler");
    ctx.strokeStyle='green';

}
blue.onclick=function(){

    blue.classList.add('profiler');
    red.classList.remove('profiler');
    green.classList.remove('profiler');
    black.classList.remove("profiler");
    ctx.strokeStyle='blue';
    
}


