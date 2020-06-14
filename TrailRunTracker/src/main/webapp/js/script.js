window.addEventListener("load", function (e) {
  init();
});

function init() {
  console.log("script.js loaded");
  getEvents(); // store this in a variable or use the one from line 20?
  createTable();

  document.createRunForm.addTrailRun.addEventListener('click', function(e){
	e.preventDefault();
	createNewRun();
});
}

// Method to get all the Events and display them on the homepage:

function getEvents() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/trailruns"); // initialize the request
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let trailRunJson = xhr.responseText; // var?
        let trailRunArray = JSON.parse(trailRunJson);
        console.log(trailRunArray);
        createTable(trailRunArray);
      } else if (xhr.status === 404) {
        console.log("Runs not found"); // make a display error
      } else {
        console.log("Error retrieving all the runs"); // make a display error
      }
    }
  };
  xhr.send();
}

function createTable(eventArray) {
  let runTableDiv = document.getElementById("trailRunEventList");
  runTableDiv.textContent = "";
  let table = document.createElement("table");
  table.setAttribute("id", "runList");
  runTableDiv.appendChild(table);
  let tableHead = createTableHead();
  table.appendChild(tableHead);
  if (typeof eventArray !== 'undefined') {
	for (let i = 0; i < eventArray.length; i++) {
		let individualRun = eventArray[i];
		let tableRow = createRow(individualRun);
		table.appendChild(tableRow);
	}
  }
}

function createTableHead() {
  let tableHead = document.createElement("thead");
  let thTrailName = document.createElement("th");
  let thTrailLocation = document.createElement("th");
  let thTrailDistance = document.createElement("th");
  thTrailName.textContent = "Trail Name";
  thTrailLocation.textContent = "Trail Location";
  thTrailDistance.textContent = "Total Distance Ran";
  tableHead.appendChild(thTrailName);
  tableHead.appendChild(thTrailLocation);
  tableHead.appendChild(thTrailDistance);
  return tableHead;
}

function createRow(individualRun) {

		let tr = document.createElement("tr");

        let tdName = document.createElement("td");
        let tdLocation = document.createElement("td");
        let tdDistance = document.createElement("td");
        tdName.textContent = individualRun.trailName;
        tdLocation.textContent = individualRun.location;
        tdDistance.textContent = individualRun.distance;

        tr.appendChild(tdName);
        tr.appendChild(tdLocation);
		tr.appendChild(tdDistance);

		tr.addEventListener('click', function(e){
			e.preventDefault();
			displayIndividualRun(individualRun);
		});
		return tr;
}

function displayIndividualRun(individualRun){
	let individualRunDiv = document.getElementById('trailRunDetails');
	individualRunDiv.textContent = 'You clicked?';
}

// Create new  methods:

function createNewRun() {

	
	let form = document.createRunForm;
	let trailRun = {};
	trailRun.trailName = form.trailName.value;
	trailRun.location = form.location.value;
	trailRun.date = form.date.value;
	trailRun.totalTime = form.totalTime.value;
	trailRun.distance = form.distance.value;
	trailRun.averagePace = form.averagePace.value;
	trailRun.bestPace = form.bestPace.value;
	trailRun.elevationGain = form.elevationGain.value;
	trailRun.maxHeartRate = form.maxHeartRate.value;
	trailRun.avgHeartRate = form.avgHeartRate.value;
	trailRun.description = form.description.value;
	trailRun.trailType = form.trailType.value;
	trailRun.active = true;
	console.log(trailRun);
	postNewRun(trailRun);
} 

function postNewRun(trailRun) {
	let trailRunJson = JSON.stringify(trailRun);
	let xhr = new XMLHttpRequest();
	let uri = 'api/trailruns';
	xhr.open('POST', uri);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let createdTrailRun = JSON.parse(xhr.responseText);
				location.reload();
			}
			else {
				if (xhr.status === 400) {
					// create an error div
					console.log('Invalid film data')
				}
				else {
					console.log('Unknown error creating film' + xhr.status);
				}
			}
		}
	};
	xhr.send(trailRunJson);
}
