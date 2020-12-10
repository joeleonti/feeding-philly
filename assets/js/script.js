// Volunteer Modal
$("#lanuchModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closebtn").click(function() {
   $(".modal").removeClass("is-active");
   store();
   });

function store() {
  var inputEmail = document.getElementById("email");
  var inputText = document.getElementById("text");
  localStorage.setItem("email", inputEmail.value);
  localStorage.setItem("text", inputText.value);
}

//Hunger Statistics Slider
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//document.addEventListener('click', function()
  $("#submitbtn").click(function(){
  //$("#zip")
    var zipCode = $("#zip").val();
      if (zipCode != undefined) {
        $.ajax({
          url: "https://data.pa.gov/resource/kp97-c26b.json?zipcode="+ zipCode + "&$limit=5&$$app_token=3DCZ6kR551km15CG5Wm0cxPvx",
          type: "GET",
        }).done(function(data) {
          populateDataTable(data);
        initMap(data); 
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
	Table.innerHTML = `<tr><th>Name</th><th>Address</th><th>Phone Number</th><th>Hours</th><th>Lat</th><th>Long</th></tr>`;
    var table = document.getElementById("myTable");
    for(var i=0; i<data.length; i++){
      var row = table.insertRow();
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      cell0.innerHTML = data[i]["name"];
      cell1.innerHTML = data[i]["address"];
      cell2.innerHTML = data[i]["phone_no"];
      cell3.innerHTML = data[i]["hours"];
      cell4.innerHTML = data[i]["lat"];
      cell5.innerHTML = data[i]["lng"];
    }
  }
}

//create map and options
function initMap(data) {
  var options = {
    zoom: 12,
    center: {lat:parseFloat(data[0]["lat"]), lng:parseFloat(data[0]["lng"])}
  }
  
//create map object
  var map = new
  google.maps.Map(document.getElementById("map"), options);

//define marker
    for(var i = 0;i < data.length;i++){
      var marker = new google.maps.Marker({
        position:{lat:parseFloat(data[i]["lat"]), lng:parseFloat(data[i]["lng"])},
        map:map
      });
    }
}

//add marker function
function addMarker(coords){
  var marker = new google.maps.Marker({
    position:coords,
    map:map,
  });
}