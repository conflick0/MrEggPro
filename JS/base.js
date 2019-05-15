function showNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

document.addEventListener("keydown", move_man, false);

function move_man(event) {
    var key_event = event.key;
    var one_punch_man = document.getElementById("one-punch-man");
    var posY = 0, posX=0;
    if (key_event === "ArrowUp") {
        one_punch_man.style.transform = "rotateX(360deg)";
        posY = one_punch_man.offsetTop - 50;
        if(posY > 0){
            one_punch_man.style.top = posY +"px";
        }
    }
    else if (key_event === "ArrowDown") {
        one_punch_man.style.transform = "rotateX(180deg)";
        posY = one_punch_man.offsetTop + 50;
        if(posY < document.body.offsetHeight-200){
            one_punch_man.style.top = posY +"px";
        }

    }

    else if (key_event === "ArrowRight") {
        one_punch_man.style.transform = "rotate(90deg)";
        posX = one_punch_man.offsetLeft + 50;
        if(posX < document.body.offsetWidth-120){
            one_punch_man.style.left = posX +"px";
        }
    }
    else if (key_event === "ArrowLeft") {
        one_punch_man.style.transform = "rotate(-90deg)";
        posX = one_punch_man.offsetLeft - 50;
        if(posX > 0){
            one_punch_man.style.left = posX +"px";
        }
    }

}

