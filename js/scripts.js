
$(document).ready(
  function() {
    $("#info-form").submit(function(event) {
      event.preventDefault();
      var times = $("#time").val();
      var sizes = $("input:radio[name=size]:checked").val();
      var checksa = $("#check1").val();
      var checksb = $("#check2").val();
      var checksc = $("#check3").val();

      if (times <=2 && sizes == "websites" && checksa =="Challenge" && checksb == "Very Important" &&  checksc == "I love security"){
        $("#php").toggle();
      }
      else if (times == 3 && sizes == "larger" && checksa == "Challenge" && checksb == "Very Important" &&  checksc === "I love security"){
        $("#java").toggle();
      }
      else if (times >= 4 && sizes == "open" && checksa == "Challenge" && checksb == "Very Important" &&  checksc == "I love security"){
        $("#ruby").toggle();
      }
  });
});
