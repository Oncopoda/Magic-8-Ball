let answers = [
'It is certain',
'It is decidedly so',
'Reply hazy try again',
'Cannot predict now',
'Do not count on it',
'My sources say no',
'Outlook not so good',
'Signs point to yes',

]

 let displayAnswer = function()
{
	let index = Math.floor(Math.random() * answers.length);
	let answer = answers[index];
	let element = document.getElementById( 'circle' );
	element.style.display = 'inline-block';
	element.innerHTML = '<br><br>' + answer;
}