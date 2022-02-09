const sectionRegister = document.querySelector('.section-register');
const title = document.querySelector('.title');
const lineBtns = document.querySelector('.line-buttons');
const select = document.querySelector('#section-station-selector');
const sectionInput = document.querySelector('#section-order-input');
const addBtn = document.querySelector('#section-add-button');
const sectionTableBody = document.querySelector('#section-table-tbody');

let currentLine;
let selectedStation;
let selectedOrder;
let currentLineList;

export function initSection() {
  if (localStorage.getItem('sections')) {
    const arr = JSON.parse(localStorage.getItem('sections'));
    for (let obj of arr) {
      const btn = `<button class="section-line-menu-button" data-id=${obj.name}>${obj.name}</button>`;
      lineBtns.insertAdjacentHTML('beforeend', btn);
    }
  }
}

function resetLineBtns() {
  while (lineBtns.firstChild) {
    lineBtns.removeChild(lineBtns.firstChild);
  }
}

function resetOptions() {
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }
}

function resetTable() {
  while (sectionTableBody.firstChild) {
    sectionTableBody.removeChild(sectionTableBody.firstChild);
  }
}

export function updateLineBtns() {
  resetLineBtns();
  initSection();
  resetOptions();
  setOptions();
}

function updateTable() {
  resetTable();
  currentLineList.map((item, index) => {
    sectionTableBody.append(createSection(index, item));
  });
}

function updateSection() {
  resetTable();
  resetOptions();
  setOptions();
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

function setOptions() {
  const arr = JSON.parse(localStorage.getItem('stations'));
  selectedStation = arr[0];
  arr.map((item) => {
    select.insertAdjacentHTML(
      'beforeend',
      `<option value=${item}>${item}</option>`
    );
  });
}

function isDuplicateName() {
  if (currentLineList.includes(selectedStation)) {
    alert('이미 등록되어 있는 역은 등록할 수 없습니다.');
    return true;
  }
  return false;
}

function isLengthThreeOrMore() {
  if (currentLineList.length >= 3) {
    return true;
  } else {
    alert('노선에 포함된 역이 두개 이하일 때는 역을 제거할 수 없습니다.');
    return false;
  }
}

lineBtns.addEventListener('click', (e) => {
  updateSection();
  const id = e.target.dataset.id;
  currentLine = id;
  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    if (obj.name === id) {
      currentLineList = obj.list;
      const stations = obj.list;
      stations.map((item, index) => {
        sectionTableBody.append(createSection(index, item));
      });
    }
  }
  title.textContent = `${id} 관리`;
  sectionRegister.classList.add('show');
});

select.addEventListener('change', (e) => {
  selectedStation = e.target.value;
});

sectionInput.addEventListener('change', (e) => {
  selectedOrder = e.target.value;
});

addBtn.addEventListener('click', () => {
  if (isDuplicateName(selectedStation)) return;

  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    if (obj.name === currentLine) {
      const updateList = obj.list;
      updateList.splice(selectedOrder, 0, selectedStation);
      currentLineList = updateList;
    }
  }
  updateTable();
  localStorage.setItem('sections', JSON.stringify(arr));
});

function updateTerminus(start, end) {
  const arr = JSON.parse(localStorage.getItem('lines'));
  for (let obj of arr) {
    if (obj.name === currentLine) {
      obj.start = start;
      obj.end = end;
      localStorage.setItem('lines', JSON.stringify(arr));
    }
  }
}

function isDeletedTerminus(index, updateList) {
  const len = updateList.length;
  if (index === 0 || index === len - 1) {
    const start = currentLineList[0];
    const end = currentLineList[len - 1];
    updateTerminus(start, end);
  }
}

sectionTableBody.addEventListener('click', (e) => {
  const target = e.target.dataset.id;
  if (!isLengthThreeOrMore()) return;

  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    if (obj.name === currentLine) {
      const updateList = obj.list;
      const index = updateList.indexOf(target);
      updateList.splice(index, 1);
      currentLineList = updateList;
      isDeletedTerminus(index, updateList);
    }
  }
  updateTable();
  localStorage.setItem('sections', JSON.stringify(arr));
});
