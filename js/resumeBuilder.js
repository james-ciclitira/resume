var bio = {
    "name": "James Ciclitra",
    "role": "Digital Product designer",
    "welcomeMessage": "I am a London based UI designer. I have spend the last year and a half as the design lead for a mobile startup working on both iOS and android platform. In this time I have had the chance to tackle a array of challenges, in a number fields such as UI, UX, motion and visual design as well as working within the marketing department in order to produce promotional product and material. My passion is developing clean, effective and useable interfaces. I am happy and able to work on either a Web, iOS or Android platform but my preference is the former. I am a strong believer of material design principles and lover all things Google. <br><br>Within my current position at CrowdScores, we produce a social football scores network for both Android and iOS platforms. We have a strong mobile development team with two developers per platform. I am not a huge football fan but that has not mattered as my passion is to create a great product irrespective of the field or market. I have been working as the principal designer with feedback and input from the rest of the company. Being the sole design lead has been a challenge at times, but it has been a great learning experience. I have had the opportunity to work closely with an amazing development team and marketing department.<br><br>When I joined CrowdScores we had 47,000 monthly users. We are now approaching half a million, and still growing! It has been a brilliant project to work on. For my career development I have decided that I need to move to a larger team, while still working as an in-house designer for one brand. Although I have learnt a lot about football in the time that I have spent in my current position, I am still not the biggest football fan and am looking for something new. I am naturally inquisitive and always interested in learning new things. At the moment, I am working on a front-end web development Nanodegree offered by Udacity. I am halfway though the course and am keen to follow this with the Android basic Nanodegree.",
    "contacts": [{
        "email": "Email: jciclitira@gmail.com",
        "location": "Location: London",
        "mobile": "Mobile: 07847395121",
        "github": "GitHub: james-ciclitira"
    }],
    "skills": ["Sketching", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframes", "Grid & Layout", "Color Theory", "Typography", "Design Research", "Visual Design"],
};

var education = {
    "schools": [{
        "name": "Edinburgh College Of Art",
        "degree": "Product Design",
        "majors": "2:1 ba (Hons)",
        "dates": "2011 - 2015",
        "url": "http://www.eca.ed.ac.uk/school-of-design/undergraduate/product-design-ba-hons"
    }, ]
};

var work = {
    "jobs": [{
            "employer": "Suggestv",
            "title": "Product & Web development",
            "location": "London - United Kingdom",
            "dates": "January 2017 - April 2017",
            "description": "Suggestv is the inventor of semantic video distribution. During my time here I have worked on developing a online platform for buying and selling video content. ",
            "url": "http://sugges.tv/"
        },

        {
            "employer": "CrowdScores",
            "title": "Product designer",
            "dates": "September 2015 - January 2017",
            "description": "CrowdScores is a real-time sports data application. I had the pleasure of being the design lead and taking responsibility for a variety of roles including, designing the mobile application, conducting research, conceptualising ideas, building mockup prototypes, and finally creating promotional material for the marketing department. On a whole I have enjoyed the time I have spend here, as it has been a valuable learning experience but I feel it is time for a change.",
            "url": "http://CrowdScores.com/"
        }, {
            "employer": "Prediction labs",
            "title": "Freelance designer",
            "dates": "",
            "description": "Numilli app - Bitcoin safe and easy. Numilli  aims to makes it easy to securely buy and sell bitcoin currency, on the go using a mobile app & ATM machine.",
        },
        {
            "employer": "Foreminds",
            "title": "Freelance designer",
            "dates": "",
            "description": "BaseSight - workforce management platform, which aims to help improve efficiency & productivity",
        },


        {
            "employer": "SamLab",
            "title": "Designer Intern",
            "dates": "August 2015 - August 2015",
            "description": "",
            "url": "http://SamLab.com/"
        }
    ]
};

var project = {
    "project": [{
        "title": "Suggestv - web site",
        "dates": "2016",
        "description": "Front facing web site for suggestv",
        "images": ["images/suggestv-1.png", "images/suggestv-2.png", "images/suggestv-3.png"],
        "url": "https://sugges.tv"
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
        "title": "Illustrator",
        "image": ["images/Illustrator.svg"]
    }, {
        "title": "Photoshop",
        "image": ["images/Photoshop.svg"]
    }, {
        "title": "Invision",
        "image": ["images/invision.svg"]
    }, {
        "title": "Pixate",
        "image": ["images/pixate.png"]
    }, {
        "title": "Craft",
        "image": ["images/craft.svg"]
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
        "title": "React",
        "image": ["images/react.svg"]
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
        var Github = HTMLgithub.replace("%data%", contacts.github);
        var Mobile = HTMLmobile.replace("%data%", contacts.mobile);
        $("#topContacts, #footer").append(Location).append(Email).append(Github).append(Mobile);

    });

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
            var formattedDescription = HTMLworkDescription.replace("%data%", jobs.description);
            var formattedDates = HTMLworkDates.replace("%data%", jobs.dates);

            $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDescription, formattedDates);
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

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedMajor);
        $(".education-entry:last").append(formattedSchoolDate);
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
