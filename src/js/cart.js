/* Products to work with */
const PRODUCTS = [
    { id: "UiPQXFZBKY", name: "Deepcool RF 120R", price: 6400, img: "1.jpg" },
    { id: "oIyurusmMa", name: "No Brand PC Cooler", price: 4600, img: "4.jpg" },
    { id: "YwuNwIetjx", name: "Apple PC Fan XSX", price: 9700, img: "5.jpg" },
    { id: "xxuNwIetxx", name: "OnePlus PC Fan", price: 9999, img: "3.jpg" },
];

/* Gettings necessary Divs */
const cartDiv = document.getElementById('cart');
const clearCartBtn = document.getElementById('priceRmv');
const priceDiv = document.getElementById('total-price');

class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || {};
    }
    add(id) { // adds new item to the cart
        if (this.items[id]) this.items[id] += 1;
        else this.items[id] = 1;
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.show();
    }
    clear() { // empty out the cart
        this.items = {};
        localStorage.removeItem('cart');
        this.show();
    }
    remove(id) { // remove single item from cart by id
        const item = PRODUCTS.find(v => v.id === id);
        if (!item) return;
        delete this.items[id];
        localStorage.setItem('cart', JSON.stringify(this.items));
        this.show();
    }
    totalPrice() { // returns total price of carted items
        let price = 0;
        for (const id in this.items) {
            const item = PRODUCTS.find(v => v.id === id);
            if (!item) return;
            price += item.price * this.items[id];
        }
        return price;
    }
    show() { // displays cart items
        cartDiv.innerHTML = "";
        for (let id in this.items) {
            const item = PRODUCTS.find(v => v.id === id);
            if (!item) continue;
            const itemDiv = document.createElement('div');
            const imgTxtHolder = document.createElement('div');
            const imgDiv = document.createElement('img');
            const txtDiv = document.createElement('div');
            const rmvBtn = document.createElement('button');

            itemDiv.className = "d-flex align-items-center justify-content-between";
            rmvBtn.className = "btn cart-item-remove";
            rmvBtn.innerHTML = "❌";
            rmvBtn.setAttribute('item-id', item.id);

            imgTxtHolder.className = 'cart-item d-flex justify-content-start align-items-center my-1 gap-3';
            imgDiv.src = "/src/imgs/products/" + item.img;
            imgDiv.className = "cart-img";
            txtDiv.innerHTML = `(${this.items[id]}) - ` + item.name;

            imgTxtHolder.appendChild(imgDiv);
            imgTxtHolder.appendChild(txtDiv);
            itemDiv.appendChild(imgTxtHolder);
            itemDiv.appendChild(rmvBtn);
            cartDiv.appendChild(itemDiv);
            addRemoveListener();
            priceDiv.innerHTML = `${this.totalPrice().toLocaleString()} BDT`;
        }

        // hide's total price and clear cart button if no items in cart
        if (Object.keys(this.items).length <= 0) priceRmv.className = "d-none mt-3";
        else priceRmv.className = "d-block mt-3";
    }
}

/* get new cart instance */
const cart = new Cart();
cart.show(); // load items from localStorage if any

/* Adds remove listener to cart items */
function addRemoveListener() {
    const rmvBtns = document.querySelectorAll(".cart-item-remove");
    for (let i = 0; i < rmvBtns.length; i++) {
        rmvBtns[i].addEventListener('click', function () {
            cart.remove(rmvBtns[i].getAttribute('item-id'));
        });
    }
}