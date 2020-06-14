window.addEventListener("load", function (e) {
	init();
  });
  
  function init() {
	console.log("script.js loaded");
	getEvents(); // store this in a variable or use the one from line 20?
	
  
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
		  createTable(trailRunArray);
		  aggregateMiles(trailRunArray);
		} else if (xhr.status === 404) {
		  console.log("Runs not found"); // make a display error div
		} else {
		  console.log("Error retrieving all the runs"); // make a display error div
		}
	  }
	};
	xhr.send();
  }

  function aggregateMiles(trailRunArray){
	let aggDiv = document.getElementById("trailRunAggregate");
	let distanceTotal = 0;
	for (let i = 0; i < trailRunArray.length; i++) {
		let run = trailRunArray[i];
		distanceTotal += run.distance;
		
	}
	aggDiv.textContent = `Total Miles Ran: ${distanceTotal}`;
  }


  // Event list table creation methods:
  
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
	individualRunDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = 'The ' + individualRun.trailName + ' Run:';
	individualRunDiv.appendChild(h2);
	let updateForm = document.createElement('form');
	updateForm.name = 'updateForm'

	let trailNameLabel = document.createElement('label');
	trailNameLabel.for = 'trailName';
	trailNameLabel.textContent = 'Trail Name';
	let trailNameInput = document.createElement('input');
	trailNameInput.type = 'text';
	trailNameInput.name = 'trailName';
	trailNameInput.value = individualRun.trailName;
	updateForm.appendChild(trailNameLabel);
	updateForm.appendChild(trailNameInput);
	updateForm.appendChild(document.createElement('br'));

	let trailLocationLabel = document.createElement('label');
	trailLocationLabel.for = 'location';
	trailLocationLabel.textContent = 'Location';
	let trailLocationInput = document.createElement('input');
	trailLocationInput.type = 'text';
	trailLocationInput.name = 'location';
	trailLocationInput.value = individualRun.location;
	updateForm.appendChild(trailLocationLabel);
	updateForm.appendChild(trailLocationInput);
	updateForm.appendChild(document.createElement('br'));
	
	let trailDateLabel = document.createElement('label');
	trailDateLabel.for = 'date';
	trailDateLabel.textContent = 'Date';
	let trailDateInput = document.createElement('input');
	trailDateInput.type = 'text';
	trailDateInput.name = 'date';
	trailDateInput.value = individualRun.date;
	updateForm.appendChild(trailDateLabel);
	updateForm.appendChild(trailDateInput);
	updateForm.appendChild(document.createElement('br'));

	let trailTimeLabel = document.createElement('label');
	trailTimeLabel.for = 'totalTime';
	trailTimeLabel.textContent = 'Total Time';
	let trailTimeInput = document.createElement('input');
	trailTimeInput.type = 'text';
	trailTimeInput.name = 'totalTime';
	trailTimeInput.value = individualRun.totalTime;
	updateForm.appendChild(trailTimeLabel);
	updateForm.appendChild(trailTimeInput);
	updateForm.appendChild(document.createElement('br'));

	let trailDistanceLabel = document.createElement('label');
	trailDistanceLabel.for = 'distance';
	trailDistanceLabel.textContent = 'Distance';
	let trailDistanceInput = document.createElement('input');
	trailDistanceInput.type = 'number';
	trailDistanceInput.step = '0.01';
	trailDistanceInput.name = 'distance';
	trailDistanceInput.value = individualRun.distance;
	updateForm.appendChild(trailDistanceLabel);
	updateForm.appendChild(trailDistanceInput);
	updateForm.appendChild(document.createElement('br'));

	let trailElevationLabel = document.createElement('label');
	trailElevationLabel.for = 'elevationGain';
	trailElevationLabel.textContent = 'Elevation Gain';
	let trailElevationInput = document.createElement('input');
	trailElevationInput.type = 'number';
	trailElevationInput.name = 'elevationGain';
	trailElevationInput.value = individualRun.elevationGain;
	updateForm.appendChild(trailElevationLabel);
	updateForm.appendChild(trailElevationInput);
	updateForm.appendChild(document.createElement('br'));

	let trailMaxHRLabel = document.createElement('label');
	trailMaxHRLabel.for = 'maxHeartRate';
	trailMaxHRLabel.textContent = 'Max Heart Rate';
	let trailMaxHRInput = document.createElement('input');
	trailMaxHRInput.type = 'number';
	trailMaxHRInput.name = 'maxHeartRate';
	trailMaxHRInput.value = individualRun.maxHeartRate;
	updateForm.appendChild(trailMaxHRLabel);
	updateForm.appendChild(trailMaxHRInput);
	updateForm.appendChild(document.createElement('br'));

	let trailAvgHRLabel = document.createElement('label');
	trailAvgHRLabel.for = 'avgHeartRate';
	trailAvgHRLabel.textContent = 'Average Heart Rate';
	let trailAvgHRInput = document.createElement('input');
	trailAvgHRInput.type = 'number';
	trailAvgHRInput.name = 'avgHeartRate';
	trailAvgHRInput.value = individualRun.avgHeartRate;
	updateForm.appendChild(trailAvgHRLabel);
	updateForm.appendChild(trailAvgHRInput);
	updateForm.appendChild(document.createElement('br'));

	let trailDescriptionLabel = document.createElement('label');
	trailDescriptionLabel.for = 'description';
	trailDescriptionLabel.textContent = 'Description';
	let trailDescriptionInput = document.createElement('input');
	trailDescriptionInput.type = 'text';
	trailDescriptionInput.name = 'description';
	trailDescriptionInput.value = individualRun.description;
	updateForm.appendChild(trailDescriptionLabel);
	updateForm.appendChild(trailDescriptionInput);
	updateForm.appendChild(document.createElement('br'));

	let trailTypeLabel = document.createElement('label');
	trailTypeLabel.for = 'trailType';
	trailTypeLabel.textContent = 'Type of Trail';
	updateForm.appendChild(trailTypeLabel);

	let trailTypeSelect = document.createElement('select');
	trailTypeSelect.name = 'trailType';

	let trailTypeOptionActive = document.createElement('option');
	trailTypeOptionActive.value = individualRun.trailType;
	if (individualRun.trailType === 'LIGHT') {
		trailTypeOptionActive.textContent = 'Light Trail';
		trailTypeSelect.appendChild(trailTypeOptionActive);
		trailTypeSelect.appendChild(trailOptionModerate());
		trailTypeSelect.appendChild(trailOptionRugged());
		updateForm.appendChild(trailTypeSelect);
		updateForm.appendChild(document.createElement('br'));
	}
	else if (individualRun.trailType === 'MODERATE') {
		trailTypeOptionActive.textContent = 'Moderate Trail';
		trailTypeSelect.appendChild(trailTypeOptionActive);
		trailTypeSelect.appendChild(trailOptionLight());
		trailTypeSelect.appendChild(trailOptionRugged());
		updateForm.appendChild(trailTypeSelect);
		updateForm.appendChild(document.createElement('br'));
	}
	else if (individualRun.trailType === 'RUGGED') {
		trailTypeOptionActive.textContent = 'Rugged Trail';
		trailTypeSelect.appendChild(trailTypeOptionActive);
		trailTypeSelect.appendChild(trailOptionModerate());
		trailTypeSelect.appendChild(trailOptionLight());
		updateForm.appendChild(trailTypeSelect);
		updateForm.appendChild(document.createElement('br'));
	}
	

	let submit = document.createElement('input');
	submit.name = 'submit';
	submit.type = 'submit';
	submit.value = 'Update Run';
	submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log(individualRun);
		console.log(individualRun.id);
		updateRun(individualRun.id); // pass the id to update the run
	});
	updateForm.appendChild(submit);

	let deleteButton = document.createElement('input');
	deleteButton.name = 'submit';
	deleteButton.type = 'submit';
	deleteButton.value = 'Delete Run';
	deleteButton.addEventListener('click', function(e){
		e.preventDefault();
		deleteRun(individualRun.id);
	});
	updateForm.appendChild(deleteButton);
	individualRunDiv.appendChild(updateForm);
	
}
// select Enum option methods:
  
function trailOptionLight() {
	let trailTypeOptionLight = document.createElement('option');
	trailTypeOptionLight.value = 'LIGHT';
	trailTypeOptionLight.textContent = 'Light Trail';
	return trailTypeOptionLight;
}

function trailOptionModerate() {
	let trailTypeOptionModerate = document.createElement('option');
	trailTypeOptionModerate.value = 'MODERATE';
	trailTypeOptionModerate.textContent = 'Moderate Trail';
	return trailTypeOptionModerate;
}

function trailOptionRugged() {
	let trailTypeOptionRugged = document.createElement('option');
	trailTypeOptionRugged.value = 'RUGGED';
	trailTypeOptionRugged.textContent = 'Rugged Trail';
	return trailTypeOptionRugged;
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
				//   let createdTrailRun = JSON.parse(xhr.responseText); // if I wanted to do something with it individually other than refreshing the table below;
				  getEvents();
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

  // Update Run methods:

  function updateRun(runId) {
	  let form = document.updateForm;
	  let trailRun = {};
	  trailRun.id = runId;
	  trailRun.trailName = form.trailName.value;
      trailRun.location = form.location.value;
      trailRun.date = form.date.value;
      trailRun.totalTime = form.totalTime.value;
      trailRun.distance = form.distance.value;
      trailRun.elevationGain = form.elevationGain.value;
      trailRun.maxHeartRate = form.maxHeartRate.value;
      trailRun.avgHeartRate = form.avgHeartRate.value;
      trailRun.description = form.description.value;
      trailRun.trailType = form.trailType.value;
	  trailRun.active = true;
	  console.log(trailRun);
	  updateRunXHR(trailRun);
  } 

  function updateRunXHR(individualRun) {
  	let runJson = JSON.stringify(individualRun);
  	let xhr = new XMLHttpRequest();
  	let uri = `api/trailruns/${individualRun.id}`;
  	xhr.open('PUT', uri);
  	xhr.setRequestHeader('Content-type', 'application/json');
  	xhr.onreadystatechange = function (){
  		if (xhr.readyState === 4){
  			if (xhr.status === 200) {
				  getEvents(); // reload the list of events after the update
  			}
  			else {
  				if (xhr.status === 400){
  					console.log('Invalid run data, unable to update')
  					// TODO: make an error div pop up
  				}
  				else if (xhr.status === 404) {
  					console.log('Not found, invalid Run');
  				}
  			}
  		}
  	};
  	xhr.send(runJson);
  }

  // Disable ("Delete") methods:

  function deleteRun(runId) {
	let form = document.updateForm;
	let trailRun = {};
	trailRun.id = runId;
	trailRun.trailName = form.trailName.value;
	trailRun.location = form.location.value;
	trailRun.date = form.date.value;
	trailRun.totalTime = form.totalTime.value;
	trailRun.distance = form.distance.value;
	trailRun.elevationGain = form.elevationGain.value;
	trailRun.maxHeartRate = form.maxHeartRate.value;
	trailRun.avgHeartRate = form.avgHeartRate.value;
	trailRun.description = form.description.value;
	trailRun.trailType = form.trailType.value;
	trailRun.active = false;
	console.log(trailRun);
	deleteRunXHR(trailRun);
} 

function deleteRunXHR(individualRun) {
	let runJson = JSON.stringify(individualRun);
	let xhr = new XMLHttpRequest();
	let uri = `api/trailruns/${individualRun.id}`;
	xhr.open('PUT', uri);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function (){
		if (xhr.readyState === 4){
			if (xhr.status === 200) {
				getEvents(); // reload the list of events after the update
				let individualRunDiv = document.getElementById('trailRunDetails');
				individualRunDiv.textContent = 'Deleted!';
			}
			else {
				if (xhr.status === 400){
					console.log('Invalid run data, unable to update')
					// TODO: make an error div pop up
				}
				else if (xhr.status === 404) {
					console.log('Not found, invalid Run');
				}
			}
		}
	};
	xhr.send(runJson);
}