import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];
const myWishList = [];

console.log('Welcome to your Shopee Cart!');

const item1 = await createItem("HotWheels Ferrari", 20.99, 2);
const item2 = await createItem("HotWheels Lamborghini", 39.99, 2);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);

// DELETAR ITENS
// await cartService.deleteItem(myCart, item2.name);
// await cartService.deleteItem(myCart, item1.name);

await cartService.calculateTotal(myCart);

export {
    myCart,
    item1,
    item2,
}