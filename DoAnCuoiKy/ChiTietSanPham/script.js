$("#txtTimkiem").autocomplete({
  source: function (request, response) {
    $.ajax({
      url: "/TimKiem/GetSearchValue",
      dataType: "json",
      data: { search: $("#txtTimkiem").val() },
      success: function (data) {
        response(
          $.map(data, function (item) {
            return { label: item.name, value: item.name };
          })
        );
      },
      error: function (xhr, status, error) {
        alert("Error");
      },
    });
  },
});

$(".rating").on("change", function () {
  // $(this).next('.label').text($(this).val());
  // alert($(this).val());
  $("#point_review").val($(this).val());
});
$(document).ready(function () {
  $("#btn-review").click(function () {
    var danhnhap_id = $(this).data("userid");
    var product_id = 30;
    var content = $("#text_review").val();
    var rating = $("#point_review").val();

    var json_review = [];
    json_review.push({
      Content: content,
      Rating: rating,
      User_id: danhnhap_id,
      Product_id: product_id,
    });

    console.log(json_review);
    $.ajax({
      url: "/Product/addReview",
      data: { json_review: JSON.stringify(json_review) },
      type: "POST",
      dataType: "json",
      success: function (res) {
        if (res.status == true) {
          window.location.href =
            "/san-pham/" + "samsung-note9-512gb" + "/" + 30;
          PNotify.success({
            title: "THÔNG BÁO!!",
            text: "Đánh giá sản phẩm thành công.",
          });
        } else {
          PNotify.error({
            title: "THÔNG BÁO!!",
            text: "Đã có lỗi xảy ra, bạn vui lòng đánh giá sản phẩm vào thời gian tới.",
          });
        }
      },
    });
  });
});

window.fbAsyncInit = function () {
  FB.init({
    appId: "362029627851904",
    cookie: true,
    xfbml: true,
    version: "v3.3",
  });
};

function checkLoginState() {
  FB.getLoginStatus(function (response) {
    statusChangeCallback(response);
  });
}

function logOutFB() {
  FB.logout();
}
//Xử lý trạng thái đăng nhập
function statusChangeCallback(response) {
  //nếu người dùng đã đăng nhập fb và đã đăng nhập vào ứng dụng
  if (response.status === "connected") {
    FB.api("/me", function (response) {
      var str = JSON.stringify(response);
      var strJson = JSON.parse(str);
      var username = strJson.name;
      var ID = strJson.id;
      $.ajax({
        url: "TaiKhoan/LoginFacebook",
        data: { user: username, ID: ID },
        type: "POST",
        dataType: "json",
        success: function (res) {
          window.location.href = "/";
        },
      });

      console.log(JSON.stringify(response));
    });
  }
  //Người dùng đã đăng nhập fb và chưa đăng nhập vào ứng dụng
  else if (response.status === "not_authorized") {
    FB.api("/me", function (response) {
      var str = JSON.stringify(response);
      var strJson = JSON.parse(str);
      var username = strJson.name;
      var ID = strJson.ID;
      $.ajax({
        url: "TaiKhoan/LoginFacebook",
        data: { user: username, ID: ID },
        type: "POST",
        dataType: "json",
        success: function (res) {
          //window.location.href = "/";
        },
      });

      console.log(JSON.stringify(response));
    });
  }
  //Người dùng chưa đăng nhập fb
  else {
    window.location.href = "/vi-vn.facebook.com/login/";
  }
}

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
