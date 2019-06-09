function showNav() {
    var x = document.getElementById("topNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

window.onscroll = function() {extend_hr()};

function extend_hr() {
    var mainHeight = document.getElementById('main').offsetHeight;/*includes padding border.*/
    var contactHeight = document.getElementById('contact-container').offsetHeight;/*includes padding border.*/

    var target_pos = mainHeight-2*contactHeight;
    var current_pos = document.documentElement.scrollTop;
    /*document.getElementById('debug').innerHTML = target_pos +'<br>'+ current_pos + "hr" + contactHeight;*/
    if ( current_pos > target_pos ) {
        document.getElementById("hr").className = "hr extend";
        /*document.getElementById('debug').innerHTML = target_pos +'<br>'+ current_pos + "hit" + contactHeight;*/
    } else {
        document.getElementById("hr").className = "hr";
    }
}




