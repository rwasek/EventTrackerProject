## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

Phase I of a multi-week project to design a Full-Stack Trail Run Workout Tracker Application:

This project involved designing a Database schema, populating the Database with some initial entries to test CRUD on; as well as creating a JPA Project tied to a Spring Boot App with the goal of publishing REST API CRUD Endpoints. There is one Java entity class POJO to start, that is mapped with JPA, from a trail_run table in my MySQL Database. It will be a build-upon project, and this portion was the back-end setup, focusing on CRUD operations with Spring Data JPA Repositories and Service classes. There is one POJO "TrailRun" for each Trail Run Event to be tracked.  J-Unit Jupiter tests were utilized to test my POJO mappings/data fields, as well as to test my Repository query methods.  Postman was used to test the Controller methods and their subsequent Request Mappings.  The section below contains the API Endpoints that were developed and can be tested in Postman.

Phase II Update - Week 2:

The second phase of this project involved writing an HTML Front-end, mostly with JavaScript with very limited hard-coded HTML, to have one index.html page be updated depending on Javascript click-events.  Javascript was used to build a table that contains a list of all the trail run events that are being tracked.  If one event is clicked on, a div is targeted by id and a pre-populated Form gets displayed on the page, allowing a user to Update or Delete an event.  An aggregate method was also used to display the total distance of all the events (in miles), and changes depending on if a run event is updated/deleted/created.  A user can also create a new trail run from the home page, and after successfully doing so the list of runs will update to reflect it.

Phase III Update - Week 3:

The final phase of the project was developing an Angular Front-end framework, completely replacing the vanilla Javascript Front-end I wrote the week prior.  Developed with Angular components, services and pipes.  I designed an Angular model based off my Java Entity in the connected Spring application.  The home page displays a list of Trail Run events to the User, which can be individually clicked on bringing the User to a pre-filled update form of that run.  Runs can be deleted by the click of a button in the table on the home page, and a new run can be added as well.  A live aggregate total distance of all the runs is updated in the header as they are changed/added.

## API Endpoints

|Returns   | Verb        | URI    | Description |
|----------|-------------|--------|-------------|
| List&lt;TrailRun&gt; | GET  | api/trailruns | Retrieve List of Active Trail Runs |
| TrailRun | GET | api/trailruns/{tId} | Retrieve one Trail Run by ID |
| TrailRun | POST | api/trailruns | Creates a new Trail Run |
| TrailRun | PUT | api/trailruns/{tId} | Updates an existing Trail Run by ID |
| Void | PUT | api/trailruns/disable/{tId} | Disables an existing Trail Run by ID |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/trailtype/{type} | Retrieve List of Trail Runs of a certain Enum type: ("LIGHT", "MODERATE", "RUGGED") |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/distance/{min}/{max} | Retrieve List of Trail Runs within a specific distance range (in miles) |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/location/{keyword} | Retrieve List of Trail Runs by a location keyword |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/distance/{min} | Retrieve List of Trail Runs with a minimum distance (in miles) |

## Technologies Used
* MySQL, MySQL Workbench
* Java/Hibernate
* Spring Boot
* Spring Data JPA
* Gradle
* Git/Github
* Postman
* MAMP/Apache Tomcat
* AWS
* Atom

Phase 2 Added Technologies:

* JavaScript
* HTML
* Visual Studio Code

Phase 3 Added Technologies:

* Angular
* CSS

## Lessons Learned - Phase 1

* REST API with Service and Repository classes make JPA CRUD query methods much easier and more efficient!
* Instead of Deleting any data, I opted to Disable events to be more realistic.  For part 2 of this build-upon project when I design the Front-End, I will have it appear as if the User is deleting events, but all data will be saved. All of my methods but finding by ID (for admin purposes) were coded to not display disabled events.
* This was a great exercise to solidify JPA CRUD and routings in a Controller.
* Building my own database again for this project was excellent to continue toning my MySQL Workbench knowledge.

## Lessons Learned - Phase 2

* JavaScript is really elusive and tricky at first.  It was a challenge to go from writing Java in such a controlled environment to trying to debug problems with JavaScript code in the browser, especially since sometimes after rebooting my project, I would have to clear my browsers cache to get the changes reflected to show.
* This project involved the most "hacking" I've ever had to do in this course.  JavaScript is so new to me, despite it's similarities to Java, but I learned so much playing around with it and forcing my way through the code one step at a time.
* It's never been more true to test every baby step you make with JS compared to other languages, I got ahead of myself a few times, then tested my Create method that was working fine, and found out the hard way that new code I wrote affected and changed what originally worked fine.  I got in the habit of testing all my CRUD operations each time I made a major change to make sure everything was still compliant.
* After only learning a weeks worth of JavaScript and being able to write 400+ lines of it to make this project meet MVP, I was incredibly impressed with how far I had come, and this project really solidified a lot of my JS knowledge -- but also showed how much more I have to learn.  I do feel more confident with the language however, and look forward to dialing it in more with practice.  The potential for Front End development is really huge using JavaScript and it opened up many opportunities for me for future projects on the Front-End.
* A huge win was being able to get my Enum Trail type select drop down menu in the Form to dynamically display the proper choice when a user clicks on an event.  For example, if a trail was defined as 'Light', when it was clicked on the update form would populate that first, with 'Moderate' and 'Rugged' being secondary options.  I accomplished this with a series of 3 if/else if statements - and 3 methods for building each select elements' options for each Enum type; the first statement checked what the individual run's Enum trail type was, and depending on that, populated the appropriate other two choices.  This was something I really wanted to do for my Midterm but ran out of time, but now I have the code to transfer back to refactor that to get it to work right!

## Lessons Learned - Phase 3

* Angular is a very fluid and responsive front-end framework tool! I had a lot of fun playing around with it, and I'm excited to dive into all the tools Angular offers.  This project was much easier to design compared to meeting the same requirements the weekend prior in vanilla Javascript.
* Spent a lot of time hacking up my code before realizing I missed the annotation in the Spring project to connect to the browser local server I was serving the Angular app on.
* Played around with components, making my Add run form as its own component piece.
* Making Front-end changes and watching them immediately become reflected in the browser without having to reboot the Spring app for every change allows for much more fluid and efficient design!
