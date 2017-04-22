function getSleepHours(day) {
  var hours = prompt('How many hours did you sleep ' + day + '?');
  return Number(hours);
}
function getActualSleepHours() {
    return (function() {
        var days = [ 'Monday', 'Tuesday', 'Wednesday',
            'Thursday', 'Friday', 'Saturday', 'Sunday' ];
        var hours = 0, day, i = 0;
        for ( ; i < 7; ) {
            day = days[i++];
            hours += getSleepHours(day);
        }
        return hours;
    })();
}


function getIdealSleepHours(){
  var idealHours = prompt('How much sleep would you prefer per night?');
  return Number(idealHours) * 7;
}
function calculateSleepDebt(day) {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
}
if(actualSleepHours === idealSleepHours){
  console.log('You\'re on track! You got ' + actualSleepHours + 'just like you wanted!');
}
else if (actualSleepHours > idealSleepHours){
  console.log('You should be feeling nice and rested! You got ' (actualSleepHours - idealSleepHours));
}
else if(actualSleepHours < idealSleepHours){
  console.log('You\'d better turn in early tonight! You got ' + (idealSleepHours - actualSleepHours));
}
getSleepHours();
getSleepDebt();
