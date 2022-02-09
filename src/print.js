const map = document.querySelector('.map');

function resetRouteMap() {
  while (map.firstChild) {
    map.removeChild(map.firstChild);
  }
}

function noRouteMap() {
  const span = document.createElement('span');
  span.textContent = '등록되어 있는 노선이 없습니다.';
  map.append(span);
}

function createRouteMap() {
  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.textContent = obj.name;
    map.append(h3);
    obj.list.forEach((item) => {
      const li = `<li>${item}</li>`;
      ul.insertAdjacentHTML('beforeend', li);
    });
    map.append(ul);
  }
}

export function showRouteMap() {
  resetRouteMap();
  if (!localStorage.getItem('sections')) {
    noRouteMap();
    return;
  }
  createRouteMap();
}
