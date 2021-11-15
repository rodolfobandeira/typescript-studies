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
    constructor(
        private _date: Date,
        private _quantity: number,
        private _amount: number
    ) {}

    get date(): Date {
        return this._date;
    }

    get quantity(): Number {
        return this._quantity;
    }

    get amount(): Number {
        return this._amount;
    }
}