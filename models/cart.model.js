// this will take the "old cart" and create a new cart with the new info that way we can add the products 

module.exports = function cart(oldCart) {
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    //this function is to add to the cart - to check if it exists if not create a new one if yes increment qty and price
    this.add = function (item, id) {

        let storedItem = this.items[id];

        if (!storedItem) {
            storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    }

    //this function is to remove an item from cart
    this.remove = function (item, id) {

        let storedItem = this.items[id];

        if(storedItem.qty > 1){
            
            console.log("stored item qty is ", storedItem.qty)
            storedItem.qty -= 1;
            storedItem.price = storedItem.item.price * storedItem.qty;
            this.totalQty--;
            this.totalPrice -= storedItem.item.price;
        } else if (storedItem.qty === 1){
            this.removeAll(id)
        }
        
    }


    this.removeAll = function (id) {

        let storedItem = this.items[id];
        console.log(storedItem, this.totalPrice, this.totalQty)
        this.totalPrice -= storedItem.item.price * storedItem.qty;

        this.totalQty -= storedItem.qty;
        console.log(storedItem, this.totalPrice, this.totalQty)
        delete this.items[id]
    }
    this.generateArray = function () {
        const arr = [];
        for (let id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    }


}