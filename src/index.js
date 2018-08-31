

// import "./scss/main.scss";
require('../src/scss/main.scss');

const sfap = document.getElementById('sfap')
const march = document.getElementById('march')
const financials = document.getElementById('financials')

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




