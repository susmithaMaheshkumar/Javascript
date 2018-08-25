/*To display the javascript in the console and to show the log in the */
/* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK 😀
*/

var Marksmass = 78;
var Marksheight = 1.6;

var Johnmass = 64;
var Johnheight = 1.8;


var marksBMI = Marksmass / (Marksheight * Marksheight);
var JohnBMI = Johnmass / (Johnheight ^2)
console.log(marksBMI, JohnBMI);

var Bmical = marksBMI > JohnBMI;
console.log("is Marks BMI greater than Johns ?" + " " + Bmical);