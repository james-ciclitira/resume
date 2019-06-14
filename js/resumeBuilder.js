var bio = { "name": "James Ciclitira", "welcomeMessage": "Product Designer based in Berlin, designing interfaces and experiences for Android, iOS, and the Web, using user-centred design practices to develop meaningful experiences.", "contacts": [{ "email": "jciclitira@gmail.com", "website": "jciclitira.com" }], "skills": ["Sketching", "UI/UX Design", "Interaction Design", "Prototyping", "Wireframes", "Grid & Layout", "Color Theory", "Typography", "Design Research", "Visual Design"], };
var education = { "schools": [{ "name": "The University of Edinburgh", "degree": "Product Design", "majors": "2:1 BA(Hons)", "dates": "2011 - 2015", "url": "http://www.eca.ed.ac.uk/school-of-design/undergraduate/product-design-ba-hons" }, ] };
var work = {
  "jobs": [
    { "employer": "COUP", "title": "Product Designer", "dates": "March 2019 - Present", "description": "COUP is a electric scooter sharing in Berlin, Madrid & Paris", "url": "https://joincoup.com/en/berlin" },
    { "employer": "Vivy", "title": "Product Designer", "dates": "October 2017 - March 2019", "description": "Vivy is a digital health record. Securely storing medical documents on a smart phone", "url": "https://www.vivy.com" },
    { "employer": "Quidco", "title": "Mobile Designer", "dates": "September 2017 - October 2017", "description": "Quidco is the UK's number one cashback service. Partnering with 1000’s of retailers to help you earn hundreds of pounds cash back every year. Key responsibilities: Continual improvement of the mobile application.", "url": "https://www.quidco.com/" },
    { "employer": "YunoJuno", "title": "Product Designer", "dates": "May 2017 - August 2017", "description": "YunoJuno helps freelancers find work with great companies in London. Employers work directly with freelancers with yunojuno acting as an intermediary managing Contact & Payment. Key responsibilities: Improving the existing product, conceptualising ideas and prototyping.", "url": "https://www.yunojuno.com/" },
    { "employer": "Numilli", "title": "Product Designer", "dates": "January 2017 - August 2017", "description": "Numilli soon-to-launch bitcoin startup. Numilli makes it easy to securely buy and sell bitcoin on the go. Key responsibilities: Design & branding of the MVP for the Mobile & Web applications and ATM machines.", "url": "http://numilli.surge.sh/" },
    { "employer": "Suggestv", "title": "Product & Web Development", "location": "London - United Kingdom", "dates": "January 2017 - April 2017", "description": "Suggestv is the inventor of semantic video distribution. Key responsibilities: Designing and facilitating the production of a semantic video distribution platform using Reactjs. ", "url": "https://www.sugges.tv/" },
    { "employer": "CrowdScores", "title": "Product Designer", "dates": "September 2015 - January 2017", "description": "CrowdScores is a real-time sports data application. I had the pleasure of working as the principal designer, taking responsibility for a variety of roles. Key responsibilities: Improving the existing product, researching and developing new features, conceptualising ideas and prototyping.", "url": "https://CrowdScores.com/" },
  ]
};

var project = { "project": [{ "title": "Suggestv - Lead Generation Landing Pages", "dates": "", "description": "The aim of the Suggestv landing page is used to capture user data, such as a name and email address. The sole purpose of the site is to connect the in-house sales team with prospect clients. The site is build using a light weight tachyons framework", "images": ["images/suggestv-1.jpg", "images/suggestv-2.jpg", "images/suggestv-3.jpg"], "url": "https://www.sugges.tv/", "demo": "https://www.sugges.tv/" }, { "title": "CrowdScores - components", "dates": "", "description": "Using structural elements from Google's Material Design Stickersheet & iOS 10 UI kit, the CrowdScores components sheet was creted containing various elements that makeup the majority layouts layouts within the app.", "images": ["images/nexus.jpg", "images/players.jpg", "images/samsung.jpg"], "url": "https://github.com/james-ciclitira/Stickersheets", "demo": "https://twitter.com/jimmy__design/status/802513442816933888" }] };
var tools = { "tools": [{ "title": "Sketch", "image": ["images/sketch.svg"] }, { "title": "Illustrator", "image": ["images/Illustrator.svg"] }, { "title": "Photoshop", "image": ["images/Photoshop.svg"] }, { "title": "Invision", "image": ["images/invision.svg"] }, { "title": "Pixate", "image": ["images/pixate.png"] }, { "title": "Craft", "image": ["images/craft.svg"] }] };
var development = { "development": [{ "title": "HTML", "image": ["images/html.svg"] }, { "title": "CSS", "image": ["images/css.svg"] }, { "title": "Javascript", "image": ["images/js.svg"] }, { "title": "React", "image": ["images/react.svg"] }, { "title": "Gatsby", "image": ["images/gatsby.svg"] }] };

bio.display = function() {
  var Name = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(Name);
  bio.skills.forEach(function(skills) { $("#skills").append(HTMLskills.replace("%data%", skills)) });
  var welcomeMessage = HTMLabout.replace("%data%", bio.welcomeMessage);
  $("#about").append(welcomeMessage)
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
      $(".work-entry:last").append(formattedTitle, formattedEmployer + formattedDates, formattedDescription)
    })
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
    $(".education-entry:last").append(formattedMajor)
  })
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
    item.images.forEach(function(img) { $(".project-entry:last").append(HTMLprojectImage.replace("%data%", img)) })
  })
};
projects.display();

development.display = function() {
  development.development.forEach(function(tools) {
    var formattedDevelopment = HTMLdevelopment.replace("%data%", tools.title).replace("#", tools.image);
    $("#development-tools").append(formattedDevelopment)
  })
};
development.display();


tools.display = function() {
  tools.tools.forEach(function(tools) {
    var formattedTools = HTMLtools.replace("%data%", tools.title).replace("#", tools.image);
    $("#design-tools").append(formattedTools)
  })
};
tools.display()