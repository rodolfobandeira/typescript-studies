import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";

export class TransactionController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private transactions = new Transactions();

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputAmount = document.querySelector('#amount');
    }

    add(): void {
        const transaction = this.createTransaction();
        this.transactions.add(transaction);
        // An issue here would be:
        // this.transactions.list().pop(); where it is allows mutation
        // To fix that, we need to change list() to return a different
        // list that points to another area in memory.
        // Check "transactions.ts" to see the new rule there
        
        console.log(this.transactions.list());

        this.clearForm();
    }

    createTransaction(): Transaction {
        const regExp = /-/g;
        const date = new Date(this.inputDate.value.replace(regExp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const amount = parseFloat(this.inputAmount.value);

        const transaction = new Transaction(
            date,
            quantity,
            amount,
        );

        return transaction;
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputAmount.value = '';
        this.inputDate.focus();
    }
}