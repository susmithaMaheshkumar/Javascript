/* Coding challenge of tip calculation*/


bill =[199, 20, 168];
tipcalculator (bill);

function tipcalculator(bill){
	if (bill <= 50) {
		return bill * 0.20;
	}
	else if (bill >50 && bill < 200){
		return bill * 0.15;
	}
	else {
		return bill * 0.10;
	}

}

console.log(tipcalculator(bill[0])+bill[0]);
console.log(tipcalculator(bill[1])+bill[1]);
console.log(tipcalculator(bill[2])+bill[2]);
