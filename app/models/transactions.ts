import { Transaction } from "./transaction.js";

export class Transactions {
    // private transactions: Array<Transaction> = [];
    private transactions: Transaction[] = [];

    add(transaction: Transaction): void {
        this.transactions.push(transaction);
    }

    // list(): ReadonlyArray<Transaction> {
    list(): readonly Transaction[] {
        // Using spread operator to avoid mutations using same 
        // list in memory.

        // Spread operator is NOT a transactions list inside another list,
        // it is a list with all elements of transactions inside it
        // [...this.transactions]

        // Another fancy solution is using ReadonlyArray<Transaction>
        // OR readonly Transaction[] {
        return this.transactions;
    }
}
