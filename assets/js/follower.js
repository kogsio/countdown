// ---------------------
// ---   INTIALIZE   ---
// ---------------------


// out of time sound
var audio = new Audio('assets/audio/bell.mp3');

// topic counter
var counter = -1;

// topics counter
var topics = 0;
var list = document.getElementById('topicList');
var divs = list.querySelectorAll("div");

// count number of topics
divs.forEach(topic => {if(topic.id.includes('topic')) topics++})

// populate topics
divs.forEach(topic =>{
    topic.innerText = topic.getAttribute('topicTitle');
})

// -----------------
// ---   TIMER   ---
// -----------------


timeinterval = 0;
function timer(time){
  clearInterval(timeinterval);

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    
    return {
      total,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById('timer');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      var minutes = ('0' + t.minutes).slice(-2);
      var seconds = ('0' + t.seconds).slice(-2);
      clock.innerHTML = minutes + ':' + seconds;

      if (t.total <= 0) {
        clearInterval(timeinterval);
        audio.play();
      }
    }

    updateClock();
    timeinterval = setInterval(updateClock, 1000);
  }

  // const deadline = new Date(Date.parse(new Date()) + 2 * 60 * 1000);
  const deadline = new Date(Date.parse(new Date()) + time * 1000);
  initializeClock('clockdiv', deadline);
}  


// --------------------------------------
// ---   ACTIVATE/DEACTIVATE TOPICS   ---
// --------------------------------------


// activate topic
function activate(id){

    var topic = document.getElementById('topic' + id);
    topic.style.backgroundColor = '#EFBF46';
    topic.style.color = 'black';

    // get attributes
    var topicTime      = topic.getAttribute('topicTime');
    var topicTitle     = topic.getAttribute('topicTitle');
    var thumbnailTitle = topic.getAttribute('thumbnailTitle');
    var thumbnailImage = topic.getAttribute('thumbnailImage');
    var contentTitle   = topic.getAttribute('contentTitle');
    var contentImage   = topic.getAttribute('contentImage');
    var contentVideo   = topic.getAttribute('contentVideo');
    var footerTitle    = topic.getAttribute('footerTitle');


    // update UI
    topic.innerText = topicTitle
    document.getElementById('thumbnail').src = thumbnailImage;
    document.getElementById('thumbnailCaption').innerText = thumbnailTitle;
    document.getElementById('footerTitle').innerText = footerTitle;

    if (contentVideo){
        // show video
        document.getElementById('contentVideo').style.visibility = 'visible';


        // hide content image
        document.getElementById('contentImage').style.visibility = 'hidden';
        document.getElementById('contentTitle').style.visibility = 'hidden';
    }
    else{
        // hide and pause video
        document.getElementById('contentVideo').style.visibility = 'hidden';
        document.getElementById('contentVideo').pause()

        // set content image
        document.getElementById('contentImage').src = contentImage;
        document.getElementById('contentTitleBox').innerText = contentTitle;

        // show content image
        document.getElementById('contentImage').style.visibility = 'visible';
        document.getElementById('contentTitle').style.visibility = 'visible';
    }


    // start topic counter
    timer(topicTime);
}

// deactivate topic
function deactivate(id){

    topic = document.getElementById('topic' + id);
    topic.style.backgroundColor = '#561B15';
    topic.style.color = '#919191';        
}

// reset topic
function reset(id){
    
    clearInterval(timeinterval);    
    topic = document.getElementById('topic' + id);
    topic.style.backgroundColor = '#DC4533';
    topic.style.color = 'white';
}

// start show
function closeOverlay(){
 
    document.getElementById('overlay').style.visibility = 'hidden';
}

function blackScreen(){

    console.log('arrow up');
    document.getElementById('overlay').style.visibility = 'visible';
    document.getElementById('overlay').innerText = '';
}