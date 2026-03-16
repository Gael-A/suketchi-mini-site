export function createNavbar(){

    setFavicon();

    const navbar = document.createElement("nav");
    navbar.className = "navbar";

    navbar.innerHTML = `

        <div class="navbar-container">

            <a href="index.html" class="navbar-logo">
                <img src="SVG/logo-scribble.svg" alt="Suketchi">
                Suketchi
            </a>

            <div class="navbar-toggle" id="navbarToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="navbar-menu" id="navbarMenu">

                <a href="index.html" class="navbar-link">Inicio</a>
                <a href="nosotros.html" class="navbar-link">Nosotros</a>
                <a href="servicios.html" class="navbar-link">Servicios</a>
                <a href="contacto.html" class="navbar-link">Contacto</a>

            </div>

        </div>

    `;

    document.body.prepend(navbar);

    setActiveLink();
    setupMobileMenu();

}

function setFavicon(){

    let link = document.querySelector("link[rel='icon']");

    if(!link){

        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);

    }

    link.type = "image/svg+xml";
    link.href = "SVG/logo-scribble.svg";

}

function setActiveLink(){
    const links = document.querySelectorAll(".navbar-link");
    const path = window.location.pathname.split("/").pop();

    links.forEach(link=>{
        const href = link.getAttribute("href");

        if(href === path || (path === "" && href === "index.html")){
            link.classList.add("active");
        }
    });
}

function setupMobileMenu(){
    const toggle = document.getElementById("navbarToggle");
    const menu = document.getElementById("navbarMenu");

    toggle.addEventListener("click",()=>{
        menu.classList.toggle("open");
    });
}

createNavbar();