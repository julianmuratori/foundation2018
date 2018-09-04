

// import "./scss/main.scss";
import Siema from 'siema';
require('../src/scss/main.scss');


// variables for modal functionality 
const sfap = document.getElementById('sfap')
const march = document.getElementById('march')
const financials = document.getElementById('financials')


// *** MODAL COMBAT *** 

// function to add is-active to the sfap modal
function sfapModal(e) {    
    e.preventDefault();
    const container = document.getElementById('sfapmodal')
    container.classList.add('is-active')
    closeModal(container)
}

function financialsModal(e) {
  e.preventDefault();
  const container = document.getElementById("financialmodal");
  container.classList.add("is-active");
  closeModal(container);
}

function marchModal(e) {
  e.preventDefault();
  const container = document.getElementById("marchmodal");
  container.classList.add("is-active");
  closeModal(container);
}



// function to close the modal

function closeModal(container) {
    container.addEventListener("click", function() {
        this.classList.remove('is-active')
    }, false);    
}

sfap.addEventListener("click", sfapModal, false);
march.addEventListener("click", marchModal, false);
financials.addEventListener("click", financialsModal, false);

// *** FINISH HIM ***

const highlights = new Siema({
    draggable: false 
})

const pac = document.getElementById('pac')
const teenPhilanthropy = document.getElementById("teen-philanthropy");
const legacy = document.getElementById("legacy");
const bol = document.getElementById("bol");


legacy.addEventListener("click", e => {
    e.preventDefault();
    highlights.goTo(0);
})
pac.addEventListener("click", e => {
    e.preventDefault();
    highlights.goTo(1);
})
bol.addEventListener('click', (e) => {
e.preventDefault();
highlights.goTo(2);
})
teenPhilanthropy.addEventListener("click", e => {
  e.preventDefault();
  highlights.goTo(3);
});


