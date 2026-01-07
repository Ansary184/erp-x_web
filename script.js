document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            // هذا السطر يقوم بإضافة أو إزالة كلاس "active" عند كل ضغطة
            navLinks.classList.toggle('active');
        });
    }
});