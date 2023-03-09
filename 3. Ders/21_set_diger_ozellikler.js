const degerler = new Set([1, 3, 5, 7])
console.log(degerler)

if (degerler.has(5))
    console.log("Kümede 5 varmış")

if (degerler.has(11))
    console.log("Kümede 11 varmış")
else
    console.log("Kümede 11 yokmuş")
    
// Diğer özellikler için : https://www.w3schools.com/js/js_sets.asp