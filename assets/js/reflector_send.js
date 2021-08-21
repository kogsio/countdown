let ws;

function init() {
  if (ws) {
    ws.onerror = ws.onopen = ws.onclose = null;
    ws.close();
  }

  ws = new WebSocket(`ws://${location.host}`);
  ws.onerror = function () {
    console.log('WebSocket error');
  };
  ws.onopen = function () {
    console.log('WebSocket connection established');
  };
  ws.onclose = function () {
    console.log('WebSocket connection closed');
    ws = null;
  };

  ws.onmessage = function(event) {
    console.log(event.data);
  };

};
init();

function sendMsg(msg) {
  if (!ws) {
    console.log('Error: no connection - no ws object!');
  }

  ws.send(msg);
  console.log(`Sent: ${msg}`);
};

// broadcast overlay video events
var overlayVideo = document.getElementById('overlayVideo');    
overlayVideo.addEventListener('play', (event) => sendEvent(0, 'overlayVideoPlay'));
overlayVideo.addEventListener('pause', (event) => sendEvent(0, 'overlayVideoPause'));

// broadcast content video events
var contentVideo = document.getElementById('contentVideo');    
contentVideo.addEventListener('play', (event) => sendEvent(0, 'contentVideoPlay'));
contentVideo.addEventListener('pause', (event) => sendEvent(0, 'contentVideoPause'));


// function sendEvent(id, method){
//   sendMsg(`{"id":${id}, "method": "${method}"}`);
// }

/*
// broadcast key event
function sendKeyEvent(e, counter){

    // --------------------------------------
    //    NATIVATION MENU:
    //      arrow down  (40) - start
    //      arrow right (39) - next    
    //      arrow left  (37) - back
    //      space bar   (32) - green screen
    //      arrow up    (38) -  end, Q & A
    // --------------------------------------

    // space, green screen
    if(e.keyCode == 32){      
      sendMsg(`{"key":"Space", "keyCode": 32, "counter": ${counter}}`);
    }

    // arrow left, back
    if(e.keyCode == 37){      
      sendMsg(`{"key":"ArrowLeft", "keyCode": 37, "counter": ${counter}}`);
    }

    // arrow up, end - Q&A
    if(e.keyCode == 38){      
      sendMsg(`{"key":"ArrowUp", "keyCode": 38, "counter": ${counter}}`);
    }

    // arrow right, next
    if(e.keyCode == 39){      
      sendMsg(`{"key":"ArrowRight", "keyCode": 39, "counter": ${counter}}`);
    }

    // arrow down, start
    if(e.keyCode == 40){
      sendMsg(`{"key":"ArrowDown", "keyCode": 40, "counter": ${counter}}`);
    } 

}
*/


