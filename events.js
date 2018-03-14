<!--Maps-->
function initMap() {
  var centeron = {lat: 50.86612, lng: -0.08655};
  var falmerbar = {lat: 50.864566, lng: -0.088871};
  var artsa2 = {lat: 50.865772, lng: -0.088742};
  var room76 = {lat: 50.864292, lng: -0.088835}
  var mapon = new google.maps.Map(document.getElementById('mapon'), {
    zoom: 16,
    center: centeron
  });

  var centeroff = {lat: 50.825301, lng: -0.135794};
  var vip = {lat: 50.820874, lng: -0.136496};
  var mapoff = new google.maps.Map(document.getElementById('mapoff'), {
    zoom: 15,
    center: centeroff
  });

  <!--Markers of places-->
  var marker = new google.maps.Marker({
    position: falmerbar,
    map: mapon,
    icon: "bar.png"
  });

  var marker = new google.maps.Marker({
    position: vip,
    map: mapoff,
    icon: "food.png"
  });

  var marker = new google.maps.Marker({
    position: artsa2,
    maps: mapon,
    icon: "cinema.png"
  })

  <!--When user clicks on a flag, sends to marker on map-->
