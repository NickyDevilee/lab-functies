/*Nicky Devilee
Bol4 applicatieontwikkelaar
Week 8 - JavaScript
opdracht: Lab - functies*/

function naampje() {
	var naam=prompt("Wat is uw naam? Typ 'stop' om te stoppen");
	if (naam != 'stop') {
		var leeftijd=prompt('Wat is uw leeftijd?');
		document.write('Hallo ' + naam + ', uw leeftijd is ' + leeftijd + ' jaar.' + '<hr>');
		naampje();
	}
}

naampje();