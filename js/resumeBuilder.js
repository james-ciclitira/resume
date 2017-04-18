var bio = {
    "name": "James Ciclitra",
    "welcomeMessage": "Product Designer based in London, creating complex digital products that lead to better user experiences. I love to design beautifully simple interfaces, code, iterate and create. I am an experienced and capable Digital Product Designer with over 2 years of professional experience. ",
    "contacts": [{
        "email": "jciclitira@gmail.com",
        "website": "jciclitira.com"
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
            "description": "Suggestv is the inventor of semantic video distribution. I was responsible for designing and aiding in the production of a semantic video distribution platform using React. ",
            "url": "http://sugges.tv/"
        },

        {
            "employer": "CrowdScores",
            "title": "Product designer",
            "dates": "September 2015 - January 2017",
            "description": "CrowdScores is a real-time sports data application. I had the pleasure of working as the principal designer taking responsibility for a variety of roles. Responsible included improving the existing product,  developing new features  research, conceptualising ideas & prototyping.",
            "url": "http://CrowdScores.com/"
        }, {
            "employer": "Prediction labs",
            "title": "Freelance designer",
            "dates": "January 2017 - Present",
            "description": "Numilli app - Bitcoin safe and easy. Numilli  aims to makes it easy to securely buy and sell bitcoin currency, on the go using a mobile app & ATM machine.",
        },
        {
            "employer": "Foreminds",
            "title": "Freelance designer",
            "dates": "March 2017 - Present",
            "description": "BaseSight - workforce management platform, which aims to help improve efficiency & productivity",
        }
    ]
};

var project = {
    "project": [{
        "title": "Suggestv - Lead Generation Landing Pages",
        "dates": "",
        "description": "The aim of the Suggestv landing page is used to capture user data, such as a name and email address. The sole purpose of the site is to connect the in-house sales team with prospect clients. The site is build using a light weight tachyons framework",
        "images": ["images/suggestv-1.png", "images/suggestv-2.png", "images/suggestv-3.png"],
        "url": "https://abundant-scissors.surge.sh/",
        "demo": "https://abundant-scissors.surge.sh/"

    }, {
        "title": "CrowdScores - components",
        "dates": "",
        "description": "Using structural elements from Google's Material Design Stickersheet & iOS 10 UI kit, the CrowdScores components sheet was creted containing various elements that makeup the majority layouts layouts within the app.",
        "images": ["images/nexus.png", "images/players.png", "images/samsung.png"],
        "url": "https://github.com/james-ciclitira/Stickersheets",
        "demo": "https://twitter.com/jimmy__design/status/802513442816933888"

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

    $("#header").prepend(Name);

    bio.contacts.forEach(function(contacts) {
        var Email = HTMLemail.replace("%data%", contacts.email);
        var Website = HTMLweb.replace("%data%", contacts.website);
        $("#Contact").append(Email).append(Website);

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

            $(".work-entry:last").append(formattedTitle,  formattedEmployer + formattedDates, formattedDescription );
        });
    }
};

work.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
        var formattedSchoolDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedNameDegree = formattedSchoolName + formattedSchoolDate;
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);

        $(".education-entry:last").append(formattedNameDegree);
        $(".education-entry:last").append(formattedDegree);
        $(".education-entry:last").append(formattedMajor);
    });

};

education.display();

projects.display = function() {
    project.project.forEach(function(item) {

        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", item.title).replace("#", item.url);
        var formattedDates = HTMLprojectDates.replace("%data%", item.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", item.description);
        var formattedDemo = HTMLprojectDemo.replace("#", item.demo);


        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription, formattedDemo);

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
