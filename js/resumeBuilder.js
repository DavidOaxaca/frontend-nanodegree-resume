var bio = {
	"name": "david",
	"role": " Developer",
	"contacts": {
		"email": "oaxaca.david@hotmail.com",
		"github": "DavidOaxaca",
		"twitter": "",
		"location": "Palo Alto,CA"
	},
	"picture": "tahoe.jpg",
	"welcomeMessage": "I'm currently pursing front end development",
	"skills": ["Java", "python", "Software Development", "Test Driven Development", "Retrospective Facilitation"]
};

var work = {
	"jobs": [
		{
			"employer": "..",
			"title": "jr front-end Developer",
			"location": "",
			"datesWorked": "",
			"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
				"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
				"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
				"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
				"from everyone I worked with there."
		{
			"employer": "University of san diego",
			"title": "",
			"location": "san diego,ca",
			"datesWorked": "",
			"description": "" +
			" " +
			""
		},
	]
};

var education = {
	"schools": [
		{ "name": "university of san diego",
			"datesAttended": "2010-2012",
			"location": "san diego,ca",
			"degree": "B.Sc.(Hon) Software Engineering",
			"major": "Computer Science",
			"minor": "Germanic Studies",
			"url": "www.usd.com"
		}
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"completed": "
			"url": "https://www.udacity.com/course/ud015"
		},
		{ "school": "Udacity",
			"title": "HTML5 Canvas",
			"completed": "November 2015",
			"url": "https://www.udacity.com/course/ud292"
		},
		{ "school": "Udacity",
			"title": "Javascript Basics",
			"completed": "October 2015",
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Udacity",
			"title": "Intro to HTML and CSS",
			"completed": "October 2015",
			"url": "https://www.udacity.com/course/ud304"
		},
		{ "school": "Udacity",
			"title": "Web Development",
			"completed": "",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "HTML5 Canvas Gae",
			"datesWorked": "December 2014 - January 2015",
			"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/frogger.jpg"],
			"url": "http://www.cherylcourt.ca/frogger"
		},
		{
			"title": "Online Portfolio",
			"datesWorked": "October 2015",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.jpg"],
			"url": "http://www.cherylcourt.ca/"
		},
		{
			"title": "Web Development Wiki",
			"datesWorked": "June 2014 - August 2015",
			"description": "Created an online wiki for Udacity's Web Development Course.",
			"images": ["images/web.jpg"],
			"url": "http://helpful-kit-572.appspot.com/"
		}55
};


var formattedName = HTMLheaderName.replace("David", bio.name);
var formattedRole = HTMLheaderRole.replace("Front-end developer%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("Work, make love, beautiful", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("oaxaca.david@hotmail.com%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("https://github.com/DavidOaxaca", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("JoshuaOaxaca", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("palo alto,ca", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("ninja", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("The Christmas Light Pros", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("Hanger", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("Palo Alto,CA", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("11/2012-3/15/2016", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("Holiday Lighting company", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%P1%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%Portfolio%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("University of San Diego", education.schools[i].name).replace("https://www.usd.com/", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("International Business Management", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("08/2010-12/12", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("San Diego,CA", education.schools[i].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("Business Managenent", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("Mass Communications", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("Front-end developer", education.onlineCourses[i].title).replace("https://www.udacity.com/", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("Udacity", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("11/15-current", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("https://www.udacity.com/", education.onlineCourses[i].url).replace("https://www.udacity.com/", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
  * Skills Chart
  */
 $(function () {
     $('#container').highcharts({
       chart: {
             type: 'scatter',
             zoomType: 'xy'
    },
         title: {
             text: 'Skills'd
         },
xAxis: {
             title: {
                 enabled: true,
 text: 'Used (year)'
             },
             startOnTick: true,
   endOnTick: true,
             showLastLabel: true
         },
yAxis: {
             title: {
                 text: 'Duration (months)'
        }
         },
         legend: {
             layout: 'vertical',
        align: 'left',
             verticalAlign: 'top',
             x:
250,
             y: 0,
             floating: true,
backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor)
|| '#FFFFFF',
             borderWidth: 1
         },
         plotOptions: {
            scatter: {
                 marker: {
                     radius:
5,
                     states: {
                         hover: {
                  enabled: true,
                             lineColor:
'rgb(100,100,100)'
                         }
                     }
       },
                 states: {
                     hover: {
             marker: {
                             enabled: false
             }
                     }
                 },
tooltip: {
                     headerFormat: '<b>{series.name}</b><br>',
                pointFormat: 'Used in {point.x} for {point.y} month(s)'
        }
 			}
 		},
 		series: [{
 				name: 'Java',
 				color: 'rgba(223,
83, 83, .5)',
 				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8],
[2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
 			},
 			{
				name: 'python',
 				color: 'rgba(119, 152, 191, .5)',
 				data: [[2014,
1], [2013, 1], [2012, 1], [2011, 1]]
 			},
 			{
 				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
 				data: [[2013, 2]]
 			},
 			{
				name: 'PL/SQL',
 				color: 'rgba(170, 162, 30, .5)',
 				data: [[2010,
2], [2006, 4]]
 			},
 			{
 				name: 'C++',
 				color: 'rgba(0, 102, 0,
.5)',
 				data: [[2004, 12], [2003, 6]]
 			},
 			{
 				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
 				data: [[1997, 8], [2004, 2], [2008,
4]]
 			},
 			{
 				name: 'Javascript',
 				color: 'rgba(204, 0, 0, .5)',
				data: [[2014, 1]]
 			},
 			{
 				name: 'HTML/CSS',
 				color:
'rgba(153, 51, 0, .5)',
 				data: [[2014, 5], [2002, 3], [2008, 4], [2005,
2]]
 			},
 			{
 				name: 'Web Development',
 				color: 'rgba(0, 153, 102,
.5)',
 				data: [[2014, 2]]
 			},
 			{
 				name: 'TDD',
 				color:
'rgba(0, 102, 51, .5)',
 				data: [[2014, 12], [2013, 12], [2012, 12], [2011,
4]]
 			},
 			{
 				name: 'Django',
 				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
 			},
 			{
 				name: 'Perl',
 				color: 'rgba(210,
200, 0, .5)',
 				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
 			}]
	});
 });


$("#mapDiv").append(googleMap);

