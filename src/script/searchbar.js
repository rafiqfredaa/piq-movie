class searchbar extends HTMLElement {

    connectedCallback () {
        this.render();
    }

    set clickEvent (event) {
        this._clickEvent = event;
        this.render();
    }

    get value () {
        return this.querySelector("#search-input").value;
    }

    render () {
        this.innerHTML = `
        <div class="container">
            <div class="row mt-3 justify-content-center">
                <div class="col">
                    <h1 class="text-center">Search Movie</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Movie title..." id="search-input">
                        <div class="input-group-append">
                        <button class="btn btn-dark" type="button" id="search-button">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", searchbar)