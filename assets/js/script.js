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
          populateDataTable(data);
        alert("Retrieved " + data.length + " records from the dataset!");
        console.log(data);
        });
      }
  })

//table hidden until click
$("#submitbtn").click(function(){
  $("#myTable").toggle();
});

//function called - takes in data - displays in table
function populateDataTable(data) {
  if(data.length > 0){
  	var Table = document.querySelector('#myTable');
	Table.innerHTML = `<tr><th>Name</th><th>Address</th><th>Phone Number</th><th>Lat</th><th>Long</th></tr>`;
    var table = document.getElementById("myTable");
    console.log(table, "stop, start");
    for(var i=0; i<data.length; i++){
      var row = table.insertRow();
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      cell0.innerHTML = data[i]["name"];
      cell1.innerHTML = data[i]["address"];
      cell2.innerHTML = data[i]["phone_no"];
      //would like these hidden - need to use for Google Map
      cell3.innerHTML = data[i]["lat"];
      cell4.innerHTML = data[i]["lng"];
    }
  }
}

//google map

// Local Storage Storing data:
//myObj = {};
//myJSON = JSON.stringify();
//localStorage.setItem("");
// Retrieving data:
//text = localStorage.getItem("testJSON");
//obj = JSON.parse(text);
//document.getElementById("demo").innerHTML = obj.name;

/* Need to clear data */

