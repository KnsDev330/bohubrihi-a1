class Cart {
    constructor(items = []) {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    addItem(id) {
        this.loadItems();
        const items = this.items;
        if (items[id]) {
            items[id] += 1;
        } else {
            items[id] = 1;
        }
        this.items = items;
        const itemsStr = JSON.stringify(items);
        localStorage.setItem('cart', itemsStr);
    }
    loadItems() {
        const items = localStorage.getItem('cart');
        this.items = items ? JSON.parse(items) : {};
    }
}

const cart = new Cart({});
cart.loadItems();