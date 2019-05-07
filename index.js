var arrivalDay = new Date("May 9, 2019 16:30:00");

function calculateTimeToArrival() {
  var now = new Date();
  var diff = arrivalDay - now;
  var realTime = diff / 86400000;

  var days = realTime.toString().split('.')[0];

  var hourDecimal = realTime.toString().split('.')[1];
  var convertHourDemical = `0.${hourDecimal}`;
  var fractionHourRemaining = parseFloat(convertHourDemical) * 24;
  var hours = fractionHourRemaining.toString().split('.')[0];

  var minuteDecimal = fractionHourRemaining.toString().split('.')[1];
  var convertMinuteDecimal = `0.${minuteDecimal}`;
  var fractionMinuteRemaining = parseFloat(convertMinuteDecimal) * 60;
  var minutes = fractionMinuteRemaining.toString().split('.')[0];

  var secondDecimal = fractionMinuteRemaining.toString().split('.')[1];
  var convertSecondDecimal = `0.${secondDecimal}`;
  var fractionSecondRemaining = parseFloat(convertSecondDecimal) * 60;
  var seconds = fractionSecondRemaining.toString().split('.')[0];

  updateTimeToArrival(days, hours, minutes, seconds);
}

function updateTimeToArrival(days, hours, minutes, seconds) {
  $('.days').text(days);
  $('.hours').text(hours);
  $('.minutes').text(minutes);
  $('.seconds').text(seconds);
}

setInterval(calculateTimeToArrival, 100);
