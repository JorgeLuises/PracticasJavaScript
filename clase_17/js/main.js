let guardarProducto = document.getElementById("safe-product");

let productos = [];

//Evento
guardarProducto.addEventListener("click" , (event) => {
    event.preventDefault();
    let campos = document.querySelectorAll("#product-form input");
    let producto = {};
    campos.forEach((campo) => {
        producto[campo.name] = campo.value;
        campo.value = "";
    });
    productos = [...productos, producto];
    console.log (productos);

    showProduct(productos, "filtroProductos");
    showProductCard(productos, "products-area");
});

//Creacion del filtro
const productItem = (product) => {
    let {producto} = product;
    let productItem = document.createElement("option");
    productItem.classList.add("producto-item");
    let productItemContent = document.createTextNode(producto);
    productItem.append(productItemContent);
    return productItem;
};

const showProduct = (array, containerId) => {
    let filter = document.getElementById(containerId);

    while (filter.firstChild) {
        filter.removeChild(filter.firstChild);
    }

    array.forEach((productoObject) => filter.append(productItem(productoObject)));
};

//Creacion de cartas de productos
const createProductCard = (productObject) => {
    let {producto, descripcion, precio, imagen} = productObject;

    let productCard = document.createElement("div");
    productCard.classList.add("product-card", "blog-card", "m-5", "border", "border-black", "border-1", "rounded");

    let productImg = document.createElement("img");
    productImg.classList.add("product-img");
    productImg.setAttribute("src", imagen);

    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info", "p-2");

    let productName = document.createElement("h3");
    productName.classList.add("product-name");
    let name = document.createTextNode(producto);
    productName.append(name);
    
    let productPrecie = document.createElement("p");
    productPrecie.classList.add("product-precie");
    let precie = document.createTextNode(`${precio} MXN`);
    productPrecie.append(precie);

    let buyBotton = document.createElement("button");
    buyBotton.classList.add('btn', 'btn-primary', 'me-md-2', 'compra');
    let textButton = document.createTextNode("Comprar articulo");
    buyBotton.append(textButton);

    let productDescription = document.createElement("p");
    productDescription.classList.add("product-description");
    let descriptionContent = descripcion.split(" ").length;
    console.log(descriptionContent);
    if (descriptionContent > 10) {
        let unionDescription = descripcion.split(" ", 10).join(" ");
        let textDescription = document.createTextNode(`${unionDescription}...`);
        productDescription.append(textDescription);
    }
    else {
        let textDescription = document.createTextNode(descripcion);
        productDescription.append(textDescription);
    }
    
    productInfo.append(productName,productDescription, productPrecie, buyBotton);
    productCard.append(productImg, productInfo);
    
    return productCard;
};

const showProductCard = (array, containerId) => {
    let cardContainers = document.getElementById(containerId);
    
    while (cardContainers.firstChild) {
        cardContainers.removeChild(cardContainers.firstChild);
    }

    array.forEach((producto) => cardContainers.append(createProductCard(producto)));
}