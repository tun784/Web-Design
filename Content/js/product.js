document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productId = params.get("id");
  fetchProductDetail(productId);
});

function fetchProductDetail(productId) {
  fetch("data/products.json")
    .then((response) => response.json())
    .then((products) => {
      const product = products.find((p) => p.id == productId);
      if (product) {
        const productDetailDiv = document.getElementById("product-detail");
        productDetailDiv.innerHTML = `
          <div class="row">
            <div class="col-sm-6">
              <br><br>
              <div class="product-images">
                <div class="product-main-img">
                  <img src="Content/img/${product.img}" alt="${product.name}">
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="product-inner">
              <br><br>
                <h2 class="product-name">${product.name}</h2>
                <div class="product-inner-price">
                  <ins>${product.newprice} VNĐ</ins> <del>${product.price} VNĐ</del>
                </div>
                <button class="add_to_cart_button" id="add-to-cart" data-product-id="${product.id}">Thêm vào Giỏ</button>
                <div role="tabpanel">
                <br>
                  <ul class="product-tab" role="tablist">
                    <li role="presentation" class="active"><a aria-controls="home" role="tab" data-toggle="tab">Miêu tả chi tiết</a></li>
                  </ul>
                  <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade in active" id="home">
                      <h2>Thông số kỹ thuật</h2>
                      <table class="table table-striped">
                        <tr><th>Độ phân giải</th><td>${product.resolution}</td></tr>
                        <tr><th>Tần số quét</th><td>${product.refreshrate}</td></tr>
                        <tr><th>Camera sau</th><td>${product.backcamera}</td></tr>
                        <tr><th>Camera trước</th><td>${product.frontcamera}</td></tr>
                        <tr><th>Chipset</th><td>${product.chipset}</td></tr>
                        <tr><th>RAM</th><td>${product.ram}</td></tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        document.getElementById('add-to-cart').addEventListener('click', () => {
          addToCart(product);
        });
      } else {
        const productDetailDiv = document.getElementById("product-detail");
        productDetailDiv.innerHTML = "<p>Product not found.</p>";
      }
    })
    .catch((error) => console.error("Error loading product detail:", error));
}
function addToCart(product) {
  const orderItem = {
    id: product.id,
    name: product.name,
    price: product.newprice,
    img: product.img,
    quantity: 1
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const existingOrder = orders.find(order => order.id === product.id);
  if (existingOrder) {
    existingOrder.quantity += 1;
  } else {
    orders.push(orderItem);
  }

  localStorage.setItem("orders", JSON.stringify(orders));
  alert("Bạn đã thêm sản phẩm này thành công!");
}