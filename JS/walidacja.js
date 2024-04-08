function getPoleIf(pole_id, obiektRegex) {
    var obiektPole = document.getElementById(pole_id);
    if (!obiektRegex.test(obiektPole.value))
        return undefined;
    else
        return obiektPole.value;
}

function getRadio(nazwa_radio) {
    var radios = document.getElementsByName(nazwa_radio);
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            return radios[i].value;
        }
    }
    return undefined;
}

function check() {
    obiektName = /^[a-zA-Z]{2,20}$/;
    obiektEmail = /^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    obiektPhone = /^[0-9]{9}$/;

    firstname = getPoleIf('firstname', obiektName);
    lastname = getPoleIf('lastname', obiektName);
    email = getPoleIf('email', obiektEmail);
    phone = getPoleIf('tel', obiektPhone);
    date = document.getElementById('date').value;
    from = document.getElementById('from').value;
    to = document.getElementById('to').value;
    _class = document.getElementById('class').value;
    payment = getRadio('payment');

    pola = [firstname, lastname, email, phone, date, from, to, _class, payment];
    temp = false;
    for(i = 0; i < pola.length; i++) {
        if(pola[i] == undefined) {
            document.getElementsByClassName('error')[i].style.visibility = 'visible';
            temp = true;
        }
        else {
            document.getElementsByClassName('error')[i].style.visibility = 'hidden';
        }
    }
    if(temp == true) {return false;}

    data = "Your information:\n";
    data += "Firstname: " + firstname + "\n";
    data += "Lastname: " + lastname + "\n";
    data += "Email: " + email + "\n";
    data += "Phone number: " + phone + "\n";
    data += "Date: " + date + "\n";
    data += "From: " + from + "\n";
    data += "To: " + to + "\n";
    data += "Travel class: " + _class + "\n";
    data += "Payment method: " + payment + "\n";

    if(window.confirm(data)) {
        sessionStorage.setItem('firstname', firstname);
        sessionStorage.setItem('lastname', lastname);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('phone', phone);
        sessionStorage.setItem('date', date);
        sessionStorage.setItem('from', from);
        sessionStorage.setItem('to', to);
        sessionStorage.setItem('class', _class);
        sessionStorage.setItem('payment', payment);
        return true;
    }
    else {
        return false;
    }
}

function clean_data() {
    sessionStorage.clear();
}