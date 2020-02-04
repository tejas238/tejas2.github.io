window.onload = function() {   
    document.getElementById("aboutmecircle").onclick = function() {
        document.getElementById("aboutmepath").classList.add("animatelinemove");
    }
    
    document.getElementById("contactmecircle").onclick = function() {
            document.getElementById("contactmepath").classList.add("animatelinemove");
    }
    
    document.getElementById("linkscircle").onclick = function() {
            document.getElementById("linkspath").classList.add("animatelinemove");
    }
}