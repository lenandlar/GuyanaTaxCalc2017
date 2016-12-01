
function doMTax(){

	var gross = parseInt(document.tCalc.val1.value); // collect and convert income data to number
	
	var tax;
	var tr1 = 0.28;
	var tr2 = 0.40;
	var tho1 = 60000;
	var tho1a = 33600;
	var tho2 = gross * 0.67;
	
	if (gross <= 60000){
	  tax = 0;
	}
	else
	if (gross <= 180000){
	 tax = (gross - tho1) * 0.28;
	}

	else {
	 tax = ((tho2 - 120000)*0.4) + tho1a;
	}

	document.tCalc.tax1.value = tax; // display data to form element

}

function doYTax(){

	var gross = parseInt(document.tCalc1.val1.value); // collect and convert income data to number
	
	var tax;
	var tr1 = 0.28;
	var tr2 = 0.40;
	var tho1 = 720000;
	var tho1a = 33600;
	var tho2 = gross * 0.6667;
	
	if (gross <= 720000){
	  tax = 0;
	}
	else
	if (gross <= 2160000){
	 tax = (gross - tho1) * 0.28;
	}

	else {
	 tax = ((tho2 - 1440000)*0.4) + (tho1a * 12);
	}

	document.tCalc1.tax1.value = tax; // display data to form element

}

