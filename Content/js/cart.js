document.addEventListener("DOMContentLoaded", function () {
    loadCart();

    // Gắn sự kiện click cho nút "Cập nhật giỏ hàng" bên trong hàm DOMContentLoaded
    const updateCartButton = document.querySelector('.button-update');
    if (updateCartButton) {
        updateCartButton.addEventListener('click', function () {
            updateCart();
            console.log("Đã cập nhật giỏ hàng thành công!");
            alert("Đã cập nhật giỏ hàng thành công!");
        });
    }
});

function loadCart() {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const cartItemsDiv = document.getElementById('cart-items');
    if (orders.length > 0) {
        let cartHTML = '<table class="table">';
        cartHTML += '<thead><tr><th>Hình ảnh</th><th>Tên sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng cộng</th><th>Hành động</th></tr></thead><tbody>';
        orders.forEach(order => {
            cartHTML += renderOrderRow(order);
        });
        cartHTML += '</tbody></table>';
        cartItemsDiv.innerHTML = cartHTML;

        attachQuantityUpdateListeners();
        attachRemoveItemListeners();
        attachViewItemListeners(); // Gắn sự kiện click cho nút "Xem sản phẩm"
    } else {
        cartItemsDiv.innerHTML = '<p>Giỏ hàng của bạn đang trống.</p>';
    }
}

function updateCart() {
    // Lấy danh sách đơn hàng từ localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    // Đi qua từng sản phẩm trong giỏ hàng trên trang cart.html
    const rows = document.querySelectorAll('.table tbody th');
    rows.forEach(row => {
        console.log(parseInt(row.querySelector('.item-quantity').value));
        const updateButton = row.querySelector('.update-quantity');
        if (updateButton) {
            const productId = updateButton.getAttribute('data-product-id');
            const newQuantity = parseInt(row.querySelector('.item-quantity').value);
            console.log(newQuantity);
            updateQuantity(productId, newQuantity);
        }
    });

    // Lưu danh sách đơn hàng đã cập nhật vào localStorage
    localStorage.setItem("orders", JSON.stringify(orders));

    // Load lại giỏ hàng sau khi cập nhật
    loadCart();
}

function renderOrderRow(order) {
    return `
        <tr>
            <td><img src="Content/img/${order.img}" alt="${order.name}" class="img-fluid" style="width: 100px;"></td>
            <td><strong>${order.name}</strong></td>
            <td><strong>${order.price} VNĐ</strong></td>
            <td>
                <input type="number" class="item-quantity" value="${order.quantity}" id="quantity-${order.id}" name="quantity" min="1" style="width: 50px;" />
            </td>
            <td class="total-price"><strong>${order.price * order.quantity} VNĐ</strong></td>
            <td>
                <button class="view-item" data-product-id="${order.id}">Xem sản phẩm</button>
                <br><br>
                <button class="remove-item" data-product-id="${order.id}">Xóa</button>
            </td>
        </tr>
    `;
}

function attachQuantityUpdateListeners() {
    document.querySelectorAll('.update-quantity').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.getAttribute('data-product-id');
            const newQuantity = parseInt(document.getElementById(`quantity-${productId}`).value);
            updateQuantity(productId, newQuantity);
        });
    });
}

function attachRemoveItemListeners() {
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.getAttribute('data-product-id');
            removeItem(productId);
        });
    });
}

function attachViewItemListeners() {
    document.querySelectorAll('.view-item').forEach(button => {
        button.addEventListener('click', event => {
            const productId = event.target.getAttribute('data-product-id');
            viewItem(productId);
        });
    });
}

// function updateQuantity(productId, newQuantity) {
//     let orders = JSON.parse(localStorage.getItem("orders")) || [];
//     const order = orders.find(order => order.id === productId);
//     if (order) {
//         order.quantity = newQuantity;
//         if (newQuantity <= 0) {
//             orders = orders.filter(order => order.id !== productId);
//         }
//         localStorage.setItem("orders", JSON.stringify(orders));

//         // Cập nhật lại tổng cộng ngay tại đây
//         const row = document.querySelector(`#quantity-${productId}`).closest('tr');
//         if (row) {
//             row.querySelector('.total-price').textContent = `${order.price * order.quantity} VNĐ`;
//         }
//     }
// }
function updateQuantity(productId, newQuantity) {
    // Lấy danh sách đơn hàng từ localStorage
    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    // Tìm sản phẩm trong danh sách đơn hàng và cập nhật số lượng
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].id === productId) {
            orders[i].quantity = newQuantity;
            break;
        }
    }

    // Lưu danh sách đơn hàng đã cập nhật vào localStorage
    localStorage.setItem("orders", JSON.stringify(orders));
}
function removeItem(productId) {
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders = orders.filter(order => order.id !== productId);
    localStorage.setItem("orders", JSON.stringify(orders));
    loadCart();
    console.log("Đã xoá khỏi giỏ hàng thành công!");
    alert("Đã xoá khỏi giỏ hàng thành công!");
    window.location.href = `cart.html`;
}

function viewItem(productId) {
    window.location.href = `product.html?id=${productId}`;
}
