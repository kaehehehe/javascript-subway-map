import { initStation } from './station.js';
import { initLine } from './line.js';
import { initSection } from './section.js';

const stationBtn = document.querySelector('#station-manager-button');
const lineBtn = document.querySelector('#line-manager-button');
const sectionBtn = document.querySelector('#section-manager-button');
const printBtn = document.querySelector('#map-print-manager-button');
const station = document.querySelector('.station');
const line = document.querySelector('.line');
const section = document.querySelector('.section');
const mapPrint = document.querySelector('.print');
let currentPage;

window.addEventListener('load', () => {
  initStation();
  initLine();
  initSection();
});

function reset() {
  if (currentPage === 'station') {
    station.classList.remove('show');
  } else if (currentPage === 'line') {
    line.classList.remove('show');
  } else if (currentPage === 'section') {
    section.classList.remove('show');
  } else {
    mapPrint.classList.remove('show');
  }
}

stationBtn.addEventListener('click', () => {
  if (station.classList[1] !== 'show') {
    reset();
    station.classList.add('show');
    currentPage = 'station';
  }
});

lineBtn.addEventListener('click', () => {
  if (line.classList[1] !== 'show') {
    reset();
    line.classList.add('show');
    currentPage = 'line';
  }
});

sectionBtn.addEventListener('click', () => {
  if (section.classList[1] !== 'show') {
    reset();
    section.classList.add('show');
    currentPage = 'section';
  }
});

printBtn.addEventListener('click', () => {
  if (mapPrint.classList[1] !== 'show') {
    reset();
    mapPrint.classList.add('show');
    currentPage = 'mapPrint';
  }
});
