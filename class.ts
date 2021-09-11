
class Car{
    model: string;
    price: number;
    private _millage: number;
    constructor(model: string, price: number){
        this.model = model;
        this.price = price;
        this._millage = 3344;
    }
    getMillage():number {
        const realMillage = this._millage + 23232;
        return realMillage;
    }
    getTotalPrice(tax: number): number{
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('fort', 232333333);
const totalPrice: number = toyota.getTotalPrice(22);
