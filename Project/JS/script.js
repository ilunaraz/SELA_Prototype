function checkDate() {
    var dtToday = new Date();
    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();
    if(month < 10) month = '0' + month.toString();
    if(day < 10) day = '0' + day.toString();

    today = year+'-'+month+'-'+day;
    document.getElementById('tanggal').setAttribute("min", today);
}

function checkTime() {
    var hour = document.getElementById('jam').value.toString().substring(0, 2);
    var minute = document.getElementById('jam').value.toString().substring(3, 5);

    //min 6 pagi
    if(hour < 6) {
        alert('Lapangan buka pukul 6 pagi')
        document.getElementById('jam').value = '06:00'
    }
    
    //max jam 10 malam
    if(hour > 22) {
        alert('Lapangan tutup pukul 10 malam')
        document.getElementById('jam').value = '22:00'
    }
}

var totalPrice = 0;

function countPrice() {
    var fieldType = document.getElementById('tipe-lapangan')
    var fieldTypeSelected = fieldType.options[fieldType.selectedIndex].text.toString();

    var inputtedTime = document.getElementById('durasi')
    var time = inputtedTime.options[inputtedTime.selectedIndex].text;

    var fieldPrice = 0;

    if(fieldTypeSelected == 'Basket') fieldPrice = 300000
    else if(fieldTypeSelected == 'Futsal - Indoor') fieldPrice = 100000
    else if(fieldTypeSelected == 'Futsal - Outdoor') fieldPrice = 50000

    totalPrice = fieldPrice * parseInt(time.substring(0, 1))

    document.getElementById('harga').value = "Rp " + totalPrice.toString();    
}

function off() {
    document.getElementById("Overlay").style.display = "none"
    document.getElementById('InLine-Harga').innerHTML = "Rp " + totalPrice.toString()
}

function on() {
    document.getElementById('Overlay').style.display = "block"
    document.getElementById('InLine-Harga').innerHTML = "Rp " + totalPrice.toString()
}

function changeBG_BCA() {
    var bca = document.getElementById('bca')
    var dana = document.getElementById('dana')
    var ovo = document.getElementById('ovo')

    bca.addEventListener("click", function(){
        bca.className = "format-payment-selected margin-top"
        dana.className = "format-payment margin-top"
        ovo.className = "format-payment margin-top"
    })
}

function changeBG_Dana() {
    var bca = document.getElementById('bca')
    var dana = document.getElementById('dana')
    var ovo = document.getElementById('ovo')

    dana.addEventListener("click", function(){
        dana.className = "format-payment-selected margin-top"
        bca.className = "format-payment margin-top"
        ovo.className = "format-payment margin-top"
    })
}

function changeBG_Ovo() {
    var bca = document.getElementById('bca')
    var dana = document.getElementById('dana')
    var ovo = document.getElementById('ovo')

    ovo.addEventListener("click", function(){
        ovo.className = "format-payment-selected margin-top"
        dana.className = "format-payment margin-top"
        bca.className = "format-payment margin-top"
    })
}

function showPayOn() {
    off()


    //nyalakan frame bayar
    document.getElementById('Overlay-Payment').style.display = "block"
    

    var bca = document.getElementById('bca')
    var dana = document.getElementById('dana')
    var ovo = document.getElementById('ovo')    

    var bca_color = getComputedStyle(bca).backgroundColor
    var ovo_color = getComputedStyle(ovo).backgroundColor
    var dana_color = getComputedStyle(dana).backgroundColor


    //jika keselect
    if(bca_color == 'rgb(215, 193, 193)') {
        
    }
    else if(ovo_color == 'rgb(215, 193, 193)') {

    }
    else if(dana_color == 'rgb(215, 193, 193)') {

    }
}

function showPayOff() {
    document.getElementById("Overlay-Payment").style.display = "none"
}