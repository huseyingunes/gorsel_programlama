window.addEventListener("load", function load(event) {
    //window.removeEventListener("load", load, false); 
	//alert("deneme");
	//let rektor_secici = $('.pi-section').find('.classToSelect')
	setInterval(function () {
		let ogrenciTr = $("span:contains(202213709004)").parent().parent();
		console.log(ogrenciTr);
		ogrenciTr.children().eq(8).children().eq(0).val('75');
		console.log(ogrenciTr.children().eq(8).children().eq(0).val());
		console.log(ogrenciTr.children('td:has(input)').val());
		//$('#treeID li:contains("your text")')
		//console.log(ogrenciTr.text());
	}, 5000); 
})