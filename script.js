// atur waktunya di variable count
var countdown = new Date('APRIL 29,2021 17:45:00').getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countdown - now;

    var hari = Math.floor(distance/(1000 * 60 * 60 * 24));
    var jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((distance %(1000 * 60)) / 1000);

    document.getElementById('launch').innerHTML = hari + 'd ' + jam + 'h ' + menit + 'm' + detik + 's';

    if(distance < 0){
        clearInterval(x);
        document.getElementById('launch').innerHTML = 'Selamat Berbuka Puasa';
    }
}, 1000);