var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<h3 >%data%</h3>';

var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="contacts">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="contacts">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contacts">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contacts">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="contacts">%data%</span></li>';
var HTMLlocation = '<li data-type="number" class="flex-item"><span class="contacts">%data%</span></li>';

var HTMLbioPic = "<img src='%data%' class='biopic'>";
var HTMLabout = '<hr><h3>About</h3><p id="about">%data%</<p><hr>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="skills"><span>%data%</span></li>';
var development ='<div class="media "><a class="media-left" "><img class="media-object" src=%data%"></a><div class="media-body "><h4 class="media-heading">"%title%"</h4>"%body%"</div></div>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12"><div class="card"><div class="card-image"><img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = "<a href='#'>%data%";
var HTMLschoolDegree = ' - %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Degree: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = "<a href='#'>%data%";
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

var HTMLtools = '<div class="media"><a class="media-left"><img class="media-object" src=#></a><div class="media-body"><h4 class="media-heading-2">%data%</h4></div></div>';
var HTMLtools2 = '<div class="media"><a class="media-left"><img class="media-object" src=#></a><div class="media-body"><h4 class="media-heading-2">%data%</h4></div></div>';
var HTMLdevelopment = '<div class="media"><a class="media-left"><img class="media-object" src=#></a><div class="media-body"><h4 class="media-heading-2">%data%</h4></div></div>';

$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY)
});



var map;

function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  map = new google.maps.Map(document.querySelector('#map'), mapOptions);

  function locationFinder() {

    var locations = [];

    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    work.jobs.forEach(function(job){
      locations.push(job.location);
    });

    return locations;
  }


  function createMapMarker(placeData) {

    var lat = placeData.geometry.location.lat();
    var lon = placeData.geometry.location.lng();
    var name = placeData.formatted_address;
    var bounds = window.mapBounds;

    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    google.maps.event.addListener(marker, 'click', function() {
    });

    bounds.extend(new google.maps.LatLng(lat, lon));
    map.fitBounds(bounds);
    map.setCenter(bounds.getCenter());
  }

    function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  function pinPoster(locations) {
    var service = new google.maps.places.PlacesService(map);
 locations.forEach(function(place){
      var request = {
        query: place
      };

      service.textSearch(request, callback);
    });
  }

  window.mapBounds = new google.maps.LatLngBounds();

  locations = locationFinder();

  pinPoster(locations);

}

window.addEventListener('load', initializeMap);




