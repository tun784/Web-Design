function submitFeedback() {
    const name = document.getElementById('name').value;
    const live = document.getElementById('live').value;
    const fieldService = document.getElementById('checkb1').checked;
    const fieldProduct = document.getElementById('checkb2').checked;
    const fieldOther = document.getElementById('checkb3').checked;
    const language = document.querySelector('input[name="language"]:checked');
    const text = document.getElementById('text').value;

    if (!name) {
        alert('Họ tên là bắt buộc.');
        document.getElementById('name').focus();
        return;
    }

    if (!fieldService && !fieldProduct && !fieldOther) {
        alert('Vui lòng chọn ít nhất một lĩnh vực.');
        return;
    }

    if (!language) {
        alert('Vui lòng chọn ngôn ngữ.');
        return;
    }

    if (!text) {
        alert('Nội dung góp ý là bắt buộc.');
        document.getElementById('text').focus();
        return;
    }

    document.getElementById('NameReceiver').innerText = name;
    document.getElementById('LiveReceiver').innerText = live;

    let fields = [];
    if (fieldService) fields.push('Dịch vụ');
    if (fieldProduct) fields.push('Sản phẩm');
    if (fieldOther) fields.push('Khác');
    document.getElementById('FieldReceiver').innerText = fields.join(', ');

    document.getElementById('LanguageReceiver').innerText = language.value;
    document.getElementById('TextReceiver').innerText = text;

    alert('Gửi góp ý thành công!');
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('live').value = '';
    document.getElementById('checkb1').checked = false;
    document.getElementById('checkb2').checked = false;
    document.getElementById('checkb3').checked = false;
    document.querySelectorAll('input[name="language"]').forEach((el) => el.checked = false);
    document.getElementById('text').value = '';

    document.getElementById('name').focus();
}