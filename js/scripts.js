$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >=21) {
    $(#voteInfo).show();
  }else{
    $("#under-18").show();
  }
});