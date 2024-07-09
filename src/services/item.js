// CASOS DE USO

// criar item com subtotal certo
async function createItem (name, price, quantity) {
    return {
        name,
        price,
        quantity,
    }   
}

export default createItem;