$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

$('.carousel').carousel({
  interval: 5000,
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

// var infowindow = new google.maps.InfoWindow();

//Maps//
function initMap() {
  var centeron = {lat: 50.86675, lng: -0.08655};
  var artsa2 = {lat: 50.866054, lng: -0.088944};
  var clubhouse = {lat: 50.867736, lng: -0.080648};
  var eastslope = {lat: 50.869398, lng: -0.088152};
  var falmerbar = {lat: 50.864566, lng: -0.0887211};
  var MeetingRoom3 = {lat: 50.864502, lng: -0.088217};
  var library = {lat: 50.865302, lng: -0.089784};
  var room76 = {lat: 50.864092, lng: -0.0888312};
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
  var vip = {lat: 50.820761, lng: -0.136762};
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

  //Info window

  var infowindow = new google.maps.InfoWindow();

  google.maps.event.addListener(infowindow, 'domready', function() {
    var iwOuter = $('.gm-style-iw');
    var iwBackground = iwOuter.prev();
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
  });


  //Markers of places

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

  var marker_MeetingRoom3 = new google.maps.Marker({
    position: MeetingRoom3,
    map: mapon,
    icon: "ic_flag_red.png",
    title: "Meeting Room 3",
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

//functions to open and to set content to infowindows

function artsa2_info() {
  infowindow.setContent('<h4 id="infowindow-text">Arts A 002</h4>');
  infowindow.open(mapon, marker_artsa2);
  };

function clubhouse_info() {
  infowindow.setContent('<h4 id="infowindow-text">The Clubhouse</h4>');
  infowindow.open(mapon, marker_clubhouse);
  };

function duomo_info() {
  infowindow.setContent('<h4 id="infowindow-text">Al Duomo</h4>');
  infowindow.open(mapoff, marker_duomo);
  };

function eastslope_info() {
  infowindow.setContent('<h4 id="infowindow-text">East Slope Bar</h4>');
  infowindow.open(mapon, marker_eastslope);
  };

function falmerbar_info() {
  infowindow.setContent('<h4 id="infowindow-text">Falmer Bar</h4>');
  infowindow.open(mapon, marker_falmer);
  };

function library_info() {
  infowindow.setContent('<h4 id="infowindow-text">US Library</h4>');
  infowindow.open(mapon, marker_library);
  };

function MeetingRoom3_info() {
  infowindow.setContent('<h4 id="infowindow-text">Meeting Room 3</h4>');
  infowindow.open(mapon, marker_MeetingRoom3);
  };

function nuposto_info() {
  infowindow.setContent('<h4 id="infowindow-text">Nu Posto</h4>');
  infowindow.open(mapoff, marker_nuposto);
  };

function room76_info() {
  infowindow.setContent('<h4 id="infowindow-text">Room 76</h4>');
  infowindow.open(mapon, marker_room76);
};

function vip_info() {
  infowindow.setContent('<h4 id="infowindow-text">VIP<br>Very Italian Pizza</h4>');
  infowindow.open(mapoff, marker_vip);
  };


//Open Infowindows when clicking on Markers
google.maps.event.addListener(marker_artsa2, 'click', artsa2_info);
google.maps.event.addListener(marker_clubhouse, 'click', clubhouse_info);
google.maps.event.addListener(marker_duomo, 'click', duomo_info);
google.maps.event.addListener(marker_eastslope, 'click', eastslope_info);
google.maps.event.addListener(marker_falmer, 'click', falmerbar_info);
google.maps.event.addListener(marker_library, 'click', library_info);
google.maps.event.addListener(marker_MeetingRoom3, 'click', MeetingRoom3_info);
google.maps.event.addListener(marker_nuposto, 'click', nuposto_info);
google.maps.event.addListener(marker_room76, 'click', room76_info);
google.maps.event.addListener(marker_vip, 'click', vip_info);

//Close InfoWindow when clicking on maps
google.maps.event.addListener(mapon, 'click', function() {
    infowindow.close(mapon, this);
  });
google.maps.event.addListener(mapoff, 'click', function() {
    infowindow.close(mapoff, this);
  });

//Click on pictures sends to corresponding map//

  $(".artsa2, .clubhouse, .eastslope, .falmerbar, .library, .MeetingRoom3, .room76").click(function() {
      $('html,body').animate({
          scrollTop: $("#mapon").offset().top},
          'slow');
  });
  $(".duomo, .nuposto, .vip").click(function() {
      $('html,body').animate({
          scrollTop: $("#mapoff").offset().top},
          'slow');
  });

//Click on pictures opens corresponding info window
  $(".artsa2").click(artsa2_info);
  $(".clubhouse").click(clubhouse_info);
  $(".duomo").click(duomo_info);
  $(".eastslope").click(room76_info);
  $(".falmer").click(falmerbar_info);
  $(".library").click(library_info);
  $(".MeetingRoom3").click(MeetingRoom3_info);
  $(".nuposto").click(nuposto_info);
  $(".room76").click(room76_info);
  $(".vip").click(vip_info);


} //keep this!
