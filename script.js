
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(90deg, rgba(0,100,255,1) 0%, rgba(0,80,200,1) 100%)';
    } else {
        navbar.style.background = 'linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(0,100,255,1) 100%)';
    }
});
