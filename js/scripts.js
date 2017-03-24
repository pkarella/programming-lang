
$(document).ready(
  function() {
    $("#info-form").submit(function(event) {
      event.preventDefault();
      var sizes = $("input:radio[name=size]:checked").val();
      var checksa = $("#check1").val();
      var checksb = $("#check2").val();
      var checksc = $("#check3").val();
      if (sizes === "websites" && checksa === "Challenge" && checksb || checksa === "Easier" || checksa === "Eitherway"){
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

  
