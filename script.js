function compareNumbers() {
    // Prompt the user to enter two integers
    var num1 = parseInt(prompt("Enter the first integer:"));
    var num2 = parseInt(prompt("Enter the second integer:"));

    // Check if the numbers are equal
    if (num1 === num2) {
      document.getElementById("result").innerHTML = "<h1>The two numbers are equal</h1>";
    } else if (num1 > num2) {
      document.getElementById("result").innerHTML = "<h1>" + num1 + " is greater than " + num2 + "</h1>";
    } else {
      document.getElementById("result").innerHTML = "<h1>" + num2 + " is greater than " + num1 + "</h1>";
    }
  }

