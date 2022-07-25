const PRODUCTS = [
    { id: "UiPQXFZBKY", name: "Deepcool RF 120R", price: 6400, img: "1.jpg" },
    { id: "WMFXRAsNof", name: "Deepcool RF 120W", price: 5400, img: "2.jpg" },
    { id: "NfUSRmHZcu", name: "PCCooler RF 120X", price: 7300, img: "3.jpg" },
    { id: "oIyurusmMa", name: "No Brand PC Cooler", price: 4600, img: "4.jpg" },
    { id: "YwuNwIetjx", name: "Apple PC Fan XSX", price: 9700, img: "5.jpg" },
];

const productsDiv = document.getElementById('products');

PRODUCTS.forEach(product => {
    createProduct(product);
});


function createProduct({ id, name, price, img }) {
    const mainDiv = document.createElement('div');
    const imgElem = document.createElement('img');
    const btnElem = document.createElement('button');
    const h3 = document.createElement('h3');
    h3.textContent = name;
    btnElem.textContent = "Add to Cart";
    btnElem.classList.add("addToCartBtn");
    mainDiv.classList.add("product");
    btnElem.setAttribute("product-id", id);
    imgElem.setAttribute("src", `/src/imgs/products/${img}`);
    mainDiv.appendChild(imgElem);
    mainDiv.appendChild(h3);
    mainDiv.appendChild(btnElem);
    productsDiv.appendChild(mainDiv);
    addClickListeners();
}

function addToCart(e) {
    const id = e.target.getAttribute("product-id");
    cart.addItem(id);
}

function addClickListeners() {
    const products = document.getElementsByClassName('product');
    for (v of products) {
        v.addEventListener('click', addToCart)
    }
}