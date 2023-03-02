const nesne = {
    adi: "Deneme",
    durum: false,
    sehirler: ["Balıkesir", "İstanbul"],
    yas: 25,
    deger: function(a, b)
    {
        return a+b+this.yas
    }
}

console.log(nesne.adi)
console.log(nesne.durum)
console.log(nesne.deger(3, 5))

