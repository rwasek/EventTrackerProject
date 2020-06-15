## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

Phase I of a multi-week project to design a Full-Stack Trail Run Workout Tracker Application:

This project involved designing a Database schema, populating the Database with some initial entries to test CRUD on; as well as creating a JPA Project tied to a Spring Boot App with the goal of publishing REST API CRUD Endpoints. There is one Java entity class POJO to start, that is mapped with JPA, from a trail_run table in my MySQL Database. It will be a build-upon project, and this portion was the back-end setup, focusing on CRUD operations with Spring Data JPA Repositories and Service classes. There is one POJO "TrailRun" for each Trail Run Event to be tracked.  J-Unit Jupiter tests were utilized to test my POJO mappings/data fields, as well as to test my Repository query methods.  Postman was used to test the Controller methods and their subsequent Request Mappings.  The section below contains the API Endpoints that were developed and can be tested in Postman.

Phase II Update -- Week 2 --:

The second phase of this project involved writing a dynamic HTML Front-end, mostly with JavaScript with very limited hard-coded HTML, to have one index.html page be updated depending on Javascript click-events.  For example, Javascript was used to build a table that contains a list of the events.  If one event is clicked on, a div is targeted and a pre-populated Form gets displayed on the page, allowing a user to Update or Delete an event.  An aggregate method was also used to display the total distance of all the events (in miles), and changes depending on if a run event is updated/deleted/created.  

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

* Visual Studio Code

## Lessons Learned - Phase 1

* REST API with Service and Repository classes make JPA CRUD query methods much easier and more efficient!
* Instead of Deleting any data, I opted to Disable events to be more realistic.  For part 2 of this build-upon project when I design the Front-End, I will have it appear as if the User is deleting events, but all data will be saved. All of my methods but finding by ID (for admin purposes) were coded to not display disabled events.
* This was a great exercise to solidify JPA CRUD and routings in a Controller.
* Building my own database again for this project was excellent to continue toning my MySQL Workbench knowledge.

## Lessons Learned - Phase 2

* JavaScript is really elusive and tricky at first.  It was a challenge to go from writing Java in such a controlled environment to trying to debug problems with JavaScript code.
* This project involved the most "hacking" I've ever had to do.  JavaScript is so new to me, despite it's similarities to Java, I learned a ridiculous amount playing around with it and forcing my way through the code.
* It's never been more true to test every baby step you make with JS compared to other languages, I got ahead of myself a few times, then tested my Create method that was working fine, and found out the hard way that new code I wrote affected and changed what originally worked fine.  I got in the habit of testing all my CRUD operations each time I made a major change to make sure everything was still compliant.
* After only learning a weeks worth of JavaScript and being able to write 400+ lines of it to make this project meet MVP, I was incredibly impressed with how far I had come and this project really solidified a lot of my JS knowledge -- but also showed how much more I have to learn.  I do feel more confident with the language however, and look forward to dialing it in more with practice.  The potential for Front End development is really huge and it opened up a world of opportunities for me.
* A huge win was being able to get my Enum Trail type select drop down menu in the Form to dynamically display the proper choice when a user clicks on an event.  For example, if a trail was defined as 'Light', when it was clicked on the update form would populate that first, with 'Moderate' and 'Rugged' being secondary options.  I accomplished this with a series of 3 if/ else if statements - and 3 methods for building each select elements options for each Enum type; the first statement checked what the individual runs enum trail type was, and depending on that populated the appropriate other two choices.  This was something I really wanted to do for my Midterm but ran out of time, but now I have the code to transfer back to refactor that to get it to work right!
