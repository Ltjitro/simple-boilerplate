function startTime() {
  var d = new Date();
  var localTime = d.getTime();
  var localOffset = d.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  // obtain and add Paramaribo's UTC time offset
  // which is UTC - 3 hours
  var offset = 3;
  var paramaribo = utc - (3600000 * offset);
  var nd = new Date(paramaribo);
  var h = nd.getHours();
  var m = nd.getMinutes();
  var s = nd.getSeconds();
  var t = setTimeout(startTime, 500);
  var completeTimeNumber = (h * 100) + m;
  // document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;

  //elements
  var phase = document.getElementById('phase');
  var timefrom = document.getElementById('timefrom');
  var timeto = document.getElementById('timeto');
  var body = document.body;

  if(completeTimeNumber >= 513 && completeTimeNumber <= 540){
    console.log('Morning astronomical twilight');
    phase.innerHTML = 'Morning astronomical twilight';
    timefrom.innerHTML = '05:13';
    timeto.innerHTML = '05:40';
    body.className = "phase-1";
  }
  else if(completeTimeNumber >= 540 && completeTimeNumber <= 607){
    console.log('Morning nautical twilight');
    phase.innerHTML = 'Morning nautical twilight';
    timefrom.innerHTML = '05:40';
    timeto.innerHTML = '06:07';
    body.className = "phase-2";
  }
  else if(completeTimeNumber >= 607 && completeTimeNumber <= 629){
    console.log('Morning civil twilight');
    phase.innerHTML = 'Morning civil twilight';
    timefrom.innerHTML = '06:07';
    timeto.innerHTML = '06:29';
    body.className = "phase-3";
    // Morning civil twilight
  }
  else if(completeTimeNumber >= 629 && completeTimeNumber <= 649){
      setInfo('Sunrise', '06:29', '06:49', 'phase-4');
    // Sunrise
  }
  else if(completeTimeNumber >= 649 && completeTimeNumber <= 1835){
    setInfo('Daylight', '06:49', '18:35', 'phase-5');
    // Day
  }
  else if(completeTimeNumber >= 1835 && completeTimeNumber <= 1855){
    console.log('Sunset');
    phase.innerHTML = 'Sunset';
    timefrom.innerHTML = '18:35';
    timeto.innerHTML = '18:55';
    body.className = "phase-6";
    // Sunset
  }
  else if(completeTimeNumber >= 1855 && completeTimeNumber <= 1918){
    console.log('Evening civil twilight');
    phase.innerHTML = 'Evening civil twilight';
    timefrom.innerHTML = '18:55';
    timeto.innerHTML = '19:18';
    body.className = "phase-7";
    // Evening civil twilight
  }
  else if(completeTimeNumber >= 1918 && completeTimeNumber <= 1944){
    console.log('Evening nautical twilight');
    phase.innerHTML = 'Evening nautical twilight';
    timefrom.innerHTML = '19:18';
    timeto.innerHTML = '19:44';
    body.className = "phase-8";
    // Evening nautical twilight
  }
  else if(completeTimeNumber >= 1944 && completeTimeNumber <= 2011){
    console.log('Evening astronomical twilight');
    phase.innerHTML = 'Evening astronomical twilight';
    timefrom.innerHTML = '19:44';
    timeto.innerHTML = '20:11';
    body.className = "phase-9";
    // Evening astronomical twilight
  }
  else{
    console.log('Night-time');
    phase.innerHTML = 'Evening astronomical twilight';
    timefrom.innerHTML = '20:11';
    timeto.innerHTML = '05:13';
    body.className = "phase-10";
    // Dark
  }
}
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }

function setInfo(phase, timefrom, timeto, phaseclass){
  console.log(phase);
  phase.innerHTML = phase;
  timefrom.innerHTML = timefrom;
  timeto.innerHTML = timeto;
  document.body.className = phaseclass;
}

startTime();
