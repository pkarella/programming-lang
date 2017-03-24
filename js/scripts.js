
$(document).ready(
  function() {
    $("#info-form").submit(function(event) {
      event.preventDefault();
      var sizes = $("input:radio[name=size]:checked").val();
      var checks = $("#check1").val();

      if (sizes === "yes" && checks === "hell" || checks === "heaven" || checks === "could"){
        $("#java").show();
      };
      if (sizes === "no" && checks === "hell" || checks === "heaven") {
        $("#php").show();
      };
      if (sizes === "maybe" && checks === "could"){
        $("#ruby").show();
      };
     });

    });


  // var dob = $("#born").val();
//
// };
//
//  {
//   $("h2").text("Brad Pitt");
// };
//
// if (size === "nopets") {
//   $("h2").text("Donald Trump");
// };
