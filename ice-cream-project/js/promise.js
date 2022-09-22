let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(() => {
                resolve(work());
            }, time);
        } 
        
        else {
            reject(console.log("our shop is closed"));
        }
    });
}
/*then 
1. then 과 then 사이 ; 사용불가 
2. then 과 then 사이에는 스페이스 무수히 가능.
*/
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))

.then(() => {
    return order(0000, () => console.log("production has started"));
})

.then(() => {
    return order(2000, () => console.log("the fruit was chopped"));
})

.then(() => {
    return order(1000, () =>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`));
})

.then(() => {
    return order(1000, () =>console.log("the machine was started"));
})

.then(() => {
    return order(2000, () =>console.log(`ice cream was placed on ${stocks.holder[0]}`));
})

.then(() => {
    return order(3000, () =>console.log(`${stocks.toppings[0]} was added as toppings`));
})

.then(() => {
    return order(2000, () => console.log("serve ice cream"));
})