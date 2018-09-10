/* Coding challenge of tip calculation*/


/*bill =[199, 20, 168];
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
*/
/*function randomvalue(){
	var score = Math.round(Math.random() * 10 ) + 1;
	console.log(score);
}

randomvalue();*/

function interviewQuestion(job) {
	{
		return function(name){
			if (job === "designer"){
			console.log(name+ "years to retirement");
		}
		}
	}else if (job === "teacher"){
		return function(name){
			console.log( name + "what subject do you tech");
		}
	}else {
		return function (name){
			console.log( name + "what do you do");
		}
	}
}

var teacherQuestion = interviewQuestion("teacher");
teacherQuestion("jane");
interviewQuestion ("baseball")("uber");