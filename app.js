if(typeof AudioContext !== 'undefined') {
  var ctx           = new AudioContext();
  var osc           = ctx.createOscillator();
  var gain          = ctx.createGain();
  var currentFreq   = null;
  gain.gain.value   = 0.5;
  osc.type          = "triangle";

  /*Connect the Oscillator to the gain node*/
  osc.connect(gain);

  /*Start the Oscillator at current time*/
  osc.start(ctx.currentTime);

  function keyPress(e) {
    var freq = parseFloat(e.target.dataset.frequency);
    osc.frequency.value=freq;

    if(!currentFreq) {
      gain.connect(ctx.destination);
    }

    currentFreq=freq;
  }

  function keyRelease(e) {
    var freq = parseFloat(e.target.dataset.frequency);

    setTimeout(function() {
      if(currentFreq === freq) {
        gain.disconnect(ctx.destination);
        currentFreq = null;
      }
    },700);
  }

  var reeds = document.querySelectorAll('.reed');

  for (var i=0; i<reeds.length; i++) {
    // For Computer
    reeds[i].addEventListener('mousedown',keyPress);
    reeds[i].addEventListener('mouseup',keyRelease);
    // For Touch Devices
    reeds[i].addEventListener('touchstart',keyPress);
    reeds[i].addEventListener('touchend',keyRelease);
  }
}
else {
  alert("Please use a real browser");
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
} else {
  window.location.replace('http://abetterbrowser.org/');
}
