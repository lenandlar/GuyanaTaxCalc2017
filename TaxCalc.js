function doMTax(){

	var gross = parseInt(document.tCalc.val1.value); // collect and convert income data to number
	
	var emptax = 0;
	var selfemptax = 0;
	var tr1 = 0.28;
	var tr2 = 0.40;
	var tho1 = 60000;
	var tho1a = 33600;
	var tho2 = gross * 0.6667;
	var empNIS = 0;
	var selfempNIS = 0;
	
	if ((isNaN(gross)) || (gross < 0)){
		alert("incorrect value entered for Gross Income");
		document.tCalc.f1.value = "";
		document.getElementById("f1").focus();
	}

	else
	if (gross <= 60000){
	  empNIS = gross * 0.056;
	  selfempNIS = gross * 0.125;
	  emptax = 0;
	  selfemptax = 0;
	}

	else
	if (gross <= 180000){
         empNIS = gross * 0.056;
	 selfempNIS = gross * 0.125;
	    if ((tho1 + empNIS) >= gross)
              {
          	 emptax = 0;
              }
	     else
		{
		  emptax = (gross - tho1 - empNIS) * 0.28;
		}
	 
             if((tho1 + selfempNIS) >= gross)
		{
		   selfemptax = 0;
           	 }
	      else 
		{
		   selfemptax = (gross - tho1 - selfempNIS) * 0.28;
		}
	}

	else
	if (gross <= 220000){
	 empNIS = gross * 0.056;
	 selfempNIS = gross * 0.125;
	 emptax = ((tho2 - 120000 - empNIS)*0.4) + tho1a;
	 selfemptax = ((tho2 - 120000 - selfempNIS)*0.4) + tho1a;
	}

	else {
	 empNIS = 220000 * 0.056;
	 selfempNIS = 220000 * 0.125;
	 emptax = ((tho2 - 120000 - empNIS)*0.4) + tho1a;
	 selfemptax = ((tho2 - 120000 - selfempNIS)*0.4) + tho1a;
	}

document.getElementById("empNIS").innerHTML = "Emp NIS/Month: " + "<b>" + empNIS + "</b>";
document.getElementById("selfEmpNIS").innerHTML = "Self Emp NIS/Month: " + "<b>" + selfempNIS + "</b>";
document.getElementById("tax1").innerHTML = "Emp Tax Payable/Month: " + "<b>" + emptax + "</b>";
document.getElementById("tax1_1").innerHTML = "Self Emp Tax Payable/Month: " + "<b>" + selfemptax + "</b>";	
}

function doYTax(){

	var gross = parseInt(document.tCalc1.val1.value); // collect and convert income data to number
	
	var emptax = 0;
	var selfemptax =0;
	var tr1 = 0.28;
	var tr2 = 0.40;
	var tho1 = 720000;
	var tho1a = 33600;
	var tho2 = gross * 0.6667;
	var empNIS = 0;
	var selfempNIS = 0;

	if ((isNaN(gross)) || (gross < 0)){
		alert("incorrect value entered for Gross Income");
		document.tCalc1.f1_1.value = "";
		document.getElementById("f1_1").focus();
	}

	else
	if (gross <= 720000){
          empNIS = gross * 0.056;
	  selfempNIS = gross * 0.125;
	  emptax = 0;
          selfemptax = 0;
	}

	else
	if (gross <= 2160000){
  	  empNIS = gross * 0.056;
	  selfempNIS = gross * 0.125;
	    if ((tho1 + empNIS) >= gross)
              {
          	 emptax = 0;
              }
	     else
		{
		  emptax = (gross - tho1 - empNIS) * 0.28;
		}
	 
             if((tho1 + selfempNIS) >= gross)
		{
		   selfemptax = 0;
           	 }
	      else 
		{
		   selfemptax = (gross - tho1 - selfempNIS) * 0.28;
		}
	}

	else
	if (gross <= 2640000){
	 empNIS = gross * 0.056;
	 selfempNIS = gross * 0.125;
	 emptax = ((tho2 - (120000 * 12) - empNIS)*0.4) + (tho1a * 12);
	 selfemptax = ((tho2 - (120000 * 12) - selfempNIS)*0.4) + (tho1a * 12);
	}

	else {
         empNIS = 2640000 * 0.056;
	 selfempNIS = 2640000 * 0.125;
         emptax = ((tho2 - (120000 * 12) - empNIS)*0.4) + (tho1a * 12);
	 selfemptax = ((tho2 - (120000 * 12) - selfempNIS)*0.4) + (tho1a * 12);
	}


document.getElementById("empNISYear").innerHTML = "Emp NIS/Year: " + "<b>" + empNIS + "</b>";
document.getElementById("selfEmpNISYear").innerHTML = "Self Emp NIS/Year: " + "<b>" + selfempNIS + "</b>";
document.getElementById("tax1Year").innerHTML = "Emp Tax Payable/Year: " + "<b>" + emptax + "</b>";
document.getElementById("tax1_1Year").innerHTML = "Self Emp Tax Payable/Year: " + "<b>" + selfemptax + "</b>";
}
