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
    $("#bjosh").click(function(){
        $("#josh").slideToggle("slow");

    });
});

$(document).ready(function(){
    $("#bluca").click(function(){
        $("#luca").slideToggle("slow");

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

/*video autoplay*/
$("#video1").each(function(){
    if ($(this).is(":in-viewport")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
})

$('#myModal').on('hidden.bs.modal', function () {
  $('#video1')[0].pause();
})
