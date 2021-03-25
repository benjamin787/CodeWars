//mine
const humanReadable = seconds => {
  let hours = 0, minutes = 0;
  if (seconds > 3599) {
    hours = Math.floor(seconds/3600)
    seconds = seconds % 3600
  }
  if (seconds > 59) {
    minutes = Math.floor(seconds/60)
    seconds = seconds % 60
  }
  return [hours, minutes, seconds].map(time => time.toString().padStart(2, '0')).join(":")
}

//top response 
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}