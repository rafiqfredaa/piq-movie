class nav_bar extends HTMLElement {
    connectedCallback () {
        this.render();
    }

    render () {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a href="#" class="navbar-brand">Piq-Movie</a>
                </div>
            </nav>
        `;
    }
}

customElements.define("nav-bar", nav_bar)