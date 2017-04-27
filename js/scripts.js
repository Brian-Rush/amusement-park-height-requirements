$(document).ready(function () {
  var height = parseInt(prompt("What is your height in inches?"));

  //if height is >= 24 inches highlight merry-go-round
  if (height >= 24) {
    $("#merry-go-round").addClass("well");
    if (height >= 36) {
      $("#ferris-wheel").addClass("well");
      if (height >= 48) {
        $("#roller-coaster, #gravitron").addClass("well");
      }
    }
  }
  if (height < 48) {
    $("#childrens-boat-ride").addClass("well");
  }
  //if height is >= 36 inches highlight ferris-wheel
  //if height is >= 48 inches highlight roller-coaster, gravitron
  //if height is < 48 inches highlight childrens-boat-ride
});
