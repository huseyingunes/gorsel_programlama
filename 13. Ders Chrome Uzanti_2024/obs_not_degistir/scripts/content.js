var aTags = document.getElementsByTagName("span")
const searchText="202213709004"
var found;

for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].innerHTML == searchText) {
    found = aTags[i];
    console.log(found.innerHTML)
    break;
  }
}
