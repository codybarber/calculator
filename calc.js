//Add AC button to clear all values, and leave the C button to only clear the display

//upload to git as is now, then make updates, then reupload.

//model after iPhone calc

var currentNumber;
var operator;

$(function () {
  $('.number').click(function () {
    var number = $(this).text();
    var currentDisplay = $("#display").val();
    var newDisplay = currentDisplay + number;
    $('#display').val(newDisplay);
  });

  $('.operator').click(function () {
    operator = $(this).text();
    currentNumber = Number($("#display").val());
    $('#display').val('');
  });

  $('.evaluate').click(function () {
    var newNumber = Number($('#display').val());
    if (operator && currentNumber) {
      if (operator === '+') {
        var result = currentNumber + newNumber;
      } else if (operator === '-') {
        result = currentNumber - newNumber;
      } else if (operator === 'x') {
        result = currentNumber * newNumber;
      } else if (operator === '÷') {
        result = currentNumber / newNumber;
      } else if (operator === '%') {
        result = currentNumber / 100;
      }
      $('#display').val(result);
    }
  });

  $('.allClear').click(function () {
    $('#display').val('');
    newNumber = 0;
    currentNumber = 0;
    result = 0;
    operator = 0;
  });

  $('.displayClear').click(function () {
    $('#display').val('');
  });
});
