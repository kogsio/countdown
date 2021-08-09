// Create a class for the element
class Overlay extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const message = this.getAttribute('message');


    this.innerHTML = `
        <div id="overlay">
            Hello
        </div>
    `;    
  }
}

// Define the new element
customElements.define('live-overlay', Overlay);



// Create a class for the element
class Submodule extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title       = this.getAttribute('title');
    const video       = this.getAttribute('video');
    const videoUrl    = this.getAttribute('videoUrl');
    const camtasia    = this.getAttribute('camtasia');    
    const camtasiaUrl = this.getAttribute('camtasiaUrl');
    const exercise    = this.getAttribute('exercise');
    const exerciseUrl = this.getAttribute('exerciseUrl');
    const test        = this.getAttribute('test');
    const testUrl     = this.getAttribute('testUrl');
    const optional    = this.getAttribute('optional');

    let videoStr = '';
    if(video){
      videoStr = `<a href="${videoUrl}"><i class="fas fa-video"></i> ${video}</a><br />`;
    }
    let camtasiaStr = '';
    if(camtasia){
      camtasiaStr = `<a href="${camtasiaUrl}"><i class="fab fa-cuttlefish"></i> ${camtasia}</a><br />`;
    }
    let exerciseStr = '';
    if(exercise){
      exerciseStr = `<a href="${exerciseUrl}"> <i class="fas fa-tools"></i> ${exercise}</a><br />`;
    }
    let testStr = '';
    if(test){
      testStr = `<a href="${testUrl}"> <i class="fas fa-vial"></i> ${test}</a><br/>`;
    }
    let optionalStr = '';
    if(optional){
      optionalStr = '<span style="color:red;">[OPTIONAL]</span>';
    }

    this.innerHTML = `
        <h5>${title} ${optionalStr}</h5>
        <p>
          ${videoStr}
          ${camtasiaStr}
          ${exerciseStr}
          ${testStr}          
        </p>
    `;    

  }
}

// Define the new element
customElements.define('mit-submodule', Submodule);


// Create a class for the element
class Module extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title = this.getAttribute('title');

    // card header color - bootstrap colors
    let color = this.getAttribute('color');
    if (color) {
      color = `style="background-color: var(--${color})`;
    }

    this.innerHTML = `
        <div class="card" id="accordion">
          <h5 class="card-header" ${color}">${title}</h5>
          <div  id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">          
            <div class="card-body">
              ${this.innerHTML}
            </div>
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);


