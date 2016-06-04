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

  if(completeTimeNumber >= 513 && completeTimeNumber <= 540){
    console.log('Morning astronomical twilight');
    document.getElementById('phase').innerHTML = 'Morning astronomical twilight';
    document.getElementById('timefrom').innerHTML = '05:13';
    document.getElementById('timeto').innerHTML = '05:40';
  }
  else if(completeTimeNumber >= 540 && completeTimeNumber <= 607){
    console.log('Morning nautical twilight');
    document.getElementById('phase').innerHTML = 'Morning nautical twilight';
    document.getElementById('timefrom').innerHTML = '05:40';
    document.getElementById('timeto').innerHTML = '06:07';
  }
  else if(completeTimeNumber >= 607 && completeTimeNumber <= 629){
    console.log('Morning civil twilight');
    document.getElementById('phase').innerHTML = 'Morning civil twilight';
    document.getElementById('timefrom').innerHTML = '06:07';
    document.getElementById('timeto').innerHTML = '06:29';
    // Morning civil twilight
  }
  else if(completeTimeNumber >= 629 && completeTimeNumber <= 649){
    console.log('Sunrise');
    document.getElementById('phase').innerHTML = 'Sunrise';
    document.getElementById('timefrom').innerHTML = '06:29';
    document.getElementById('timeto').innerHTML = '06:49';
    // Sunrise
  }
  else if(completeTimeNumber >= 649 && completeTimeNumber <= 1835){
    console.log('Daylight');
    document.getElementById('phase').innerHTML = 'Daylight';
    document.getElementById('timefrom').innerHTML = '06:49';
    document.getElementById('timeto').innerHTML = '18:35';
    // Day
  }
  else if(completeTimeNumber >= 1835 && completeTimeNumber <= 1855){
    console.log('Sunset');
    document.getElementById('phase').innerHTML = 'Sunset';
    document.getElementById('timefrom').innerHTML = '18:35';
    document.getElementById('timeto').innerHTML = '18:55';
    // Sunset
  }
  else if(completeTimeNumber >= 1855 && completeTimeNumber <= 1918){
    console.log('Evening civil twilight');
    document.getElementById('phase').innerHTML = 'Evening civil twilight';
    document.getElementById('timefrom').innerHTML = '18:55';
    document.getElementById('timeto').innerHTML = '19:18';
    // Evening civil twilight
  }
  else if(completeTimeNumber >= 1918 && completeTimeNumber <= 1944){
    console.log('Evening nautical twilight');
    document.getElementById('phase').innerHTML = 'Evening nautical twilight';
    document.getElementById('timefrom').innerHTML = '19:18';
    document.getElementById('timeto').innerHTML = '19:44';
    // Evening nautical twilight
  }
  else if(completeTimeNumber >= 1944 && completeTimeNumber <= 2011){
    console.log('Evening astronomical twilight');
    document.getElementById('phase').innerHTML = 'Evening astronomical twilight';
    document.getElementById('timefrom').innerHTML = '19:44';
    document.getElementById('timeto').innerHTML = '20:11';
    // Evening astronomical twilight
  }
  else{
    console.log('Night-time');
    document.getElementById('phase').innerHTML = 'Evening astronomical twilight';
    document.getElementById('timefrom').innerHTML = '20:11';
    document.getElementById('timeto').innerHTML = '05:13';
    // Dark
  }
}
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }

startTime();
