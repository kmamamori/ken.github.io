const maincontent_div = document.getElementById("maincontent");

function sent() {
  // jQuery.ajax({
  // 	type: "POST",
  // 	url: 'contact_me.php',
  // 	data: { FunctionName: 'getSend' },
  // 		error: function(data){
  // 			alert("failed");
  // 			console.log(data);
  // 		},
  // 		success: function(data){
  // 			var obj = jQuery.parse.JSON(data);
  // 			alert(obj.x);
  // 			console.log("obj");
  // 		}
  // });
  // var whatever = <?php echo add(); ?>;
  // alert(whatever);
  // maincontent_div.innerHTML = "Thank you for the email. We will send you the feedback in a few days";
}

$(document).ready(function () {
  $("#submit").click(function () {
    $.ajax({
      type: "POST",
      url: "contact_me.php",
      data: {
        lname: $("#lname").val(),
        fname: $("#fname").val(),
        email: $("#email").val(),
        comment: $("#comment").val(),
      },
      success: function () {
        maincontent_div.innerHTML =
          "Thank you for the email. We will send you the feedback in a few days";
      },
      error: function () {
        maincontent_div.innerHTML =
          "Thank you for the comment, however, something went wrong... Please try again.";
      },
    });
  });
});

function main() {}
main();
