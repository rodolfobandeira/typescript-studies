import { TransactionController } from "./controllers/transaction-controller.js";
import { TransactionsView } from "./views/transactions-view.js";

const controller = new TransactionController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});

// const transactionsView = new TransactionsView
// const template = transactionsView.template();
// console.log(template);