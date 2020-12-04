var zipCode = {};
var myJSON = JSON.stringify(zipCode);

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
//app.appendChild(container);

//document.addEventListener('click', function();
  $("#submitbtn").click(function(){
    console.log("buttonWasClicked");
  //$("#zip")
    console.log($("#zip").val());

    var zipCode = $("#zip").val();
      if (zipCode != undefined) {
        $.ajax({
          url: "https://data.pa.gov/resource/kp97-c26b.json?zipcode="+ zipCode + "&$limit=5&$$app_token=3DCZ6kR551km15CG5Wm0cxPvx",
          type: "GET",
        }).done(function(data) {
        alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        });
      }
  })

//gets called by function name
//takes in data as an argument
//puts data in HTML table
function populateDataTable(data) {
  if(data.length > 0){
  	var Table = document.querySelector('#myTable');
	Table.innerHTML = `<tr><th>Name</th><th>Zip Code</th><th>Lat</th><th>long</th></tr>`;
    var table = document.getElementById("myTable");
    for(var i=0; i<data.length; i++){
      var row = table.insertRow();
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      cell0.innerHTML = data[i]["name"];
      cell1.innerHTML = data[i]["zipcode"];
      cell2.innerHTML = data[i]["lat"];
      cell3.innerHTML = data[i]["lng"];
    }
  }
}



// Storing data:
myObj = {};
myJSON = JSON.stringify();
localStorage.setItem("");
// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
document.getElementById("demo").innerHTML = obj.name;

buildTable()

function buildTable(data){
  var table = document.getElementById('myZipCodeTable')

  for (var i = 0; i < data.length; i++){
    var row = `<tr>
            <td>${data[i].program_type}</td>
            <td>${data[i].name}</td>
            <td>${data[i].address}</td>
            <td>${data[i].phone_no}</td>
            <td>${data[i].hours}</td>
          </tr>`
    table.innerHTML += row
  }
}

/* Need to clear data */

