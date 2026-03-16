function loadIcons(){

    if(!document.getElementById("fontawesome")){

        const link = document.createElement("link");

        link.id = "fontawesome";
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

        document.head.appendChild(link);

    }

}

export function createFooter(){

    loadIcons();

    const footer = document.createElement("footer");

    footer.className = "footer";

    footer.innerHTML = `

        <div class="footer-container">

            <div class="footer-brand">

                <h2>Suketchi</h2>

                <p>
                    Plataforma creativa dedicada al arte digital, ilustración y diseño.
                </p>

            </div>

            <div class="footer-social">

                <a href="https://instagram.com" target="_blank">
                    <i class="fa-brands fa-instagram"></i>
                </a>

                <a href="https://twitter.com" target="_blank">
                    <i class="fa-brands fa-x-twitter"></i>
                </a>

                <a href="https://youtube.com" target="_blank">
                    <i class="fa-brands fa-youtube"></i>
                </a>

                <a href="https://github.com" target="_blank">
                    <i class="fa-brands fa-github"></i>
                </a>

            </div>

            <div class="footer-copy">
                © 2026 Suketchi — Todos los derechos reservados
            </div>

        </div>

    `;

    document.body.appendChild(footer);

}

createFooter();