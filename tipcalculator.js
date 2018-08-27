/* Coding challenge of tip calculation*/


var bill =[236];
console.log(tipcalculator (bill));

function tipcalculator(bill){
	if (bill <= 50) {
		var tipvalue = (bill * 0.20);
	}
	else if (bill >50 && bill < 200){
		var tipvalue = (bill * 0.15);
	}
	else {
		var tipvalue = (bill * 0.10);
	}
console.log(tipvalue)
}
