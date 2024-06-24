function displayAndClearSessionData() {
    document.getElementById('NameSender').innerText = sessionStorage.getItem('NameSender');
    document.getElementById('EmailSender').innerText = sessionStorage.getItem('EmailSender');
    document.getElementById('PhoneSender').innerText = sessionStorage.getItem('PhoneSender');
    document.getElementById('NameReceiver').innerText = sessionStorage.getItem('NameReceiver');
    document.getElementById('PhoneReceiver').innerText = sessionStorage.getItem('PhoneReceiver');
    document.getElementById('AdrReceiver').innerText = sessionStorage.getItem('AdrReceiver');
    document.getElementById('TinhTPReceiver').innerText = sessionStorage.getItem('TinhTPReceiver');
    document.getElementById('QuanReceiver').innerText = sessionStorage.getItem('QuanReceiver');
    sessionStorage.removeItem('NameSender');
            sessionStorage.removeItem('EmailSender');
            sessionStorage.removeItem('PhoneSender');
            sessionStorage.removeItem('NameReceiver');
            sessionStorage.removeItem('PhoneReceiver');
            sessionStorage.removeItem('AdrReceiver');
            sessionStorage.removeItem('TinhTPReceiver');
            sessionStorage.removeItem('QuanReceiver');
}

window.onload = displayAndClearSessionData;