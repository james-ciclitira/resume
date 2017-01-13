var bio = {
    "name": "James Ciclitra",
    "role": "Product and interface designer",
    "welcomeMessage": "I am a London based UI designer. I have spend the last year and a half as the design lead for a mobile startup working on both iOS and android platform. In this time I have had the chance to tackle a array of challenges, in a number fields such as UI, UX, motion and visual design as well as working within the marketing department in order to produce promotional product and material. My passion is developing clean, effective and useable interfaces. I am happy and able to work on either a Web, iOS or Android platform but my preference is the former. I am a strong believer of material design principles and lover all things Google. <br><br>Within my current position at CrowdScores, we produce a social football scores network for both Android and iOS platforms. We have a strong mobile development team with two developers per platform. I am not a huge football fan but that has not mattered as my passion is to create a great product irrespective of the field or market. I have been working as the principal designer with feedback and input from the rest of the company. Being the sole design lead has been a challenge at times, but it has been a great learning experience. I have had the opportunity to work closely with an amazing development team and marketing department.<br><br>When I joined CrowdScores we had 47,000 monthly users. We are now approaching half a million, and still growing! It has been a brilliant project to work on. For my career development I have decided that I need to move to a larger team, while still working as an in-house designer for one brand. Although I have learnt a lot about football in the time that I have spent in my current position, I am still not the biggest football fan and am looking for something new. I am naturally inquisitive and always interested in learning new things. At the moment, I am working on a front-end web development Nanodegree offered by Udacity. I am halfway though the course and am keen to follow this with the Android basic Nanodegree.",
    "contacts": [{
        "email": "Email: jciclitira@gmail.com",
        "twitter": "Mobile:     07847395121",
        "location": "Location:     London",
        "mobile": "07847395121",
        "github": "james-ciclitira"
    }],
    "biopic": "images/bio.png",
    "skills": ["Sketching", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframes", "Grid & Layout", "Color Theory", "Typography", "Design Research", "Visual Design"],
    "tools": ["Abobe Photoshop", "Abobe Illustrator", "Abobe Indesign", "Sketch", "Invision", "SolidWorks", "Principle"]
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
    }, {
        "employer": "SamLab",
        "title": "Designer Intern",
        "location": "London - United Kingdom",
        "dates": "August 2015 - August 2015",
        "description": "With SAM smart construction kit, you create awesome inventions with wireless block. I work here for a few weeks after meeting at New Designers to help develop a education package.",
        "url": "http://SamLab.com/"
    }]
};

var project = {
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

var tools = {
    "tools": [{
        "title": "Sketch",
        "image": ["images/sketch.svg"]
    }, {
        "title": "Photoshop",
        "image": ["images/Photoshop.svg"]
    }]
};

var tools2 = {
    "tools2": [{
        "title": "Illustrator",
        "image": ["images/Illustrator.svg"]
    }, {
        "title": "Invision",
        "image": ["images/invision.svg"]
    }]
};


var development = {
    "development": [{
        "title": "HTML",
        "image": ["images/html.svg"]
    }, {
        "title": "CSS",
        "image": ["images/css.svg"]
    }, {
        "title": "Javascript",
        "image": ["images/js.svg"]
    }]
};

bio.display = function() {
    var Name = HTMLheaderName.replace("%data%", bio.name);
    var Role = HTMLheaderRole.replace("%data%", bio.role);

    $("#header").prepend(Role).prepend(Name);

    bio.contacts.forEach(function(contacts) {
        var Location = HTMLlocation.replace("%data%", contacts.location);
        var Email = HTMLemail.replace("%data%", contacts.email);
        var Twitter = HTMLtwitter.replace("%data%", contacts.twitter);
        var Github = HTMLgithub.replace("%data%", contacts.github);
        $("#topContacts, #footer").append(Location).append(Email).append(Github);

    });

    //   for (var skills in bio.skills) {
    //       var Skills = HTMLskills.replace("%data%", bio.skills[skills]);
    //       $("#skills").append(Skills);
    //   }

    bio.skills.forEach(function(skills) {
        $("#skills").append(HTMLskills.replace("%data%", skills));
    });

    var welcomeMessage = HTMLabout.replace("%data%", bio.welcomeMessage);
    $("#about").append(welcomeMessage);

};


bio.display();

work.display = function() {

    if (work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function(jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", jobs.employer).replace("#", jobs.url);
            var formattedTitle = HTMLworkTitle.replace("%data%", jobs.title);
            var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);
            var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
            var location = HTMLworkLocation.replace("%data%", jobs.location);

            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription, location);
        });
    }
};

work.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedNameDegree = formattedSchoolName + formattedDegree;
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedSchoolDate);
    });

    $("#education").append(HTMLonlineClasses);

    education.onlinecourses.forEach(function(onlinecourses) {
        var formattedTitle = HTMLonlineTitle.replace("%data%", onlinecourses.title).replace("#", onlinecourses.url);
        var formattedSchool = HTMLonlineSchool.replace("%data%", onlinecourses.school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        var formattedDate = HTMLonlineDates.replace("%data%", onlinecourses.dates);

        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(formattedTitleSchool);
        $(".education-entry:last").append(formattedDate);

    });
};

education.display();

projects.display = function() {
    project.project.forEach(function(item) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", item.title).replace("#", item.url);
        var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        item.images.forEach(function(img) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img));
        });

        // for (var images in projects.images) {
        //     var images = HTMLprojectImage.replace("%data%", projects.images[images]);
        //     $(".project-entry:last").append(images);
        // }


    });
};

projects.display();

development.display = function() {

    development.development.forEach(function(tools) {
        var formattedDevelopment = HTMLdevelopment.replace("%data%", tools.title).replace("#", tools.image);
        $("#development-tools").append(formattedDevelopment);
    });
};

development.display();


tools.display = function() {

    tools.tools.forEach(function(tools) {
        var formattedTools = HTMLtools.replace("%data%", tools.title).replace("#", tools.image);
        $("#design-tools").append(formattedTools);
    });
};

tools.display();


tools2.display = function() {

    tools2.tools2.forEach(function(tools2) {
        var formattedTools2 = HTMLtools2.replace("%data%", tools2.title).replace("#", tools2.image);
        $("#design-tools2").append(formattedTools2);
    });
};

tools2.display();

$("#mapDiv").append(googleMap);
