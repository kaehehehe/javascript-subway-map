import { updateLine } from './line.js';

const addBtn = document.querySelector('#station-add-button');
const stationInput = document.querySelector('#station-name-input');
const stationTableBody = document.querySelector('#station-table-tbody');
let stationName = '';

export function initStation() {
  if (localStorage.getItem('stations')) {
    const arr = JSON.parse(localStorage.getItem('stations'));
    for (let stationName of arr) {
      const station = createStation(stationName);
      stationTableBody.append(station);
    }
  } else {
    localStorage.setItem('stations', '[]');
  }
}

function createStation(stationName) {
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', stationName);
  const elements = `
      <td>${stationName}</td>
      <td>
        <button class="station-delete-button" data-id=${stationName}>
          삭제
        </button>
      </td>
    `;
  tr.insertAdjacentHTML('afterbegin', elements);
  return tr;
}

function isValidStationName(stationName) {
  const arr = JSON.parse(localStorage.getItem('stations'));
  if (stationName.length < 2) {
    alert('역 이름은 2글자 이상이어야 합니다.');
    return false;
  } else if (arr.includes(stationName)) {
    alert('중복된 역 이름은 등록할 수 없습니다.');
    return false;
  }
  return true;
}

function isUsedLine(target) {
  if (localStorage.getItem('lines')) {
    const arr = JSON.parse(localStorage.getItem('lines'));
    for (let obj of arr) {
      if (obj.start === target || obj.end === target) {
        alert('노선에 등록된 역은 삭제할 수 없습니다.');
        return false;
      }
    }
  }
  return true;
}

stationInput.addEventListener('keyup', (e) => {
  stationName = e.target.value;
});

addBtn.addEventListener('click', () => {
  const arr = JSON.parse(localStorage.getItem('stations'));
  if (isValidStationName(stationName)) {
    const newStation = createStation(stationName);
    stationTableBody.append(newStation);
    arr.push(stationName);
    localStorage.setItem('stations', JSON.stringify(arr));
    updateLine();
  }
  stationInput.value = '';
  stationInput.focus();
});

stationTableBody.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (confirm('정말로 삭제하시겠습니까?')) {
    const toBeDeleted = document.querySelector(`tr[data-id=${id}]`);
    if (isUsedLine(toBeDeleted.dataset.id)) {
      toBeDeleted.remove();
      const arr = JSON.parse(localStorage.getItem('stations'));
      const index = arr.indexOf(id);
      arr.splice(index, 1);
      localStorage.setItem('stations', JSON.stringify(arr));
      updateLine();
    }
  }
});
