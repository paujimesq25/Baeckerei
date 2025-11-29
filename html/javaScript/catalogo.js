// Menú móvil
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdown = document.querySelector('.dropdown');
    
    // Toggle menú principal en móvil
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }
    
    // Toggle dropdown en móvil
    if (dropdown) {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
    
    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (navMenu && menuToggle) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (dropdown) {
                    dropdown.classList.remove('active');
                }
            }
        }
    });
    
    // Marcar página activa
    let current = window.location.pathname.split("/").pop();

    if (current === "" || current === "/") {
        current = "index.html";
    }

    document.querySelectorAll(".nav-menu a").forEach(link => {
        const href = link.getAttribute("href");

        if (href === current) {
            link.classList.add("active");
        }
    });
});
