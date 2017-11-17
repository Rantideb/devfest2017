if(typeof AudioContext!='undefined'){
  var ctx           = new AudioContext();
  var osc           = ctx.createOscillator();
  var gain          = ctx.createGain();
  var currentFreq   = null;
  // Initial Setup
  gain.gain.value=0.5;
  osc.type="triangle";
  osc.connect(gain);
  osc.start(ctx.currentTime);
  // Event Listeners
  function keyPress(e){
    console.log('keypress');
    var freq = parseFloat(e.target.dataset.frequency);
    if(!freq){
      return false;
    }
    osc.frequency.value=freq;
    if(!currentFreq){
      gain.connect(ctx.destination);
    }
    currentFreq=freq;
  }
  function keyRelease(e){
    console.log('release');
    var freq = parseFloat(e.target.dataset.frequency);
    setTimeout(function(){
      if(currentFreq==freq){
        gain.disconnect(ctx.destination);
        currentFreq = null;
      }
    },700);
  }
  var reeds = document.querySelectorAll('.reed');
  for(i=0;i<reeds.length;i++){
    reeds[i].addEventListener('mousedown',keyPress);
    reeds[i].addEventListener('touchstart',keyPress);
    reeds[i].addEventListener('mouseup',keyRelease);
    reeds[i].addEventListener('touchend',keyRelease);
  }
}
else{
  alert("Please use a real browser");
}
