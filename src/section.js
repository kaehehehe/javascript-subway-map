const sectionRegister = document.querySelector('.section-register');
const title = document.querySelector('.title');
const lineBtns = document.querySelector('.line-buttons');
const select = document.querySelector('#section-station-selector');
const sectionTableBody = document.querySelector('#section-table-tbody');

let currentLine;

export function initSection() {
  if (localStorage.getItem('sections')) {
    const arr = JSON.parse(localStorage.getItem('sections'));
    for (let obj of arr) {
      const btn = `<button class="section-line-menu-button" data-id=${obj.name}>${obj.name}</button>`;
      lineBtns.insertAdjacentHTML('beforeend', btn);
    }
  }
}

function createSection(order, stationName) {
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', stationName);
  const elements = `
    <td class="order">${order}</td>
    <td>${stationName}</td>
    <td>
      <button class="section-delete-button" data-id=${stationName}>
        노선에서 제거
      </button>
    </td>
  `;
  tr.insertAdjacentHTML('afterbegin', elements);
  return tr;
}

function reset() {
  while (sectionTableBody.firstChild) {
    sectionTableBody.removeChild(sectionTableBody.firstChild);
  }

  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
}

function setOptions() {
  const arr = JSON.parse(localStorage.getItem('stations'));
  arr.map((item) => {
    select.insertAdjacentHTML(
      'beforeend',
      `<option value=${item}>${item}</option>`
    );
  });
}

function isLengthThreeOrMore(currentLine) {
  const arr = JSON.parse(localStorage.getItem('sections'));
  let stations;
  for (let obj of arr) {
    if (obj.name === currentLine) {
      stations = obj.list;
    }
  }
  if (stations.length >= 3) {
    return true;
  } else {
    alert('노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없습니다.');
    return false;
  }
}

lineBtns.addEventListener('click', (e) => {
  reset();
  setOptions();
  const id = e.target.dataset.id;
  currentLine = id;
  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    if (obj.name === id) {
      const stations = obj.list;
      stations.map((item, index) => {
        sectionTableBody.append(createSection(index, item));
      });
    }
  }
  title.textContent = `${id} 관리`;
  sectionRegister.classList.add('show');
});

sectionTableBody.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (isLengthThreeOrMore(currentLine)) {
  }
});
