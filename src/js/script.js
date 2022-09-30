/* function for adding products in the cart */
function addToCart(e) {
    const id = e.target.getAttribute("product-id");
    cart.add(id);
}

(function addClickListeners() {
    /* add to cart listeners */
    const products = document.getElementsByClassName('addToCartBtn');
    for (pro of products) pro.addEventListener('click', addToCart);

    /* clear cart button listener */
    document.getElementById('clear-cart').addEventListener('click', e => cart.clear());
})();