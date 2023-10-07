
var form = document.getElementById('6530561'); // Replace 'id123' with your form ID
var inputField = document.getElementById('id123-control109685892'); // Replace with your input ID

// Add an event listener for the "submit" event on the form
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var inputValue = inputField.value;

  var url = 'https://xprscapital.com/grow-step-two?unique_id=' + encodeURIComponent(inputValue);

  // Redirect to another webpage with the captured value as a URL parameter
  window.location.href = url;
});
