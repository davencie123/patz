dao.js

let price = 79990; // Only one item
let qty = 1;

function changeQty(type) {
    if (type === "minus" && qty > 1) qty--;
    if (type === "plus") qty++;

    document.getElementById("qty0").innerText = qty;
    updateTotal();
}

function removeItem() {
    qty = 0;
    document.getElementById("item0").style.display = "none";
    updateTotal();
}

function updateTotal() {
    let subtotal = qty * price;
    document.getElementById("subtotal").innerText = "₱" + subtotal.toLocaleString();
    document.getElementById("total").innerText = "₱" + subtotal.toLocaleString();
}

