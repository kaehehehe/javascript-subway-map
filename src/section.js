const lineBtns = document.querySelector('.line-buttons');

export function initSection() {
  if (localStorage.getItem('lines')) {
    const arr = JSON.parse(localStorage.getItem('lines'));
    for (let obj of arr) {
      const btn = `<button class="section-line-menu-button" data-id=${obj.name}>${obj.name}</button>`;
      lineBtns.insertAdjacentHTML('beforeend', btn);
    }
  }
}
