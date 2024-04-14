class ProductManager {
    constructor(){
        this.products = [];
    }

    addProducts(title, description, price, thumbnail, code, stock){
        if(this.#getProducto(code) || (!(title && description && price && thumbnail && code && stock)) ) {
            console.log('El código ya existe en un producto existente o te falto rellenar un campo');
            return;
        }
        
        const product = {
            id:this.#getProductoID() + 1,
            title : title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code, 
            stock: stock,
        }
        this.products.push(product);
    }

    #getProductoID(){
        let productoID = 0;
        this.products.forEach((product) => {
            if(product.id > productoID)  productoID = product.id;
        });
        return productoID;
    }

    #getProducto(code){
        return this.products.find((product) =>  product.code === code)    
    }; 
        

    getProducts(){
        return this.products;
    }

}
const productManager = new ProductManager();

productManager.addProducts("Manzana", "color roja" , 35, "url", 1716 , 15 );
productManager.addProducts("Pera", "color amarilla" , 35, "url", 1716 , 15 );
productManager.addProducts("ciruela", "color violeta" , 35, "url", 1786 , 15 );
productManager.addProducts("Lechuga", "color verde" , 35, "url", 1786 ,  );
productManager.addProducts("Zapallo", "color naranja" , 35, "url", 1736 , 15 );
productManager.addProducts("Brokoli", "color  verde" , 35, "url", 1716 ,  );




console.log( productManager.getProducts());

// Costo pero salio!