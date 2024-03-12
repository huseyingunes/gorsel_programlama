class ogrenci{
    constructor(ad, soyad){
        this.ad = ad;
        this.soyad = soyad;
    }

    destructor(){
        console.log("gidiyorum...")
    }
    yazdir(){
        console.log(this.ad + " " + this.soyad)
    }
}

let yeni_ogrenci = new ogrenci("Ali", "VELİ")

yeni_ogrenci.yazdir()

yeni_ogrenci = null