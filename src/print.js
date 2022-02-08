const map = document.querySelector('.map');

function resetRouteMap() {
  while (map.firstChild) {
    map.removeChild(map.firstChild);
  }
}

export function showRouteMap() {
  resetRouteMap();
  const arr = JSON.parse(localStorage.getItem('sections'));
  for (let obj of arr) {
    const ul = document.createElement('ul');
    const h3 = document.createElement('h3');
    h3.textContent = obj.name;
    map.append(h3);
    obj.list.forEach(item => {
      const li = `<li>${item}</li>`;
      ul.insertAdjacentHTML('beforeend', li);
    })
    map.append(ul)
  }
}