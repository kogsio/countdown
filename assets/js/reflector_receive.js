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
    var data = JSON.parse(event.data);
    // console.log(event.data);    
    // console.log('id:', data.id);
    // console.log('method:', data.method);

    // keyboard navigation
    if(data.method == 'activate'){
      activate(data.id);
    }
    if(data.method == 'deactivate'){
      deactivate(data.id);
    }
    if(data.method == 'reset'){
      reset(data.id);
    }
    if(data.method == 'closeOverlay'){
      closeOverlay();
    }
    if(data.method == 'blackScreen'){
      blackScreen();
    }    

    // video control
    var overlayVideo = document.getElementById('overlayVideo');    
    var contentVideo = document.getElementById('contentVideo');

    if(data.method == 'overlayVideoPlay'){
      console.log('ping 01')
      overlayVideo.play();
    }
    if(data.method == 'overlayVideoPause'){
      console.log('ping 02')      
      overlayVideo.pause();
    }
    if(data.method == 'contentVideoPlay'){
      console.log('ping 03')      
      contentVideo.play();
    }
    if(data.method == 'contentVideoPause'){
      console.log('ping 04')      
      contentVideo.pause();
    }


  };

};
init();