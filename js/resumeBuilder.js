function main() {
    return 'Hello, World!';
}

main();

var bio = {
    "name": "James Ciclitra",
    "role": "Product designer  &  web developer",
    "welcomeMessage": "I am a London based product/mobile designer. I have spend the last year and a half as the design lead for a mobile startup working on both iOS and android platform. In this time I have had the chance to tackle a array of challenges, in a number fields such as UI, UX, motion and visual design as well as working within the marketing department in order to produce promotional product and material. My passion is developing clean, effective and useable interfaces. I am happy and able to work on either an iOS platform or Android but my preference is the former. I am a strong believer of material design principles and lover all things Google. <br><br>Within my current position at CrowdScores, we produce a social football scores network for both Android and iOS platforms. We have a strong mobile development team with two developers per platform. I am not a huge football fan but that has not mattered as my passion is to create a great product irrespective of the field or market. I have been working as the principal designer with feedback and input from the rest of the company. Being the sole design lead has been a challenge at times, but it has been a great learning experience. I have had the opportunity to work closely with an amazing development team and marketing department.<br><br>When I joined CrowdScores we had 47,000 monthly users. We are now approaching half a million, and still growing! It has been a brilliant project to work on. For my career development I have decided that I need to move to a larger team, while still working as an in-house designer for one brand. Although I have learnt a lot about football in the time that I have spent in my current position, I am still not the biggest football fan and am looking for something new. I am naturally inquisitive and always interested in learning new things. At the moment, I am working on a front-end web development Nanodegree offered by Udacity. I am halfway though the course and am keen to follow this with the Android basic Nanodegree.",
    "contacts": [{
        "email": "Email:     jciclitira@gmail.com",
        "twitter": "Mobile:     07847395121",
        "location": "Location:     London",
        "mobile": "093423234423432"
    }],
    "bioPic": "images/bio.png",
    "skills": ["Sketching", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframes", "Grid & Layout", "Color Theory", "Typography", "Design Research", "Visual Design"],
    "tools": ["Abobe Photoshop", "Abobe Illustrator", "Abobe Indesign", "Sketch", "Invision", "SolidWorks", "Principle"]
};


var development = {
        "development": ["HTML", "CSS", "Javascript"],
        "images": ["html.svg", "css.svg", "js.svg"],
        "body":["jimmmy jimmy jim", "jimmmy jimmy jim","jimmmy jimmy jim"]
};


var education = {
    "schools": [{
        "name": "Edinburgh College Of Art",
        "location": "Edinburgh",
        "degree": "Product Design",
        "majors": "2:1 BA (Hons)",
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
            "description": "CrowdScores is a real-time sports data application. I had the pleasure of being the design lead and taking responsibility for a variety of roles including, designing the mobile application, conducting research, conceptualising ideas, building mockup prototypes, and finally creating promotional material for the marketing department. On a whole I have enjoyed the time I have spend here, as it has been a valuable learning experience but I feel it is time for a change.",
            "url": "http://CrowdScores.com/"
        },

        {
            "employer": "SamLab",
            "title": "Designer Intern",
            "location": "London - United Kingdom",
            "dates": "August 2015 - August 2015",
            "description": "With SAM smart construction kit, you create awesome inventions with wireless block. I work here for a few weeks after meeting at New Designers to help develop a education package.",
            "url": "http://SamLab.com/"
        }
    ]
};

var projects = {
    "project": [{
        "title": "Udacity portfolio project",
        "dates": "2016",
        "description": "The portfolio page, and it was the first project undertake for Udacity's Front-End Nanodegree. The project was built on Google App Engine with Bootstrap, with a focus on using Bootstrap’s grid styling system to style a responsive and organized wep page more easily.",
        "images": ["images/web1.png", "images/web2.png", "images/web3.png"],
        "url": "https://github.com/james-ciclitira/udacity_protfolio_project"

    }, {
        "title": "CrowdScores mobile design",
        "dates": "2016",
        "description": "After taking Structural Elements from Google's Material Design stickersheet I produced the CrowdScores sticker sheet containing various elements that makeup the majority all of the CrowdScores layouts.",
        "images": ["images/nexus.png", "images/players.png", "images/samsung.png"],
        "url": "https://github.com/james-ciclitira/Stickersheets"

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





development.display = function() {
    var images = development.replace("%data%", development.images);
    var development = development.replace("%title%", development.development);
    var body = development.replace("%body%", development.body);

    $("#development").prepend(images).prepend(development).prepend(body);

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

        $("#education").append(formattedName + formattedDegree, formattedMajor, formattedDates, formattedLocation);

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
development.display();




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