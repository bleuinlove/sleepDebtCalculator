function getSleepHours(day) {
  var hours = prompt('How many hours did you sleep ' + day + '?');
  return Number(hours);
}
function getActualSleepHours() {
  return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}
function getIdealSleepHours(){
  var idealHours = prompt('How much sleep would you prefer per night?');
  return Number(idealHours) * 7;
}
function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours){
  console.log('You\'re on track! You got ' + (actualSleepHours) + 'just like you wanted!');
}
else if (actualSleepHours > idealSleepHours){
  console.log('You should be feeling nice and rested! You got ' + (actualSleepHours - idealSleepHours) + 'hours more sleep than you wanted!');
}
else if(actualSleepHours < idealSleepHours){
  console.log('You\'d better turn in early this week! You got ' + (idealSleepHours - actualSleepHours) + ' less hours total this week than you wanted.');
}
}

calculateSleepDebt();
