// variables
var correct = 0;

// prompt
var answer1 = prompt("Who lives longer on average, men or women?");
if ( answer1 === 'women' ) {
 correct += 1;
 document.write("<p>Correct, the answer women.</p>");
}
else{
  document.write("<p>Wrong you wrote " + answer1 + "</p>");
}


var answer2 = prompt("What contains more fat, cream or milk?");
if ( answer2 === 'cream' ) {
 correct += 1;
 document.write("<p>Correct, the answer cream.</p>");
}
else{
  document.write("<p>Wrong you wrote " + answer2 + "</p>");
}

var answer3 = prompt("What is the primary substance in the human body?");
if ( answer3 === 'water' ) {
 correct += 1;
 document.write("<p>Correct, the answer water.</p>");
}
else{
  document.write("<p>Wrong you wrote " + answer3 + "</p>");
}

var answer4 = prompt("What color are lemons?");
if ( answer4 === 'yellow') {
 correct += 1;
 document.write("<p>Correct, the answer yellow.</p>");
}
else{
  document.write("<p>Wrong you wrote " + answer4 + "</p>");
}

var answer5 = prompt("What is the median age of seniors at WashU?");
if ( answer5 === '21' ) {
 correct += 1;
 document.write("<p>Correct, the answer 21.</p>");
}
else{
  document.write("<p>Wrong you wrote " + answer5 + "</p>");
}

document.write("<p> You got " + correct + " out of 5 answers right. To retake the test refresh the page.</p>");

// if statement
