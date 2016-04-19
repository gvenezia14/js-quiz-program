// begin with a blank/new order
var order = ' ';


// build a function to ask questions

function question(questionText, appendage, print) {
  // your code goes here
  order = order + prompt(questionText) + appendage + ", ";
}

// call the QUESTION function with the order options
question("What type of meat? Options are chicken, beef, or fish.", "");
question("What type of bean? Options are black or brown.", " beans")
question("What type of rice? Options are white or brown.", " rice");
question("What type of toppings? Options are salsa or sour cream.", "")


function question2(questionText, type){
  var answer = prompt(questionText);
  if (answer === "yes"){
    order = order + type + ", ";
  }
  else {}
}

question2("Do you want fajitas?", "fajitas");

// output their order
document.write("<p>You ordered: " + order + "<p>");
