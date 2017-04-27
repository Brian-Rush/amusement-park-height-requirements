$(document).ready(function () {
  var height = parseInt(prompt("How tall are you in inches?"));

  //assign height requirements to different rides

  //branching
  if (height >= 24) { //merry-go-round - > 24 inches
    //show merry-go-round
    $('#merry-go-round').show();
    if (height >= 36) { //ferris wheel - > 36 inches
      //show ferris wheel
      $('#ferris-wheel').show();
      if (height >= 48) { //roller coaster or gravitron - > 48 inches
        //show roller coaster
        $('#roller-coaster').show();
        //show gravitron
        $('#gravitron').show();
      }
    }
  }
  if (height < 48) { //boat ride - < 48 inches
    //show boat ride
    $('#childrens-boat-ride').show();
  }
});
