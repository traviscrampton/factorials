var factorial = function(number_input) {
  if (number_input === 0) {
    return 1;
  }

  return number_input * factorial(number_input - 1);
};


$(document).ready(function(event) {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $('.factorial').text(result);
    $('#result').show();
    event.preventDefault();
  });
});
