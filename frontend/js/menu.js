document.addEventListener("DOMContentLoaded", async () => {
    const stripe = Stripe(
        "pk_test_51RqkZQIbC0QJ3rbtZZhTqbq4iCUQjjW9pg6W9wHe2JdVGs7n4loN1BUmsnOuX65URHx6XkJ7E1Uo5met7FDOl0Iq00Fx1IRu0m"
    );
    const menuContainer = document.getElementById("menu-container");
    const orderItemsEl = document.getElementById("order-items");
    const orderTotalEl = document.getElementById("order-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    let order = [];

    //Load menu items
    try {
        const response = await fetch("/api/menu");
        const menuItems = await response.json();

        menuItems.forEach((item) => {
            const itemEl = document.createElement("div");
            itemEl.className = "menu-item";
            itemEl.innerHTML = `
<h3>${item.name}</h3>
<p>$${item.price.toFixed(2)}</p>
<div = class="quantity-controls>
<button class="decrement" data-id=${item.id}>-</button>
          <span class="quantity" data-id="${item.id}">0</span>
                    <button class="increment" data-id="${item.id}">+</button>
</div>
`;
        });
    } catch (err) {
        console.err("Failed to lead menu:", err);
    }
});
