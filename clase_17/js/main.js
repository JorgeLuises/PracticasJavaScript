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

/*Solucion del profe
let fields = document.querySelectorAll("#product-form input");

let products = [
  {
    name: "PS4",
    description: "La mejor play station que se ha creado por siempre jamás",
    picture:
      "https://sm.ign.com/t/ign_es/news/s/sony-expec/sony-expects-to-be-done-with-ps4-games-by-2025_a2x8.1200.jpg",
    price: 9000,
    category: "videojuegos",
  },
  {
    name: "Jamón",
    description: "Pus un jamón nomas",
    picture:
      "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1262467_S_1280_F.jpg",
    price: 300,
    category: "comida",
  },
  {
    name: "PS2",
    description: "La mejor consola de la vida",
    picture:
      "https://m.media-amazon.com/images/I/61pETE6v4vL.__AC_SY300_SX300_QL70_ML2_.jpg",
    price: 2500,
    category: "videojuegos",
  },
];

const createProduct = () => {
  let productObject = {};
  fields.forEach((field) => {
    productObject[field.name] = field.value;
  });

  products.push({ ...productObject, price: Number(productObject.price) });
  printAllProducts(products, "product-wrapper");
  printOptions(getCategories(products), "category-select");
};

let saveProductBtn = document.getElementById("save-product");

saveProductBtn.addEventListener("click", (event) => {
  event.preventDefault();
  createProduct();
  console.log(products);
});

const createProductCard = (productObject) => {
  let { name, description, picture, price, category } = productObject;

  let productCard = document.createElement("div");
  productCard.classList.add("card");

  let productImage = document.createElement("img");
  productImage.setAttribute("src", picture);

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  let cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = name;

  let cardText = document.createElement("h4");
  cardText.classList.add("card-text");
  cardText.innerText =
    description.split(" ").length > 10
      ? `${description.split(" ", 10).join(" ")}...`
      : description;

  let cardPrice = document.createElement("p");
  cardPrice.innerText = price;

  let cardCategory = document.createElement("p");
  cardCategory.innerText = category;

  cardBody.append(cardTitle, cardText, cardPrice, cardCategory);

  productCard.append(productImage, cardBody);
  return productCard;
};

const printAllProducts = (dataArray, wrapperId) => {
  let wrapper = document.getElementById(wrapperId);
  wrapper.innerHTML = "";
  dataArray.forEach((product) => wrapper.append(createProductCard(product)));
};

printAllProducts(products, "product-wrapper");

let filterInput = document.getElementById("category-filter");

filterInput.addEventListener("keyup", (event) => {
  let query = event.target.value;

  let result = products.filter((product) =>
    product.category.toLowerCase().includes(query.toLowerCase())
  );

  console.log(result);

  printAllProducts(result, "product-wrapper");
});

const getCategories = (dataArray) => {
  let result = dataArray.reduce((accum, current) => {
    return accum.includes(current.category)
      ? accum
      : [...accum, current.category];
  }, []);
  return result;
};

let categories = getCategories(products);

console.log(categories);

const createSelectOption = (optionLabel) => {
  let option = document.createElement("option");
  option.innerText = optionLabel;
  option.value = optionLabel;
  return option;
};

const printOptions = (optionsArray, selectId) => {
  let select = document.getElementById(selectId);
  select.innerHTML = "";
  optionsArray.forEach((option) => select.append(createSelectOption(option)));
};

let categorySelect = document.getElementById("category-select");

categorySelect.addEventListener("change", (event) => {
  let query = event.target.value;
  let result = products.filter(
    (product) => product.category.toLowerCase() === query.toLowerCase()
  );
  printAllProducts(result, "product-wrapper");
});

printOptions(categories, "category-select");
*/