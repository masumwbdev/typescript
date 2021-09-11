"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._millage = 3344;
    }
    getMillage() {
        const realMillage = this._millage + 23232;
        return realMillage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('fort', 232333333);
const totalPrice = toyota.getTotalPrice(22);
