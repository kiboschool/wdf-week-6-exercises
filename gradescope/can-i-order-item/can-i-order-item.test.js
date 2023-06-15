const w = require('jest-autograding-reporter').weight
const canIOrderItem  = require('./can-i-order-item')

describe('canIOrderItem', () => {
    it(w(1, 'should check if the item is in stock 1'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

        expect(canIOrderItem("Pizza", stockArray)).toBe(true);
        
    })
    it(w(1, 'should check if the item is in stock 2'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

       
        expect(canIOrderItem("Burger", stockArray)).toBe(true);

       
    })
    it(w(1, 'should check if the item is in stock 3'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];       
        expect(canIOrderItem("Pasta", stockArray)).toBe(false);
       
    })
    it(w(1, 'should check if the item is in  4'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

        expect(canIOrderItem("Salad", stockArray)).toBe(false);
    })
    it(w(1, 'should check if the item is in stock 5'), () => {
        const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, { "Pasta": 0 }];

        expect(canIOrderItem("Nuggets", stockArray)).toBe(false);
    })
})