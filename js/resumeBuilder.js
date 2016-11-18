// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.
function main() {
    return 'Hello, World!';
}

main();

var bio = {
    "name": "James Ciclitra",
    "role": "DESIGNER  &  WEB DEVELOPER",
    "welcomeMessage": "Lorem ipsum dolor sit amet, semper repudiare ei quo, eam no ullum altera voluptua, ea eum augue probatus. At duo cibo sale consul. Ut eius ocurreret pri, amet indoctum vix at. An qui ceteros mandamus assueverit, ea mucius euripidis philosophia meRationibus liberavisse ne ius, integre sententiae eu eum, at duo dicat noster. Maiorum omnesque legere aeterno disseneat.Nam harum corrumpit ad, ut latine molestie qui. Sea ipsum torquatos expetenda temporibus. Ut nihil atomorum ius, probatus concludaturque ne usu, in sea partiendo aliquando, per  facer everti consequat.Qui no minimum partiendo assueverit, ea sit oporteat persecuti, ei fugit ullum mnesarchum soluta repudiare reformidans in eam!",
    "contacts": [{
        "email": "jciclitira@gmail.com",
        "twitter": "@jimi_design",
        "location": "London",
        "mobile": "093423234423432"
    }],
    "bioPic": "images/bio.png",
    "skills": ["Sketching", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframes", "Grid & Layout", "Color Theory", "Typography", "Design Research", "Visual Design"],
    "tools": ["Abobe Photoshop <span>★</span><span>★</span><span>★</span><span>☆</span><span>☆</span>", "Abobe Illustrator <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>", "Abobe Indesign <span>★</span><span>★</span><span>☆</span><span>☆</span><span>☆</span>", "Sketch<span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>", "invision<span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>", "SolidWorks <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>", "Principle <span>★</span><span>★</span><span>☆</span><span>☆</span><span>☆</span>"]
};


var education = {
    "schools": [{
        "name": "Edinburgh College Of Art",
        "location": "Edinburgh",
        "degree": "Product Design",
        "majors": "BA (Hons)",
        "dates": "2011 - 2015",
        "url": "http://www.eca.ed.ac.uk/school-of-design/undergraduate/product-design-ba-hons"
    }, ],
    "onlinecourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2015 - 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001?v=fe1"
    }]
};



var work = {
    "jobs": [{
            "employer": "CrowdScores",
            "title": "Mobile designer",
            "location": "London - United Kingdom",
            "dates": "September 2015 - present",
            "description": "CrowdScores is a real-time sports data application." +
                " Developing technology to crowdsource data from more than 200 football competitions from 117 different countries and cover around 1300 matches on an average week.",
            "url": "http://crowdscores.com/"

        },


        {
            "employer": "Sam Labs",
            "title": "Design intern",
            "location": "London - United Kingdom",
            "dates": "August- September 2015",
            "description": "I developed a edicuational" +
                "included design, development and deplophical user interfaces.",
            "url": "http://samlabs.com/"
        }
    ]
};

var projects = {
    "project": [{
        "title": "Udacity portfolio project",
        "dates": "2016",
        "description": "This web page is my portfolio page, and it was the first project for Udacity's Front-End Nanodegree. The project was built on Google App Engine with Bootstrap, and the project was focused on using Bootstrap’s grid styling system to style the responsive and organized wep page more easily.",
        "images": ["images/web1.png", "images/web2.png", "images/web3.png"],
        "url": "https://github.com/james-ciclitira"

    }, {
        "title": "CrowdScores mobile design",
        "dates": "2016",
        "description": "I took the Structural Elements sticker sheet from Google's recent release of Material Design and converted for use in Sketch. From Google: Structural Elements The Structural Elements sticker sheet contains various elements that make up all of the CrowdScores layouts.",
        "images": ["images/nexus.png", "images/players.png", "images/nexus.png"],
        "url": "https://github.com/james-ciclitira"

    }]
};


bio.display = function() {
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(Role).prepend(Name);

    for (var contacts in bio.contacts) {
        var Location = HTMLlocation.replace("%data%", bio.contacts[contacts].location);
        var Email = HTMLemail.replace("%data%", bio.contacts[contacts].email);
        var Twitter = HTMLtwitter.replace("%data%", bio.contacts[contacts].twitter);
        $("#topContacts").append(Location).append(Email).append(Twitter);
        $("#footer").append(Location).append(Email).append(Twitter);

    }


    for (var skills in bio.skills) {
        var Skills = HTMLskills.replace("%data%", bio.skills[skills]);
        $("#skills").append(Skills);
    }


    for (var tools in bio.tools) {
        var formattedSkills = HTMLskills.replace("%data%", bio.tools[tools]);
        $("#tools").append(formattedSkills);
    }

    var welcomeMessage = HTMLabout.replace("%data%", bio.welcomeMessage);
    $("#about").append(welcomeMessage);

};

work.display = function() {
    if (work.jobs.length > 0) {

        for (var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            var location = HTMLworkLocation.replace("%data%", work.jobs[job].location);

            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription, location);
        }
    }
};



education.display = function() {
    for (var school in education.schools) {

        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $("#education").append(formattedName + formattedDegree, formattedDates, formattedLocation);

    }
    for (var onlinecourses in education.onlinecourses) {
        $("#education").append(HTMLonlineClasses);
        var OnlineTitle = HTMLonlineTitle.replace('%data%', education.onlinecourses[onlinecourses].title).replace("#", education.onlinecourses[onlinecourses].url);
        var School = HTMLonlineSchool.replace("%data%", education.onlinecourses[onlinecourses].school);
        var dates = HTMLonlineDates.replace("%data%", education.onlinecourses[onlinecourses].dates);
        $("#education").append(OnlineTitle + School, dates);


    }
};


projects.display = function() {
    for (var item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title).replace("#", projects.project[item].url);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }

    }
};

bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);




/*  function inName(name) {
    var internationalName = name;
    console.log(name);

    internationalName = internationalName[0].toUpperCase() +
        internationalName.slice(1, internationalName.indexOf(" ") +
            1).toLowerCase() + internationalName.slice(internationalName.indexOf(" ") + 1).toUpperCase();

    return internationalName;
};
$("#lets-connect").append(internationalizeButton);

*/