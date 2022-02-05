// Lets use Generics here so that template() acceps different information
// on its children classes

export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string) {
        const element = document.querySelector(selector);

        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw Error(`Selector ${selector} not available in the DOM.`);
        }
    }

    update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

    abstract template(model: T): string;
}