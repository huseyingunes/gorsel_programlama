switch (new Date().getDay()) {
    case 4:
    case 5:
      metin = "Hafta sonu yaklaşıyor";
      break;
    case 0:
    case 6:
        metin = "Sonunda hafta sonu";
      break;
    default:
        metin = "Hafta sonuna daha çok var";
  }

console.log(metin);