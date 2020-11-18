var ulang = true;
var angka = Math.floor(Math.random()*100)+1;

while (ulang) {
    for (kesempatan = 2; kesempatan >= 0; kesempatan--) {
        player = prompt('Menebak angka 1-100\nAnda hanya memiliki 3 kesempatan saja');

        if (player == angka) {
            alert('Selamat, jawaban Anda benar!\nAngka tebakan adalah: ' + angka);
        } else if (player < angka) {
            if (kesempatan == 0) {
                alert('Kesempatanmu habis!\nAngka tebakan adalah: ' + angka);
            } else {
                alert('Angka Anda terlalu rendah\nSisa kesempatan Anda adalah: ' + kesempatan);
            }
        } else if (player > angka){
            if (kesempatan == 0) {
                alert('Kesempatanmu habis!\nAngka tebakan adalah: ' + angka);
            } else {
                alert('Angka Anda terlalu tinggi!\nSisa kesempatan Anda adalah: ' + kesempatan);
            }
        } else if (kesempatan == 0){
            alert('Anda gagal!');
        }
        
    } 
    ulang = confirm('Main lagi?');
    if (ulang == true){
        kesempatan = 2;
    }
}

alert('Terima kasih sudah bermain');