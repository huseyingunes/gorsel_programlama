window.addEventListener("load", function load(event) {
	console.log("burasi calisti 3");
    //window.removeEventListener("load", load, false); 
	//alert("deneme");
	//let rektor_secici = $('.pi-section').find('.classToSelect')
	let rektorH2 = $( "h2:contains('Prof. Dr. Yücel OĞURLU')");
	//let rektorH2 = $( "p:contains('1970')");
	console.log(rektorH2);
	rektorH2.html("<a href='https://www.civa.gen.tr'>Doç. Dr. Hüseyin GÜNEŞ</a>");
	
	$(".pi-bullet-icon").parent().html('<i class="icon-mail"></i>hgunes@balikesir.edu.tr');
	
	$('img[src*="/img/yucel-ogurlu1.JPG"]').attr('src','http://ceng.balikesir.edu.tr/tanitim/img/team/bm9.jpg');
	
	console.log(rektorH2.text());
})