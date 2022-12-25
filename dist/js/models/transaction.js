export class Transaction {
    /*
    Old school way to declare things. We're gonna use
    Typescrypt magic to do the same thing for the constructor logic

    private _date: Date;
    private _quantity: Number;
    private _amount: Number;

    constructor(date: Date, quantity: number, amount: number) {
        this._date = date;
        this._quantity = quantity;
        this._amount = amount;
    }
    */
    // Option 1:
    // Here is the TypeScript Magic
    constructor(_date, _quantity, _amount) {
        this._date = _date;
        this._quantity = _quantity;
        this._amount = _amount;
    }
    get date() {
        return this._date;
    }
    get quantity() {
        return this._quantity;
    }
    get amount() {
        return this._amount;
    }
}
