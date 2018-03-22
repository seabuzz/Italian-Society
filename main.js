$('.carousel').carousel({
  interval: 5000,
});

//Maps//
function initMap() {
  var centeron = {lat: 50.86675, lng: -0.08655};
  var artsa2 = {lat: 50.865995, lng: -0.088664};
  var clubhouse = {lat: 50.867716, lng: -0.080648};
  var eastslope = {lat: 50.869398, lng: -0.088152};
  var falmerbar = {lat: 50.864566, lng: -0.0886611};
  var room76 = {lat: 50.864292, lng: -0.0888312};
  var library = {lat: 50.865302, lng: -0.089784};
  var mapon = new google.maps.Map(document.getElementById('mapon'), {
    zoom: 16,
    center: centeron,
    mapTypeId: 'satellite',
    styles: [
{
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
  });

  var centeroff = {lat: 50.825301, lng: -0.135794};
  var vip = {lat: 50.820874, lng: -0.136322};
  var nuposto = {lat: 50.821469, lng: -0.144854};
  var duomo = {lat: 50.822011, lng: -0.138166};
  var mapoff = new google.maps.Map(document.getElementById('mapoff'), {
    zoom: 15,
    center: centeroff,
    styles: [
{
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]
  });

  var infowindow = new google.maps.InfoWindow();

  //Markers of places//
  var marker_artsa2 = new google.maps.Marker({
    position: artsa2,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "Arts A002",
  });

  var marker_clubhouse = new google.maps.Marker({
    position: clubhouse,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "The Clubhouse",
  });

  var marker_duomo = new google.maps.Marker({
    position: duomo,
    map: mapoff,
    icon: "ic_flag_red.png",
    title: "Al Duomo",
  });

  var marker_eastslope = new google.maps.Marker({
    position: eastslope,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "East Slope Bar",
  });

  var marker_falmer = new google.maps.Marker({
    position: falmerbar,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "Falmer Bar",
  });

  var marker_library = new google.maps.Marker({
    position: library,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "US Library",
  });

  var marker_nuposto = new google.maps.Marker({
    position: nuposto,
    map: mapoff,
    icon: "ic_flag_red.png",
    title: "Nu Posto",
  });

  var marker_room76 = new google.maps.Marker({
    position: room76,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "Room 76",
  });

  var marker_vip = new google.maps.Marker({
    position: vip,
    map: mapoff,
    icon: "ic_flag_red.png",
    title: "Very Italian Pizza",
  });



google.maps.event.addListener(infowindow, 'domready', function() {
 var iwOuter = $('.gm-style-iw');
 var iwBackground = iwOuter.prev();
 iwBackground.children(':nth-child(2)').css({'display' : 'none'});
 iwBackground.children(':nth-child(4)').css({'display' : 'none'});
});

google.maps.event.addListener(marker_duomo, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">Al Duomo</h2><div><a href="#" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapoff, this);
  });
google.maps.event.addListener(marker_artsa2, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">Arts A 002</h2>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_clubhouse, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">The Clubhouse</h2><div><a href="https://www.facebook.com/falmerclubhouse" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_eastslope, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">East Slope Bar</h2><div><a href="https://www.facebook.com/eastslope" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_falmer, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">Falmer Bar</h2><div><a href="https://www.facebook.com/falmerbar" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_library, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">US Library</h2><div><a href="http://www.sussex.ac.uk/library/" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_nuposto, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">Nu Posto</h2><div><a href="http://www.nuposto.com/" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapoff, this);
  });
google.maps.event.addListener(marker_room76, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">Room 76</h2><div><a href="https://www.facebook.com/room76cafe" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapon, this);
  });
google.maps.event.addListener(marker_vip, 'click', function() {
    infowindow.setContent('<h2 id="infowindow-text">VIP<br>Very Italian Pizza</h2><div><a href="http://pizzavip.co.uk/" target="_blank"><i class="material-icons" style="color:black margin:0px; padding:0px;">info_outline</i></a></div>');
    infowindow.open(mapoff, this);
  });
google.maps.event.addListener(mapon, 'click', function() {
    infowindow.close(mapon, this);
  });
google.maps.event.addListener(mapoff, 'click', function() {
    infowindow.close(mapoff, this);
  });
} //keep this!!!//



//When user clicks on a flag, sends to map and opens corresponding info window//
$(".event-where").click(function() {
    $('html,body').animate({
        scrollTop: $("#maps").offset().top},
        'slow');
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
