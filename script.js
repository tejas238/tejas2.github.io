window.onload = function() {   
    document.getElementById("aboutmecircle").onclick = function() {
        path = document.getElementById("aboutmepath").classList.add("animatelinemove");
        document.getElementById("aboutmecircle").style.visibility = "hidden";
        document.getElementById("aboutme").style.visibility = "visible";
        document.getElementById("aboutme").style.animation = "fadein 2s";

    }
    
    document.getElementById("contactmecircle").onclick = function() {
            path = document.getElementById("contactmepath").classList.add("animatelinemove");
            document.getElementById("contactmecircle").style.visibility = "hidden";
            document.getElementById("contact").style.visibility = "visible";
            document.getElementById("contact").style.animation = "fadein 2s";
    }
    
    document.getElementById("linkscircle").onclick = function() {
            path = document.getElementById("linkspath").classList.add("animatelinemove");
            document.getElementById("linkscircle").style.visibility = "hidden";
            document.getElementById("links").style.visibility = "visible";
            document.getElementById("links").style.animation = "fadein 2s";
    }

    document.getElementById("projectscircle").onclick = function() {
        path = document.getElementById("projectspath").classList.add("animatelinemove");
        document.getElementById("projectscircle").style.visibility = "hidden";
        document.getElementById("projects").style.visibility = "visible";
        document.getElementById("projects").style.animation = "fadein 2s";
    }
}