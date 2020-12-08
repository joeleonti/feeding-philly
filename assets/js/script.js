// Volunteer Modal option #1
/*
$("#lanuchModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closebtn").click(function() {
   $(".modal").removeClass("is-active");
});
*/

// Volunteer Modal #2 Currently Active

$("#lanuchModal").click(function() {
  $(".modal").addClass("is-active");  
});

$(".modal-close").click(function() {
   $(".modal").removeClass("is-active");
});

$("#closebtn").click(function() {
   $(".modal").removeClass("is-active");
});


//donate hero section
$(document).ready(function(){

  $('#searchbar').focus();

  $('#donate-buttons').on('click', '.btn-blue', function(e) {
    e.preventDefault();
    $('.active').removeClass('active');
    $('#other-input').hide().siblings('#other').show();
    $(this).filter('.btn-blue').addClass("active");
    var value = $(this).data('impact');
    $(this).closest('div').find('p').text("" + value);
    $('#other-input').find('input').val('');  
  });
    
  $('.btn-green').on('click', function() {
    var dollar;
    var input = $('#other-input').find('input').val();
    if ( !input ) {
      dollar = $('.active').data('dollars');
     } else if ( $.trim(input) === '' || isNaN(input)) {
      // empty space leaves value = 'undefined'. 
      // Have to fix $.trim(input) == '' above so that it works.
      console.log('Yes');
      dollar = "Please enter a number."; 
    } else {
      dollar = input;
    }
    $('#price').text(""+dollar);
  });

  $('#other').on('click', function(e) {
    e.preventDefault(); 
    var buttons = $(this).parent('#donate-buttons');
    buttons.find('.active').removeClass('active');
    var other = $(this).hide().siblings('#other-input');
    other.show();
    other.find('input').focus();
    var pText = buttons.siblings('p');
    pText.text("Thank you!");
    var oValue = other.find('input');
    oValue.keyup(function() {
      if ( oValue.val() > 50 ) {
        pText.text("Thank you!" + " You\'re donation covers housing and counseling services for " + oValue.val()/25 + " people.");
      } else {
        pText.text("Thank you!");
      }
    });
  }); 

});

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
        initMap(); 
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
function initMap() {
  var options = {
    zoom: 12,
    center: {lat:39.952583,lng:-75.165222}
  }
//create map object
  var map = new 
  google.maps.Map(document.getElementById("map"), options);

//array of markers
  var markers = [
  {"cell4": "cell5"},];

    //loop through markers
    for(var i = 0;i < markers.length;i++){
      //add marker
      addMarkers(markers[i]);
  }

//call marker function
  addMarker({lat:39.952583,lng:-75.165222});

//add marker function
  function addMarker(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map:map,
    });
  }
}

/* $.getJSON('map_points.json', function(data) { 
  $.each( data.points, function(i, value) {
    var myLatlng =  new google.maps.LatLng(value.lat, value.lon);
    alert(myLatlng);
    var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,*/