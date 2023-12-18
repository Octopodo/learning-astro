console.log('JS is working')
document.querySelector('.hamburger').addEventListener('click', () => {
  console.log('CLicked')
  document.querySelector('.nav-links').classList.toggle('expanded');
});