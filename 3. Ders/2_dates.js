yeni_tarih = new Date("March 25, 2023 10:22:22")
console.log(yeni_tarih)

// tarihin sadece yılını yazdırma
console.log(yeni_tarih.getFullYear());
console.log(yeni_tarih.getHours());

// tarihin sadece yılını değiştirme
yeni_tarih.setFullYear(2099)
console.log(yeni_tarih)

let guncel_tarih = new Date(Date.now())

console.log("Yıl : " + guncel_tarih.getFullYear());
console.log("Ay : " + (guncel_tarih.getMonth() + 1));
console.log("Gün : " + guncel_tarih.getDate());
console.log("Saat : " + guncel_tarih.getHours());
console.log("Dakika : " + guncel_tarih.getMinutes());
console.log("Saniye : " + guncel_tarih.getSeconds());
console.log(guncel_tarih)