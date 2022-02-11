const addBtn = document.querySelector('#line-add-button');
const lineInput = document.querySelector('#line-name-input');
const lineTableBody = document.querySelector('#line-table-tbody');
const startSelect = document.querySelector('#line-start-station-selector');
const endSelect = document.querySelector('#line-end-station-selector');
let lineName = '';
let ascendingTerminus;
let descendingTerminus;

export function initLine() {
  if (localStorage.getItem('stations')) makeOptions();

  if (localStorage.getItem('lines')) {
    const arr = JSON.parse(localStorage.getItem('lines'));
    for (let obj of arr) {
      const line = createLine(obj.name, obj.start, obj.end);
      lineTableBody.append(line);
    }
  } else {
    localStorage.setItem('lines', '[]');
  }
}

export function updateLine() {
  while (startSelect.firstChild) {
    startSelect.removeChild(startSelect.firstChild);
  }

  while (endSelect.firstChild) {
    endSelect.removeChild(endSelect.firstChild);
  }

  while (lineTableBody.firstChild) {
    lineTableBody.removeChild(lineTableBody.firstChild);
  }
  initLine();
}

function makeOptions() {
  const arr = JSON.parse(localStorage.getItem('stations'));
  ascendingTerminus = arr[0];
  descendingTerminus = arr[0];

  arr.map((item) => {
    startSelect.insertAdjacentHTML(
      'beforeend',
      `<option value=${item}>${item}</option>`
    );
    endSelect.insertAdjacentHTML(
      'beforeend',
      `<option value=${item}>${item}</option>`
    );
  });
}

function createLine(lineName, ascendingTerminus, descendingTerminus) {
  const tr = document.createElement('tr');
  tr.setAttribute('data-id', lineName);
  const elements = `
    <td>${lineName}</td>
    <td>${ascendingTerminus}</td>
    <td>${descendingTerminus}</td>
    <td>
      <button class="line-delete-button" data-id=${lineName}>
        삭제
      </button>
    </td>
  `;
  tr.insertAdjacentHTML('afterbegin', elements);
  return tr;
}

function isValidLineName(lineName) {
  if (lineName.length === 0) {
    alert('노선 이름을 입력해주세요.');
    lineInput.value = '';
    lineInput.focus();
    return false;
  }

  const arr = JSON.parse(localStorage.getItem('lines'));
  for (let obj of arr) {
    if (obj.name === lineName) {
      alert('중복된 노선 이름은 등록할 수 없습니다.');
      lineInput.value = '';
      lineInput.focus();
      return false;
    }
  }
  return true;
}

function isValidTerminus(ascendingTerminus, descendingTerminus) {
  if (ascendingTerminus === descendingTerminus) {
    alert('상행 종점과 하행 종점은 서로 다른 역이어야 합니다.');
    return false;
  }
  return true;
}

function addLine() {
  const arr = JSON.parse(localStorage.getItem('lines'));
  const newLine = createLine(lineName, ascendingTerminus, descendingTerminus);
  lineTableBody.append(newLine);
  arr.push({
    name: lineName,
    start: ascendingTerminus,
    end: descendingTerminus,
  });
  localStorage.setItem('lines', JSON.stringify(arr));
}

function updateSectionData() {
  if (localStorage.getItem('sections')) {
    const arr = JSON.parse(localStorage.getItem('sections'));
    arr.push({
      name: lineName,
      list: [ascendingTerminus, descendingTerminus],
    });
    localStorage.setItem('sections', JSON.stringify(arr));
  } else {
    const arr = [
      { name: lineName, list: [ascendingTerminus, descendingTerminus] },
    ];
    localStorage.setItem('sections', JSON.stringify(arr));
  }
}

function deleteLine(toBeDeleted) {
  toBeDeleted.remove();
  const arr = JSON.parse(localStorage.getItem('lines'));
  const index = arr.indexOf(id);
  arr.splice(index, 1);
  localStorage.setItem('lines', JSON.stringify(arr));
}

lineInput.addEventListener('keyup', (e) => {
  lineName = e.target.value;
});

startSelect.addEventListener('change', (e) => {
  ascendingTerminus = e.target.value;
});

endSelect.addEventListener('change', (e) => {
  descendingTerminus = e.target.value;
});

addBtn.addEventListener('click', () => {
  if (
    isValidLineName(lineName) &&
    isValidTerminus(ascendingTerminus, descendingTerminus)
  ) {
    addLine();
    updateSectionData();
    lineInput.value = '';
    lineInput.focus();
  }
});

lineTableBody.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  const toBeDeleted = document.querySelector(`tr[data-id="${id}"]`);
  if (confirm('정말로 삭제하시겠습니까?')) {
    deleteLine(toBeDeleted);
  }
});
