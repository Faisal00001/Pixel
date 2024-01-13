const navLinks = document.querySelector('.navLinks');
function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navLinks.classList.toggle('top-[-100%]');
    navLinks.classList.toggle('top-[10%]');
}