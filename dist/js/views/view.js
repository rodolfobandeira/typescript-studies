// Lets use Generics here so that template() acceps different information
// on its children classes
export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Selector ${selector} not available in the DOM.`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
