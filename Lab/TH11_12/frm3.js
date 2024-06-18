function Validate() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const phone = document.getElementById('phone').value;
    const countryCode = document.getElementById('countryCode').value;

    const nameRegex = /^[a-zA-Z0-9\s]{10,}$/;
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneRegex = /^[0-9]{10}$/;
    const countryCodeRegex = /^[a-zA-Z]{2}$/;

    if (!name.match(nameRegex)) {
        alert('Tên bắt buộc nhập, tối thiểu 10 ký tự, không chứa ký tự đặc biệt.');
        return false;
    }

    if (!email.match(emailRegex)) {
        alert('Email không đúng định dạng.');
        return false;
    }

    if (password.length < 10) {
        alert('Mật khẩu bắt buộc nhập, tối thiểu 10 ký tự.');
        return false;
    }

    if (password !== confirmPassword) {
        alert('Xác nhận mật khẩu phải trùng với mật khẩu đã nhập.');
        return false;
    }

    if (!phone.match(phoneRegex)) {
        alert('Số điện thoại phải là 10 ký số.');
        return false;
    }

    if (!countryCode.match(countryCodeRegex)) {
        alert('Mã quốc gia phải là 2 ký tự.');
        return false;
    }

    alert('Đăng kí thành công!');
    return true;
}