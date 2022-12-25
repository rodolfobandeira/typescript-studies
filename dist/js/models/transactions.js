export class Transactions {
    constructor() {
        // private transactions: Array<Transaction> = [];
        this.transactions = [];
    }
    add(transaction) {
        this.transactions.push(transaction);
    }
    // list(): ReadonlyArray<Transaction> {
    list() {
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
