// Aqui se saca el precio total de los productos que se encuentran en el carrito
// Se hace un forEach para recorrer el array de productos y se multiplica el precio por la cantidad de productos
// Se retorna el total de la suma de los precios de los productos

const totalPrice = (products) => {
    let total = 0;
    products.forEach(product => total += product.price)
    return total;
}

export default totalPrice;  