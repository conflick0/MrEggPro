function showNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

const mainHeight = document.getElementById('main').offsetHeight;/*includes padding border.*/

window.onscroll = function() {extend_hr()};

function extend_hr() {
    var target_pos = mainHeight-500;
    var current_pos = document.documentElement.scrollTop;

    if ( current_pos > target_pos ) {
        document.getElementById("hr").className = "hr extend";
    } else {
        document.getElementById("hr").className = "hr";
    }
}




