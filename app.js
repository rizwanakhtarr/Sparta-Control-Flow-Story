
var age = prompt("Are Sure you want to listen to this Scary Story?")
if(age < 16) {
alert("You are too Young for this scary story! Oh well");
} else if (age >=16){
alert("Proceed On!");
}

alert('Gray Forest was HAUNTED. One Rainy evening at 7, 3 Friends set out to prove to prove everyone it wasnt');




alert('The friends names were...');

let friends = ["Bruce","Tom", "Wendy"];

alert(friends.reverse());


alert('As they walked in the dark, a figure emerged from the trees ');



var options = prompt('Do you think they should Run,Stay still,Attack,other options?')
switch(options) {

  case 'Attack':
    alert('No way. It seems too risky!');
    break;
    case 'Stay Still':
      alert('It seems too risky!');
      break;
      case 'Run':
        alert('Correct. I would!');
        break;

      default:
      alert('Yeah I guess so..');
}




alert('The figure ran and chased them out of the forest but..  ')


var skills = {
  firstName:"Bruce",
  skillset: "A Master in Martial Arts"};

alert(skills.firstName);
alert(skills.skillset);

alert('360 kicked him in the face and stood there strong');

alert('As they all turn around...');

alert('BOOOOOO!');

alert('A clown looks down at Tom and Wendy, smiling...');

alert('Luckily, the clown was a statue! The 3 friends came running out of the forest Screaming and swore never to go back!')

alert('I hope you enjoyed my short story, Just a short quiz about it');

var questions = [
  {
    prompt: "What was the haunted forest name?\n(a)Blue\n (b)Green\n(c)Gray",
    answer: "Gray"
  },
  {
    prompt: "What was the friends name beginning with B?\n(a)Banner \n(b)Bruce\n (c)Braga",
    answer: "Bruce"
  },
  {
  prompt: "What time in the evening was it?\n(a)7pm\n (b)7am\n(c)12am",
  answer: "7pm"

  }];

var score = 0;

for(var i=0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt);
  if(response == questions[i].answer){
    score++;
    alert("Correct!");
  } else {
    alert("Thats Incorrect...")
  }


}
alert("You got a score of " +  score + "/"  +  questions.length);
