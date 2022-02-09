import * as station from './station.js';
import * as line from './line.js';
import * as section from './section.js';
import * as print from './print.js';

const stationBtn = document.querySelector('#station-manager-button');
const lineBtn = document.querySelector('#line-manager-button');
const sectionBtn = document.querySelector('#section-manager-button');
const printBtn = document.querySelector('#map-print-manager-button');
const stationPage = document.querySelector('.station');
const linePage = document.querySelector('.line');
const sectionPage = document.querySelector('.section');
const printPage = document.querySelector('.print');
let currentPage;

window.addEventListener('load', () => {
  station.initStation();
  line.initLine();
  section.initSection();
});

function reset() {
  if (currentPage === 'station') {
    stationPage.classList.remove('show');
  } else if (currentPage === 'line') {
    linePage.classList.remove('show');
  } else if (currentPage === 'section') {
    sectionPage.classList.remove('show');
  } else {
    printPage.classList.remove('show');
  }
}

stationBtn.addEventListener('click', () => {
  if (stationPage.classList[1] !== 'show') {
    reset();
    stationPage.classList.add('show');
    currentPage = 'station';
  }
});

lineBtn.addEventListener('click', () => {
  line.updateLine();
  if (linePage.classList[1] !== 'show') {
    reset();
    linePage.classList.add('show');
    currentPage = 'line';
  }
});

sectionBtn.addEventListener('click', () => {
  section.updateLineBtns();
  if (sectionPage.classList[1] !== 'show') {
    reset();
    sectionPage.classList.add('show');
    currentPage = 'section';
  }
});

printBtn.addEventListener('click', () => {
  print.showRouteMap();
  if (printPage.classList[1] !== 'show') {
    reset();
    printPage.classList.add('show');
    currentPage = 'print';
  }
});
