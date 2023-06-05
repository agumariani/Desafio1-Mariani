//definir la clase productmanager

class ProductManager{
    constructor() {
        this.products = [];
        //Defino el constructor "products"
        //va a tener un arreglo vacío => para que el listado de productos me apareza vacío
    }


// Metodo para retornar arreglo de productos.
getProducts = () => {
    return this.products;
}

// Para poder almacenar los productos debemos pasarle ciertos parámetros.

addProduct = (title, description, price, thumbnail,code,stock) => {
    const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        products: [] //el elemento "products" va con array vacío
    }

    if (this.products.length === 0){
        product.id = 1
    } else {
        product.id = this.products [this.products.length-1 ].id + 1
    }

    //pusheamos el producto
    this.products.push(product)
}

 //Debe contar con el método getProductById, el cual recibe como parámetro el id del producto

getProductById = (idProduct) =>{
    const productIndex = this.products.findIndex(product => product.id === idProduct); 

    if (productIndex === -1){
        console.log("Not found");
        return;
    } else {
        console.log("Producto en stock");
    }

    const productAdd = this.products [productIndex].products.includes(idProduct);

    if (productAdd){
        console.log ("El producto se agregó correctamente");
        return;
    }
    this.products[productIndex].products.push(idProduct)
}
};

const manejadorProductos1 = new ProductManager ();
manejadorProductos1.addProduct ('Regla', 'transparente', 80, 'sin imágen', 'ab154', 36 );
manejadorProductos1.addProduct ('Lápiz', 'transparente', 100, 'sin imágen', 'ab155', 30 );
manejadorProductos1.addProduct ('Birome', 'transparente', 200, 'sin imágen', 'ab156', 15 );

// manejadorProductos1.getProductById(1);
// manejadorProductos1.getProductById(2);
// manejadorProductos1.getProductById(3);


const manejadorProductos2 = new ProductManager ();

manejadorProductos2.addProduct ('Jabon', 'Para manos', 300, 'sin imágen', 'j051', 34 );
manejadorProductos2.addProduct ('Crema', 'Hidratante', 1200, 'sin imágen', 'c210', 25 );


manejadorProductos2.getProductById(1);
manejadorProductos2.getProductById(2);

// console.log(manejadorProductos2.getProducts());