document.getElementById('menu-toggle').addEventListener(
  'click',
  function() {
    this.classList.toggle('menu-toggle-active');
    document.getElementById('menu-mb').classList.toggle('!block')
  }
);

window.addEventListener("scroll", () => {
  // Lấy vị trí của phần tử fixed
  const fixedElement = document.getElementById('menu-mb');
  const fixedElementTop = fixedElement.getBoundingClientRect().top;
  const css = window.getComputedStyle(fixedElement);
  if(css.display !== 'none'){
    // Chặn scroll nếu phần tử fixed nằm ở đầu hoặc cuối trang
  if (fixedElementTop === 0 || fixedElementTop + fixedElement.offsetHeight === document.body.offsetHeight) {
    window.scrollTo(0, 0);
  }
  }
});