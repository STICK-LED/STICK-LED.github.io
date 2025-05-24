 // Пиздуйте Нахуй пастеры


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(event.target) && 
            !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
    
    let currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    const menuItems = document.querySelectorAll('#nav-menu li a, nav ul li a');
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        if (href === currentPage || 
            (href === 'index.html' && (currentPage === 'index.html' || currentPage === '' || currentPage === '/')) ||
            (href === './' && (currentPage === 'index.html' || currentPage === '' || currentPage === '/')) ||
            (href === '/' && (currentPage === 'index.html' || currentPage === '' || currentPage === '/'))) {
            item.classList.add('active');
        }
    });
}); 