const link = document.querySelector('.menu a[href="#Objetivos"]');

link.addEventListener('click', function (e) {
  e.preventDefault();
  const target = document.querySelector('#Objetivos');
  const offset = document.querySelector('.menu').offsetHeight;
  const pos = target.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: pos, behavior: 'smooth' });
});
