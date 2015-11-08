var score = 0; // The score will increment by one with each correct answer

// Asking for user's name, so to create personalized messages
var name = prompt("What's your name?", "Name here!");
alert("It's nice to meet you, " + name + ". Let's guess some things about me!")

// Function for correct and incorrect answers

function correct() {

    score++;
    alert("That's correct, " + name + "!");
    console.log(score);
}

function incorrect() {
  alert("Sorry, that's incorrect, " + name + ".");
}

// Question 1

var guess1 = prompt('Have I been to Europe? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess1 + '.');

// Correct answer is 'no'
if ((guess1 === 'no')||(guess1 === 'n')) {
  correct();
  alert("Maybe one day, I'll go to Europe...");
}
else {
  incorrect();
  alert("I haven't actually been to Europe. Maybe one day.");
};

// Question 2

var guess2 = prompt('Can I do a cartwheel? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess2 + '.');

// Correct answer is 'yes'

if ((guess2 === 'yes')||(guess2 === 'y')) {
  correct();
  alert("Watch this! *cartwheels*");
}

else {
  incorrect();
  alert("Tsk, " + name + " you doubter. Watch this. *cartwheels*");
}

// Question 3

var guess3 = prompt('Have I ever broken a bone? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess3 + '.');

// Correct answer is 'no'
if ((guess3 === 'no')||(guess3 === 'n')) {
  correct();
  alert("No bones broken! Yet...");
}
else {
  incorrect();
  alert("I've actually managed to stay lucky!");
};

// Question 4, a numeric one!

var guess4 = parseInt(prompt('At what age did I start doing gymnastics, one of my favorite sports? Enter a number only, no letters!'));
// Here, I'm trying to get numeric input only. No letters!
alert("You guessed age " + guess4 + ".");

// Correct answer is 10 years
if (guess4 === 10) {
  correct();
}

else if (guess4 < 10) {
  incorrect();
  alert("Didn't start quite THAT young.");
}

else if (guess4 > 10) {
  incorrect();
  alert("Didn't start THAT late.");
}

else {
  incorrect();
  alert("Numeric input only! Sorry...")
}

/// Question 5

var guess5 = prompt('Do I drive a hybrid car?? Write "yes" or "no".').toLowerCase();
alert('You answered ' + guess5 + '. And...');

// Correct answer is 'yes'
if ((guess5 === 'yes')||(guess5 === 'y')) {
  correct();
  alert("Cutest little '02 Prius you ever did see.");
}
else {
  incorrect();
  alert("My Prius is definitely a hybrid car!!");
};

// Question 6 - last one.

var guess6 = parseInt(prompt('How many languages can I speak fluently? Enter a number only.'));
alert("You guessed " + guess6 + " languages.");

// Correct answer is just one language.
if (guess6 === 1) {
  correct();
  alert("I only fluently speak good ol' English.");
}

else if (guess6 < 1) {
  incorrect();
  alert("Whatever you say, " + name + "... whatever you say.");
}

else if (guess6 > 1) {
  incorrect();
  alert("I wish I spoke " + guess6 + " languages, though.");
}

else {
  incorrect();
  alert("Numeric input only! Sorry...")
}

// Shows how many questions the user got correct
alert('You got ' + score + ' out of 6 questions correct!');

