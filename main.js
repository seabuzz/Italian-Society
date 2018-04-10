$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('.carousel').carousel({
  interval: 5000,
});

/*profile cards*/


$(document).ready(function(){
    $("#belena").click(function(){
        $("#elena").slideToggle("slow");

    });
});
$(document).ready(function(){
    $("#bluca").click(function(){
        $("#luca").slideToggle("slow");

    });
});

$(document).ready(function(){
    $("#bjosh").click(function(){
        $("#josh").slideToggle("slow");

    });
});


$(document).ready(function(){
    $("#bsilvia").click(function(){
        $("#silvia").slideToggle("slow");

    });
});

$(document).ready(function(){
    $("#blaura").click(function(){
        $("#laura").slideToggle("slow");

    });
});

