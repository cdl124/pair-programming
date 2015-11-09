var score = 0; // The score will increment by one with each correct answer

// Variables set for each of the six questions.
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var q5 = document.getElementById('q5');
var q6 = document.getElementById('q6');

// Asking for user's name at the beginning, so to create personalized messages

var name = prompt("What's your name?", "Name here!");
alert("It's nice to meet you, " + name + ". Let's guess some things about me!")

function correct(question) { // Function for correct answers

    score++;
    console.log(question);
    question.innerHTML = ("That's correct, " + name + "! <br />");

}

function incorrect(question) { // Function for incorrect answers

  question.innerHTML = "Sorry, that's incorrect, " + name + ".<br />";

}

// We begin the questions here.
// Question 1

var guess1 = prompt('Have I been to Europe? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess1 + '.');

if ((guess1 === 'no')||(guess1 === 'n')) { // Correct answer is 'no'

  correct(q1);
  q1.innerHTML += "Maybe one day, I'll go...";

}

else {

  incorrect(q1);
  q1.innerHTML += "I haven't actually been to Europe. Maybe one day, though.";

};

// Question 2

var guess2 = prompt('Can I do a cartwheel? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess2 + '.');

if ((guess2 === 'yes')||(guess2 === 'y')) { // Correct answer is 'yes'

  correct(q2);
  q2.innerHTML += "Whee! Watch this! *cartwheels*";

}

else {

  incorrect(q2);
  q2.innerHTML += "And I lament that you doubt me. Watch this! *cartwheels sadly*";

}

// Question 3

var guess3 = prompt('Have I ever broken a bone? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess3 + '.');

if ((guess3 === 'no')||(guess3 === 'n')) { // Correct answer is 'no'

  correct(q3);
  q3.innerHTML += "No bones broken! Yet...";

}
else {

  incorrect(q3);
  q3.innerHTML += "I've managed to stay lucky!";

};

// Question 4, a numeric one!

var guess4 = parseInt(prompt('At what age did I start doing gymnastics, one of my favorite sports? Enter a number only, no letters!'));
// I don't quite know how to require numeric input in order for
// the answer to submit at all, quite yet. For now, a NaN answer
// is simply incorrect. That's what the user gets for not
// following instructions!!
alert("You guessed age " + guess4 + ".");

if (guess4 === 10) { // Correct answer is 10 years

  correct(q4);
  q4.innerHTML += "Yup, 10 years old.";

}

else if (guess4 < 10) { // User inputs less than 10

  incorrect(q4);
  q4.innerHTML += "I didn't start quite THAT young.";

}

else if (guess4 > 10) { // User input is more than 10

  incorrect(q4);
  q4.innerHTML += "I didn't start THAT late.";

}

else { // User inputs NaN

  incorrect(q4);
  q4.innerHTML += "I can only parse numbers here, not letters :(";

}

/// Question 5

var guess5 = prompt('Do I drive a hybrid car?? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess5 + '. And...');

if ((guess5 === 'yes')||(guess5 === 'y')) { // Correct answer is 'yes'

  correct(q5);
  q5.innerHTML += "My little '02 Prius gets me places. Vroom vroom.";

}

else {

  incorrect(q5);
  q5.innerHTML += "My little ol' Prius is definitely a hybrid!"

};

// Question 6 - last one.

var guess6 = parseInt(prompt('How many languages can I speak fluently? Enter a number only.'));
alert("You guessed " + guess6 + " languages.");

if (guess6 === 1) { // Correct answer is just one language.

  correct(q6);
  q6.innerHTML += "Just good ol' English."

}

else if (guess6 < 1) { // User input is less than 1?!?

  incorrect(q6);
  q6.innerHTML += "That would stink a lot if that were true, eh?"

}

else if (guess6 > 1) { // User input is more than 1 language

  incorrect(q6);
  q6.innerHTML += "I wish I could fluently speak " + guess6 + " languages, though!"

}

else { // For NaN inputs

  incorrect(q6);
  q6.innerHTML += "I can only parse numbers and not letters :("

}

// End of document shows how many questions the user got correct

document.getElementById('total');
total.innerHTML = "You got " + score + " out of 6 questions correct!"
