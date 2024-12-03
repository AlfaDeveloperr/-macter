const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
//ALFA JS
const UsersLogin = document.getElementById("fas-fa-users");

// Eklenen ürünlerin listesi
let cartItems = [];

// "Add to Cart" düğmelerini seçme
const addToCartButtons = document.querySelectorAll(".btn[id^='cart_Item']");
const cartItemsContainer = document.querySelector(".cart-items-container");
const PaymentButton = ' <a href="Ödeme.ENT.php" class="btn">CheckNow Now</a>';

//! buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

cartBtn.addEventListener("click", function () {
    cartItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)
        ) {
            cartItem.classList.remove("active");
        }
    });
});

menuBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }
    });
});
UsersLogin.addEventListener("click", function () {
    document.location.href = "Login.html";
});

// Her düğme için bir dinleyici ekleyin
addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        const itemId = button.id.split("_")[2]; // Düğme id'sinden öğe kimliğini alın
        const itemName = `cart item ${itemId}`; // Örnek bir ürün adı oluşturun
        const itemPrice = "$15.99/-"; // Örnek bir fiyat oluşturun

        // Ürünü ekleme
        cartItems.push({ id: itemId, name: itemName, price: itemPrice });

        // Eklenen ürünleri görüntüleme
        renderCartItems();
    });
});

// Eklenen ürünleri görüntülemek için bir fonksiyon
function renderCartItems() {
    // cartItemsContainer içeriğini temizleme
    cartItemsContainer.innerHTML = "";

    // Her eklenen ürün için HTML içeriği oluşturma
    cartItems.forEach(item => {
        const cartItemHTML = `
            <div class="cart-item" data-id="${item.id}">
                <i class="fas fa-times remove-item"></i>
                <img src="images/menu-${item.id}.png" alt="menu">
                <div class="content">
                    <h3>${item.name}</h3>
                    <div class="price">${item.price}</div>
                </div>
            </div>
        `;
        cartItemsContainer.innerHTML += cartItemHTML;
    });
    cartItemsContainer.innerHTML += PaymentButton;
    // Her kart öğesine kaldırma işlevini bağlama
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const itemId = button.parentElement.dataset.id;
            removeCartItem(itemId);
        });
    });
}

// Bir ürünü kaldırmak için bir fonksiyon
function removeCartItem(itemId) {
    // cartItems dizisinden ürünü kaldırma
    cartItems = cartItems.filter(item => item.id !== itemId);

    // Ekranı güncelleme
    renderCartItems();
}