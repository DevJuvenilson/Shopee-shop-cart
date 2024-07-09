
// CASOS DE USO

//adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

//deletar item do carrinho
async function deleteItem (userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

//remover um item / subtrair um item
async function removeItem (userCart, item) {

    //encontrar o indice do item
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    //caso não encontre o item
    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    //caso quantidade de item seja maior que 1, subtrair 1
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    //caso quantidade de item seja igual a 1, deletar o item
    if (userCart[indexFound].quantity == 1) {
        deleteItem(userCart, userCart[indexFound].name);
        return;
    }
}

//calcular o total
async function calculateTotal (userCart) {
    console.log("\nShopee Cart Total is:");
    const result = userCart.reduce((total, item) => total + (item.quantity) * (item.price), 0);
    console.log("🛒 R$ " + result.toFixed(2))
}

//mostrar itens do carrinho
async function displayCart (userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: R$ ${(item.price) * (item.quantity)}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}