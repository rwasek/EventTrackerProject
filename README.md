## Event Tracker Project

### Week 11-13 Project for Skill Distillery

## Overview

Part I of a multi-week project to design a full-stack Trail Run Workout Application:

This project involved creating and populating a Database schema, a JPA Project, and a Spring Boot App to publish REST API Endpoints. There is one Java entity class POJO to start that is mapped with JPA from a trail_run table in my MySQL database. It will be a build-upon, and this portion was the back-end setup, focusing on CRUD operations with Spring Data JPA Repositories.  There is one POJO "TrailRun" for each Trail Run Event to be tracked. Postman was used to test the Request Mappings/CRUD methods.  Below are the API Endpoints that were developed and can be tested in Postman.

## API Endpoints

|Returns   | Verb        | URI    | Description |
|----------|-------------|--------|-------------|
| List&lt;TrailRun&gt; | GET  | api/trailruns | Retrieve List of Active Trail Runs |
| TrailRun | GET | api/trailruns/{tId} | Retrieve one Trail Run by ID |
| TrailRun | POST | api/trailruns | Creates a new Trail Run |
| TrailRun | PUT | api/trailruns/{tId} | Updates an existing Trail Run by ID |
| Void | PUT | api/trailruns/disable/{tId} | Disables an existing Trail Run by ID |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/trailtype/{type} | Retrieve List of Trail Runs of a certain Enum type ("LIGHT", "MODERATE", "RUGGED") |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/distance/{min}/{max} | Retrieve List of Trail Runs within a specific distance range (in miles) |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/location/{keyword} | Retrieve List of Trail Runs by location keyword |
| List&lt;TrailRun&gt; | GET | api/trailruns/search/distance/{min} | Retrieve List of Trail Runs with a minimum distance total (in miles) |

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

## Lessons Learned

* REST API with Service and Repositories makes things JPA CRUD much easier and more efficient!
* Instead of Deleted any data, I opted to Disable events to be more realistic.
* This was a great exercise to solidify JPA CRUD and routings in a Controller.
