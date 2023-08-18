document.querySelector('.sidebar-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('minimized');
});

// Get the form element
var form = document.querySelector("form");

// Add an event listener to handle the form submission
form.addEventListener("submit", function(event) {
  // Prevent the default form action
  event.preventDefault();

  // Get the input elements
  var firstNumber = document.getElementById("firstNumber");
  var secondNumber = document.getElementById("secondNumber");

  // Get the values of the input elements
  var firstValue = Number(firstNumber.value);
  var secondValue = Number(secondNumber.value);

  // Check if the values are valid numbers
  if (isNaN(firstValue) || isNaN(secondValue)) {
    // Display an error message
    alert("Please enter valid numbers");
  } else {
    // Calculate the sum of the values
    var sum = firstValue + secondValue;

    // Display the result
    alert("The sum is " + sum);
  }
});
