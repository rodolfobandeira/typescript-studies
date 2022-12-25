import { Transaction } from "../models/transaction.js";
import { Transactions } from "../models/transactions.js";
import { MessageView } from "../views/message-view.js";
import { TransactionsView } from "../views/transactions-view.js";
export class TransactionController {
    constructor() {
        this.transactions = new Transactions();
        this.transactionsView = new TransactionsView('#transactionsView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputAmount = document.querySelector('#amount');
        this.transactionsView.update(this.transactions);
    }
    add() {
        const transaction = this.createTransaction();
        this.transactions.add(transaction);
        // An issue here would be:
        // this.transactions.list().pop(); where it is allows mutation
        // To fix that, we need to change list() to return a different
        // list that points to another area in memory.
        // Check "transactions.ts" to see the new rule there
        this.transactionsView.update(this.transactions);
        this.messageView.update('Transaction successfully added.');
        this.clearForm();
    }
    createTransaction() {
        const regExp = /-/g;
        const date = new Date(this.inputDate.value.replace(regExp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const amount = parseFloat(this.inputAmount.value);
        const transaction = new Transaction(date, quantity, amount);
        return transaction;
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputAmount.value = '';
        this.inputDate.focus();
    }
}
