

document.addEventListener('DOMContentLoaded', function() {
    updateAmount()
    //-----------------------------------------------------------Auto Slider-----------------------------------------------------------------------------
    let list = document.querySelector('.slider .list');
    let items = document.querySelectorAll('.slider .list .picture');
    let dots = document.querySelectorAll('.slider .dots li');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    let active = 0;
    let lengthItems = items.length - 1;

    next.onclick = function() {
        if (active + 1 > lengthItems) {
            active = 0;
        } else {
            active = active + 1;
        }  
        reloadSlider();
    };

    prev.onclick = function() {
        if (active - 1 < 0) {
            active = lengthItems;
        } else {
            active = active - 1;
        }
        reloadSlider();
    };

    let refreshSlider = setInterval(() => { next.click(); }, 3000);

    function reloadSlider() {
        let checkLeft = items[active].offsetLeft;
        list.style.left = -checkLeft + 'px';

        let lastActiveDot = document.querySelector('.slider .dots li.active');
        if (lastActiveDot) {
            lastActiveDot.classList.remove('active');
        }
        dots[active].classList.add('active');

        clearInterval(refreshSlider);
        refreshSlider = setInterval(() => { next.click(); }, 3000);
    }

    dots.forEach((li, key) => {
        li.addEventListener('click', function() {
            active = key;
            reloadSlider();
        });
    });

    //-----------------------------------------------------------Header Scroll Hide/Show-----------------------------------------------------------------------------
    let headerBottom = document.querySelector('.header-bottom');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Cuộn xuống, ẩn thanh menu
            headerBottom.classList.add('hided');
        } else {
            // Cuộn lên, hiển thị thanh menu
            headerBottom.classList.remove('hided');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Tránh giá trị âm cho lastScrollTop
    });


        
    //-----------------------------------------------------------Sidebar Open/Close-----------------------------------------------------------------------------
    const menuIconButton = document.querySelector(".menu-icon-btn");
    const sidebar = document.querySelector(".sidebar");
    menuIconButton.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});

    //-----------------------------------------------------------Show Gio Hang-----------------------------------------------------------------------------
    // Doi sang dinh dang tien VND
    function vnd(price) {
        return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    }

// Lay so luong hang
function getAmountCart() {
    let currentuser = JSON.parse(localStorage.getItem('currentuser'))
    let amount = 0;
    currentuser.cart.forEach(element => {
        amount += parseInt(element.soluong);
    });
    return amount;
}

// Them SP vao gio hang
function addCart(index) {
    let current_id = localStorage.getItem('current_product'); // Lấy id sản phẩm hiện tại từ localStorage
    let currentuser = localStorage.getItem('currentuser') ? JSON.parse(localStorage.getItem('currentuser')) : { cart: [] }; // Lấy thông tin người dùng hiện tại từ localStorage, nếu không có thì khởi tạo một giỏ hàng mới

    let soluong = document.querySelector('.quantity .input-qty').value; // Lấy số lượng sản phẩm từ giao diện người dùng

    // Tìm sản phẩm trong mảng products dựa vào current_id
    let sp = products.find(item => item.id == current_id);

    if (sp) {
        let name = sp.productName; 
        let price = sp.r_price; 
        let img = sp.image_1; 

        // Tạo đối tượng productcart chứa thông tin sản phẩm để thêm vào giỏ hàng
        let productcart = {
            id: index,
            pname: name,
            gia: price,
            image: img,
            soluong: parseInt(soluong),
            // note: note
        };

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng của người dùng chưa
        let vitri = currentuser.cart.findIndex(item => item.id == productcart.id);
        if (vitri == -1) {
            // Nếu chưa có, thêm sản phẩm vào giỏ hàng
            currentuser.cart.push(productcart);
        } else {
            // Nếu đã có, cập nhật số lượng sản phẩm
            currentuser.cart[vitri].soluong += parseInt(productcart.soluong);
        }

        // Lưu thông tin giỏ hàng của người dùng vào localStorage
        localStorage.setItem('currentuser', JSON.stringify(currentuser));

        // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện
        updateAmount();

        // Đóng modal (nếu có)
        closeModal();

        // Hiển thị thông báo thêm sản phẩm thành công
        createToast_success("Thêm thành công");
    } else {
        // Xử lý trường hợp không tìm thấy sản phẩm với id tương ứng
        console.error('Product not found');
    }
}



    //Update Amount Cart 
    function updateAmount() {
        if (localStorage.getItem('currentuser') != null) {
            let amount = getAmountCart();
            document.querySelector('.count-product-cart').innerText = amount;
        }
    }
    //-----------------------------------------------------------Open Cart----------------------------------------------------------------------------
    function openCart(){
        user = localStorage.getItem('currentuser');
        if (user){
            window.location.href="./shopping cart.html"
        }
        else{
            createToast_warning("Bạn chưa đăng nhập vào tài khoản")
        }
        
    }

//-----------------------------------------------------------toast----------------------------------------------------------------------------- 
let notifications = document.querySelector('.notifications');
function createToast_success(text){
    let type = 'success';
    let icon = 'fa-solid fa-circle-check';
    let title = 'Success';
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark close-btn"></i>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        ()=>newToast.remove(), 5000
    );

    // Gắn sự kiện click cho nút đóng
    let closeButton = newToast.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        newToast.remove();
    });
}

function createToast_error(text){
    let type = 'error';
    let icon = 'fa-solid fa-circle-exclamation';
    let title = 'Error';
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark close-btn"></i>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        ()=>newToast.remove(), 5000
    );

    // Gắn sự kiện click cho nút đóng
    let closeButton = newToast.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        newToast.remove();
    });
}

function createToast_warning(text){
    let type = 'warning';
    let icon = 'fa-solid fa-triangle-exclamation';
    let title = 'Warning';
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark close-btn"></i>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        ()=>newToast.remove(), 5000
    );

    // Gắn sự kiện click cho nút đóng
    let closeButton = newToast.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        newToast.remove();
    });
}

function createToast_info(text){
    let type = 'info';
    let icon = 'fa-solid fa-circle-info';
    let title = 'Info';
    let newToast = document.createElement('div');
    newToast.innerHTML = `
        <div class="toast ${type}">
            <i class="${icon}"></i>
            <div class="content">
                <div class="title">${title}</div>
                <span>${text}</span>
            </div>
            <i class="fa-solid fa-xmark close-btn"></i>
        </div>`;
    notifications.appendChild(newToast);
    newToast.timeOut = setTimeout(
        ()=>newToast.remove(), 5000
    );

    // Gắn sự kiện click cho nút đóng
    let closeButton = newToast.querySelector('.close-btn');
    closeButton.addEventListener('click', function() {
        newToast.remove();
    });
}


    
    



//-----------------------------------------------------------Signup && Login Form----------------------------------------------------------------------------- 
// Close popup 
const body = document.querySelector("body");
let modalContainer = document.querySelectorAll('.modal');
let modalBox = document.querySelectorAll('.mdl-cnt');
let formLogSign = document.querySelector('.forms');

// Click vùng ngoài sẽ tắt Popup
modalContainer.forEach(item => {
    item.addEventListener('click', closeModal);
});

modalBox.forEach(item => {
    item.addEventListener('click', function (event) {
        event.stopPropagation();
    })
});

function closeModal() {
    modalContainer.forEach(item => {
        item.classList.remove('open');
    });
    console.log(modalContainer)
    body.style.overflow = "auto";
}


// Chuyen doi qua lai SignUp & Login 
let signup = document.querySelector('.signup-link');
let login = document.querySelector('.login-link');
let container = document.querySelector('.signup-login .modal-container');
login.addEventListener('click', () => {
    container.classList.add('active');
})

signup.addEventListener('click', () => {
    container.classList.remove('active');
})

let signupbtn = document.getElementById('signup');
let loginbtn = document.getElementById('login');
let formsg = document.querySelector('.modal.signup-login')
signupbtn.addEventListener('click', () => {
    formsg.classList.add('open');
    container.classList.remove('active');
    body.style.overflow = "hidden";
})

loginbtn.addEventListener('click', () => {
    document.querySelector('.form-message-check-login').innerHTML = '';
    formsg.classList.add('open');
    container.classList.add('active');
    body.style.overflow = "hidden";
})


// Dang nhap & Dang ky

// Chức năng đăng ký
let signupButton = document.getElementById('signup-button');
let loginButton = document.getElementById('login-button');
signupButton.addEventListener('click', () => {
    event.preventDefault();
    let fullNameUser = document.getElementById('fullname').value;
    let phoneUser = document.getElementById('phone').value;
    let passwordUser = document.getElementById('password').value;
    let passwordConfirmation = document.getElementById('password_confirmation').value;
    let checkSignup = document.getElementById('checkbox-signup').checked;
    // Check validate
    if (fullNameUser.length == 0) {
        document.querySelector('.form-message-name').innerHTML = 'Vui lòng nhập họ vâ tên';
        document.getElementById('fullname').focus();
    } else if (fullNameUser.length < 3) {
        document.getElementById('fullname').value = '';
        document.querySelector('.form-message-name').innerHTML = 'Vui lòng nhập họ và tên lớn hơn 3 kí tự';
    } else {
        document.querySelector('.form-message-name').innerHTML = '';
    }
    if (phoneUser.length == 0) {
        document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại';
    } else if (phoneUser.length != 10) {
        document.querySelector('.form-message-phone').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
        document.getElementById('phone').value = '';
    } else {
        document.querySelector('.form-message-phone').innerHTML = '';
    }
    if (passwordUser.length == 0) {
        document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu';
    } else if (passwordUser.length < 6) {
        document.querySelector('.form-message-password').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
        document.getElementById('password').value = '';
    } else {
        document.querySelector('.form-message-password').innerHTML = '';
    }
    if (passwordConfirmation.length == 0) {
        document.querySelector('.form-message-password-confi').innerHTML = 'Vui lòng nhập lại mật khẩu';
    } else if (passwordConfirmation !== passwordUser) {
        document.querySelector('.form-message-password-confi').innerHTML = 'Mật khẩu không khớp';
        document.getElementById('password_confirmation').value = '';
    } else {
        document.querySelector('.form-message-password-confi').innerHTML = '';
    }
    if (checkSignup != true) {
        document.querySelector('.form-message-checkbox').innerHTML = 'Vui lòng check đăng ký';
    } else {
        document.querySelector('.form-message-checkbox').innerHTML = '';
    }

    if (fullNameUser && phoneUser && passwordUser && passwordConfirmation && checkSignup) {
        if (passwordConfirmation == passwordUser) {
            let user = {
                fullname: fullNameUser,
                phone: phoneUser,
                password: passwordUser,
                address: '',
                email: '',
                status: 1,
                join: new Date(),
                cart: [],
                userType: 0
            }
            let accounts = localStorage.getItem('accounts') ? JSON.parse(localStorage.getItem('accounts')) : [];
            let checkloop = accounts.some(account => {
                return account.phone == user.phone;
            })
            if (!checkloop) {
                accounts.push(user);
                localStorage.setItem('accounts', JSON.stringify(accounts));
                localStorage.setItem('currentuser', JSON.stringify(user));
                createToast_success('Tạo thành công tài khoản !');
                closeModal();
                //kiemtradangnhap();
                //updateAmount();
            } else {
                createToast_error('Tài khoản đã tồn tại !');
            }
        } else {
            createToast_error('Sai mật khẩu xác nhận, vui lòng xem lại !');
        }
    }
}
)

// Dang nhap
loginButton.addEventListener('click', () => {
    event.preventDefault();
    let phonelog = document.getElementById('phone-login').value;
    let passlog = document.getElementById('password-login').value;
    let accounts = JSON.parse(localStorage.getItem('accounts'));

    if (phonelog.length == 0) {
        document.querySelector('.form-message.phonelog').innerHTML = 'Vui lòng nhập vào số điện thoại';
    } else if (phonelog.length != 10) {
        document.querySelector('.form-message.phonelog').innerHTML = 'Vui lòng nhập vào số điện thoại 10 số';
        document.getElementById('phone-login').value = '';
    } else {
        document.querySelector('.form-message.phonelog').innerHTML = '';
    }

    if (passlog.length == 0) {
        document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu';
    } else if (passlog.length < 6) {
        document.querySelector('.form-message-check-login').innerHTML = 'Vui lòng nhập mật khẩu lớn hơn 6 kí tự';
        document.getElementById('passwordlogin').value = '';
    } else {
        document.querySelector('.form-message-check-login').innerHTML = '';
    }

    if (phonelog && passlog) {
        let vitri = accounts.findIndex(item => item.phone == phonelog);
        if (vitri == -1) {
            createToast_error("Tài khoản của bạn không tồn tại");
        } else if (accounts[vitri].password == passlog) {
            if(accounts[vitri].status == 0) {
                createToast_warning('Tài khoản của bạn đã bị khóa');
            } else {
                localStorage.setItem('currentuser', JSON.stringify(accounts[vitri]));
                createToast_success('Đăng nhập thành công');
                closeModal();
                kiemtradangnhap();
                checkAdmin();
                updateAmount();
            }
        } else {
            createToast_warning('Sai mật khẩu');
        }
    }
})

// Kiểm tra xem có tài khoản đăng nhập không ?
function kiemtradangnhap() {
    let currentUser = localStorage.getItem('currentuser');
    if (currentUser != null) {
        let user = JSON.parse(currentUser);
        document.querySelector('.auth-container').innerHTML = `<span class="text-dndk">Tài khoản</span>
            <span class="text-tk">${user.fullname} <i class="fa-sharp fa-solid fa-caret-down"></span>`
        document.querySelector('.header-middle-right-menu').innerHTML = `<li><a href="javascript:;" onclick="myAccount()"><i class="fa-light fa-circle-user"></i> Tài khoản của tôi</a></li>
            <li><a href="javascript:;" onclick="orderHistory()"><i class="fa-regular fa-bags-shopping"></i> Đơn hàng đã mua</a></li>
            <li class="border"><a id="logout" href="javascript:;"><i class="fa-light fa-right-from-bracket"></i> Thoát tài khoản</a></li>`
        document.querySelector('#logout').addEventListener('click',logOut)
        updateAmount()
    }
}

function myAccount(){
    window.location.href="./user_profile.html";
}

function logOut() {
    let accounts = JSON.parse(localStorage.getItem('accounts'));
    let currentUser = JSON.parse(localStorage.getItem('currentuser'));

    if (currentUser) {
        let userIndex = accounts.findIndex(item => item.phone === currentUser.phone);
        if (userIndex !== -1) {
            accounts[userIndex].cart = currentUser.cart; // Gán giá trị mới từ currentUser.cart
            localStorage.setItem('accounts', JSON.stringify(accounts));
        }
    }

    localStorage.removeItem('currentuser');
    window.location = "./index.html";
}

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}



window.onload = kiemtradangnhap();




//-----------------------------------------------------------Detail_product-----------------------------------------------------------------------------
document.querySelectorAll(".card").forEach(element => {
    element.addEventListener("click", (event) => {
         const cardId = event.currentTarget.querySelector('.product-id').innerText;
         localStorage.setItem('current_product', cardId);
         window.location.href = './product_detail.html';
    });
});
















  
  
  

