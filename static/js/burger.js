// Burger-Menü für mobile Navigation
// Öffnet/schließt das Menü auf kleinen Bildschirmen

document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger-menu');
  var nav = document.querySelector('nav.cool-menu ul');
  if (burger && nav) {
    burger.addEventListener('click', function() {
      nav.classList.toggle('open');
      burger.classList.toggle('open');
    });
  }
});
