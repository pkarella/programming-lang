
$(document).ready(
  function() {
    $("#info-form").submit(function(event) {

      var size = $("input:radio[name=size]:checked").val();
      var check1 = $("#check1").val();

      if ("size" === "yes" && "check1" === "hell" || "check1" === "heaven"){
        $("col-md-4").text("help");
        event.preventDefault();
      });
    });
  );
  // var dob = $("#born").val();
// if (size === "no" && sign === "Aries" || sign === "Taurus") {
//   $("h2").text("Tom Cruise");
// };
//
// if (size === "dogs" && sign === "Leo") {
//   $("h2").text("Brad Pitt");
// };
//
// if (size === "nopets") {
//   $("h2").text("Donald Trump");
// };
