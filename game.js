var score = 0; // The score will increment by one with each correct answer

// Variables set for each of the six questions, their answers.

var n1 = "Have I been to Europe?";
var n2 = "Can I do a cartwheel?";
var n3 = "Have I ever broken a bone?";
var n4 = "At what age did I start doing gymnastics, one of my favorite sports?";
var n5 = "Do I drive a hybrid car??";
var n6 = "How many languages can I speak fluently?";

var q = [n1, n2, n3, n4, n5, n6];
var a = [['no','n'], ['yes', 'y'], 10, 1];

function correct(guessN, imgN, qN) { // Function for correct answers,
  // where 'guessN' is for the 'guess_' variables, and 'qN' is for the 'q_' id's

    score++;
    console.log(score);
    document.getElementById('imgN');
    imgN.innerHTML = "<img align='left' height='50' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Checkmark_green.svg/834px-Checkmark_green.svg.png' />"
    document.getElementById('qN');
    qN.className = 'correct';
    qN.innerHTML += "You answered " + guessN + ". <br />"
    qN.innerHTML += ("That's correct, " + name + "! ");

}

function incorrect(guessN, imgN, qN) { // Function for incorrect answers

  document.getElementById('imgN');
  imgN.innerHTML = "<img align='left' height='50' src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Heavy_red_%22x%22.png' />"
  document.getElementById('a');
  qN.className = 'incorrect';
  qN.innerHTML += "You answered " + guessN + ". <br />"
  qN.innerHTML += "Sorry, that's incorrect, " + name + ". ";

}

// End of basic var and function declarations.
// Now asking for user's name at the beginning, so to create personalized messages

var name = prompt("What's your name?", "Name here!");
document.getElementById("nameWrite");
nameWrite.innerHTML = "It's nice to meet you, " + name + ". Let's see how you do!";

// We begin the questions here.
// Question 1

var guess1 = prompt(q[0]).toLowerCase();

var innerArrayQuestion1 = a[0];

if (innerArrayQuestion1.indexOf(guess1) != -1) { // Correct answer is 'no'

  correct(guess1, img1, q1);
  q1.innerHTML += "Maybe one day, I'll go...";

}

else {

  incorrect(guess1, img1, q1);
  q1.innerHTML += "I haven't actually been to Europe. Maybe one day, though.";

};

// Question 2

var guess2 = prompt(q[1]).toLowerCase();

var innerArrayQuestion2 = a[1];

if (innerArrayQuestion2.indexOf(guess2) != -1) { // Correct answer is 'yes'

  correct(guess2, img2, q2);
  q2.innerHTML += "Whee! Watch this! *cartwheels*";

}

else {

  incorrect(guess2, img2, q2);
  q2.innerHTML += "I lament that you doubt me... *cartwheels sadly*";

}

// Question 3

var guess3 = prompt(q[2]).toLowerCase();

var innerArrayQuestion3 = a[0];

if (innerArrayQuestion3.indexOf(guess3) != -1) { // Correct answer is 'no'

  correct(guess3, img3, q3);
  q3.innerHTML += "No bones broken! Yet...";

}

else {

  incorrect(guess3, img3, q3);
  q3.innerHTML += "I've managed to stay lucky!";

};

// Question 4, a numeric one!

var guess4 = parseInt(prompt(q[3]));
// I don't quite know how to require numeric input in order for
// the answer to submit at all, quite yet. For now, a NaN answer
// is simply incorrect. That's what the user gets for not
// following instructions!!

if (guess4 === a[2]) { // Correct answer is 10 years

  correct(guess4, img4, q4);
  q4.innerHTML += "Yup, 10 years old.";

}

else if (guess4 < a[2]) { // User inputs less than 10

  incorrect(guess4, img4, q4);
  q4.innerHTML += "I didn't start quite THAT young.";

}

else if (guess4 > a[2]) { // User input is more than 10

  incorrect(guess4, img4, q4);
  q4.innerHTML += "I didn't start THAT late.";

}

else { // User inputs NaN

  incorrect(guess4, img4, q4);
  q4.innerHTML += "I can only parse numbers here, not letters :(";

}

/// Question 5

var guess5 = prompt(q[4]).toLowerCase();

var innerArrayQuestion5 = a[1];

if (innerArrayQuestion5.indexOf(guess5) != -1) { // Correct answer is 'yes'

  correct(guess5, img5, q5);
  q5.innerHTML += "My little '02 Prius gets me places. Vroom vroom.";

}

else {

  incorrect(guess5, img5, q5);
  q5.innerHTML += "My little ol' Prius is definitely a hybrid!"

};

// Question 6 - last one.

var guess6 = parseInt(prompt(q[5]));

if (guess6 === a[3]) { // Correct answer is just one language.

  correct(guess6, img6, q6);
  q6.innerHTML += "Just good ol' English."

}

else if (guess6 < a[3]) { // User input is less than 1?!?

  incorrect(guess6, img6, q6);
  q6.innerHTML += "That would stink a lot if that were true, eh?"

}

else if (guess6 > a[3]) { // User input is more than 1 language

  incorrect(guess6, img6, q6);
  q6.innerHTML += "I wish I could fluently speak " + guess6 + " languages, though!"

}

else { // For NaN inputs

  incorrect(guess6, img6, q6);
  q6.innerHTML += "I can only parse numbers and not letters :("

}

// End of document shows how many questions the user got correct

document.getElementById('total');
total.innerHTML = "You got " + score + " out of 6 questions correct!"
