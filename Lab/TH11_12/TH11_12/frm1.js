function XuatThongTin()
        {
            document.getElementById("NameSender").innerHTML = document.forms["F1"] ["txt_NameSender"].value;
            document.getElementById("EmailSender").innerHTML = document.forms["F1"] ["txt_EmailSender"].value;
            document.getElementById("PhoneSender").innerHTML = document.forms["F1"] ["txt_PhoneSender"].value;
            document.getElementById("NameReceiver").innerHTML = document.forms["F2"] ["txt_NameReceiver"].value;
            document.getElementById("PhoneReceiver").innerHTML = document.forms["F2"] ["txt_PhoneReceiver"].value;
            document.getElementById("AdrReceiver").innerHTML = document.forms["F2"] ["txt_AdrReceiver"].value;
            document.getElementById("TinhTPReceiver").innerHTML = document.forms["F2"] ["Tinh"].value;
            document.getElementById("QuanReceiver").innerHTML = document.forms["F2"] ["Quan"].value;
        }
        function XuatThongTinTrangKhac() {
            sessionStorage.setItem('NameSender', document.getElementById('txt_NameSender').value);
            sessionStorage.setItem('EmailSender', document.getElementById('txt_EmailSender').value);
            sessionStorage.setItem('PhoneSender', document.getElementById('txt_PhoneSender').value);
            sessionStorage.setItem('NameReceiver', document.getElementById('txt_NameReceiver').value);
            sessionStorage.setItem('PhoneReceiver', document.getElementById('txt_PhoneReceiver').value);
            sessionStorage.setItem('AdrReceiver', document.getElementById('txt_AdrReceiver').value);
            sessionStorage.setItem('TinhTPReceiver', document.getElementById('Tinh').value);
            sessionStorage.setItem('QuanReceiver', document.getElementById('Quan').value);
            window.location.href = 'Bai2.html';
        }