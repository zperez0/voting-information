$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >=18) {
    $("#voteInfo").show();
  }else{
    $("#under-18").show();
  }
});

// $(document).ready(function() {
//   const over21 = confirm("Are you over 21? Click OK for yes or Cancel for no.");

//   if (over21) {
//     $('#drinks').show();
//   } else {
//     $('#under-21').show();
//   }
// });