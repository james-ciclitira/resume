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


/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var $name = $('#name');
    var iName = inName($name.text()) || function(){};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
var clickLocations = [];

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
  // your code goes here!
});



