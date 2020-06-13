window.addEventListener("load", function (e) {
  init();
});

function init() {
  console.log("script.js loaded");
  getEvents(); // store this in a variable or use the one from line 20?
  createTable();
}

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
  for (let i = 0; i < eventArray.length; i++) {
	  let individualRun = eventArray[i];
	  let tableRow = createRow(individualRun);
	  table.appendChild(tableRow);
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
		return tr;
}
