class myElement extends HTMLElement {
    constructor() {
        super();
    }
    getTemplate(){
        const Template = document.createElement('template');
        Template.innerHTML = `
            <section>
                <h2>Hola mundo</h2>
                <div>
                    <p>Soy más texto ejemplo</p>
                </div>
            </section>
            ${this.getStyles()}
        `;
        return Template;
    }

    getStyles(){
        return `
            <style>
                h2 {
                    color: red;
                }
            </style>
        `;
    }
    render(){
        this.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback(){
        this.render();
    }
}

customElements.define("my-element", myElement);