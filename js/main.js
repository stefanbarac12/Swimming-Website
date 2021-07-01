const ul = document.querySelector('ul');
const container = document.querySelector('.wrapper');
const lis = document.querySelectorAll('nav ul > li');

lis.forEach((x) => {
    x.addEventListener("click", () => {
        ul.className = '';
        container.classList.remove('change');
    });
});

const toggle = (x) => {
    ul.classList.toggle('show');
    x.classList.toggle('change');
}