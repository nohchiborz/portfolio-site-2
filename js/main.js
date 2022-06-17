//Theme mode change sript

const toggleBtn = document.querySelector('.theme-toggle__btn');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
})

//Active link background color set script

const btns = document.querySelectorAll('.main__nav > a');

btns.forEach((item, i) => {
  item.addEventListener('click', function() {
    let current = document.querySelector('.active');
    current.classList.remove('active');
    item.classList.add('active');
  })
});
