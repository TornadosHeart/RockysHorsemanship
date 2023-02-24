console.log("JavaScript is Ready!!");

$(document).ready(function () {

	console.log("Bump....");
  $("#tabs").tabs({
    disabled: [1, 2, 3],
    active: 0,
    heightStyle: "fill",
  });

  $("#contactMeForm").validate({
    rules: {
      firstName: "required",
      lastName: "required",
      phoneNumber: "required",
      usedEmail: {
        required: true,
        email: true,
      },
      topicMessage: "required",
    }, // end of rules

    messages: {
      firstName: {
        required: "First Name required",
      },
      lastName: {
        required: "Last Name required",
      },
      phoneNumber: {
        required: "Phone Number required",
      },
      usedEmail: {
        required: "Valid email address required",
        email: "Invalid email",
      },
      topicMessage: {
        required: "State required",
      },
    },
    errorPlacement: function (error, element) {
      if (element.val() && element.hasClass("bottomError")) {
      } else {
        element.attr("placeholder", error.text());
        element.addClass("input-error-border");
      }
    },
  });
});
