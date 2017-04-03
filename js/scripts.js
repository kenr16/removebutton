//Business Logic:
function Alocation(place, landmarks, time, notes) {
  this.locationName = place;
  this.locationLandmarks = landmarks;
  this.locationTime = time;
  this.locationNotes = notes;
}

Alocation.prototype.visit = function() {
  return this.locationName + " " + this.locationTime;
}


// front-end

$(document).ready(function() {
  $("form#new-location").submit(function(event) {
    event.preventDefault();

    var inputPlace = $("input#place").val();
    var inputLandmark = $("input#landmark").val();
    var inputTime = $("input#time").val();
    var inputNotes = $("#notes").val();

    var newEntry = new Alocation(inputPlace, inputLandmark, inputTime, inputNotes);

    $("ul#locations").append(" <li> <span class='nuke'> <button class='btn btn-xs btn-danger' name='button'>Remove</button> &nbsp </span> <span class='trip'>" + newEntry.visit() + "</span></li><br>");



    $("input#place").val("");
    $("input#landmark").val("");
    $("input#time").val("");
    $("input#notes").val("");

    $(".trip").last().click(function(){
      $("#show-visit").show();
      $("#show-visit h4").text(newEntry.locationName);
      $(".locationOutput").text(newEntry.locationName);
      $(".landmarksOutput").text(newEntry.locationLandmarks);
      $(".monthOutput").text(newEntry.locationTime);
      $(".notesOutput").text(newEntry.locationNotes);
    });

    $(".nuke").last().click(function(){
      //$(this).remove();
      //$("li").remove();
      $(this).parent().remove();
      //$(this).find.remove("li");
    });

  });
});
