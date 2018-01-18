function piglatin(userInput) {
  if (userInput.charAt(0) === "a" || userInput.charAt(0) === "e" || userInput.charAt(0) === "i" || userInput.charAt(0) === "o" || userInput.charAt(0) === "u") {
      userInput += "way ";
      return userInput;
  } else if (userInput.charAt(0) === (/[a-z]/i) && userInput.charAt(0) != "a" || userInput.charAt(0) != "e" || userInput.charAt(0) != "i" || userInput.charAt(0) != "o" || userInput.charAt(0) != "u"){
  userInput = userInput.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + "ay ";
  return userInput;
}   else if (user.Input.charAt(0) != (/[a-z]/i)) {
  return userInput;
  }
};



$(document).ready(function() {
  var newArray = [];
  $("#userInput").submit(function(event) {
    var userInput1 = $("#userInput1").val().toLowerCase().split(/\b/);
    for (i=0; i<userInput1.length; i++) {
      newArray.push(piglatin(userInput1[i]));
    }
    alert(newArray);
      event.preventDefault();
});

});
