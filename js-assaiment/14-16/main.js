// // --------question no 1----------------
var studentName = []
studentName = ["Ahmed","shayan","Ahsan","sami","Asad"]

// // --------question no 2----------------
 var studentNameObject = new array();

// // --------question no 3----------------
 var stringArray = ["Peach","Strawberry","Orange","Banana","Apple"]

// --------question no 4----------------
var numberArray = [5, 6,7 ,8 ,9, 10]

// // --------question no 5----------------
var booleanArray = [True, False ,True]

// // --------question no 6----------------

var MixedArray = ["Text" , 100, False , null]
// // --------question no 7----------------
var Qualification = [ "Qualification<br>"+"SSC<br>" + "HSC<br>" + "BCS<br>" + "BS<br>" + "BCOM<br>" + "MS<br>" + "M.Phil<br>" + "PHD<br>"]
document.write(Qualification, "<br><br><br>")


// -------------------question no 8------------
let studentsName = ["Ahmed","Ahsan","Ali"]
let totalScore = 500
let studentsScore = ["200","400","300"]

let calculation0 = studentsScore[0] / 500 * 100;
let calculation1 = studentsScore[1] / 500 * 100;
let calculation2 = studentsScore[2] / 500 * 100;

document.write(studentsName[0] + " got " + studentsScore[0] + " percentage " + calculation0 +"%" + "<br>")
document.write(studentsName[1] + " got " + studentsScore[1] + " percentage " + calculation1 +"%" + "<br>")
document.write(studentsName[2] + " got " + studentsScore[2] + " percentage " + calculation2    +"%" + "<br><br><br><br><br>")

// -------------------question no 10------------
var boysScore = [50,60,40]
boysScore.sort(function(a, b) {
    return a - b;
});
document.getElementById("boys-score").innerHTML = (boysScore + "");
