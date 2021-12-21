import { Transactions } from "../models/transactions";

export class TransactionsView {

    private element: HTMLElement;
    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(model: Transactions): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
            </thead>
            <tbody>
                ${model.list().map((transaction) => {
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(transaction.date)}</td>
                            <td>${transaction.quantity}</td>
                            <td>${transaction.amount}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Transactions): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}