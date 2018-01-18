function piglatin(userInput) {
  //A-Z characters only
  if (userInput.match(/[a-z]/i)) {

    //if the first letter is vowel, it add "ay"
  if (userInput.charAt(0) === "a" || userInput.charAt(0) === "e" || userInput.charAt(0) === "i" || userInput.charAt(0) === "o" || userInput.charAt(0) === "u") {
      userInput += "way ";
      return userInput;}

    //if the first letter constant piglatinify it
   else { (userInput.charAt(0) === (/[a-z]/i) && userInput.charAt(0) != "a" || userInput.charAt(0) != "e" || userInput.charAt(0) != "i" || userInput.charAt(0) != "o" || userInput.charAt(0) != "u")
  userInput = userInput.replace(/(\w+?)([aeiou]\w+)/i, '$2$1') + "ay ";
  return userInput;

}

//dealing with non-letters
} else {
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
    $("#answers").text(newArray.join(""));
      event.preventDefault();
});

});
