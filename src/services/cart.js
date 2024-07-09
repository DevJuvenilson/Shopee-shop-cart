


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

//remover um item
async function removeItem (userCart, index) {

    //transforma o indice visual do usuario para o indice do backend
    const deleteIndex = index - 1;
    
    // é maior do que 0 e se é menor do que o tamanho do carrinho
    if (index >= 0 && index < userCart.lenght) {
        userCart.splice(deleteIndex, 1, "");
    }
}

//calcular o total
async function calculateTotal (userCart) {
    console.log("\nShopee Cart Total is:");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("🛒 R$ " + result.toFixed(2))
}

//mostrar itens do carrinho
async function displayCart (userCart) {
    console.log("\nShopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: R$ ${item.subtotal()}`);
    });
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart,
}