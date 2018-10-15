/*Nicky Devilee
Bol4 applicatieontwikkelaar
Week 8 - JavaScript
opdracht: Lab - functies*/

var getal1=10;
var getal2=12;
var plus = plus(getal1, getal2);

function plus(plus1, plus2) {
	return plus1+plus2
}

document.write('<hr>' + getal1 + ' + ' + getal2 + ' = ' + plus + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////
var getal1=58;
var getal2=34;
var min = min(getal1, getal2);

function min(min1, min2) {
	return min1-min2
}

document.write(getal1 + ' - ' + getal2 + ' = ' + min + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////
var getal1=6;
var getal2=7;
var keer = keer(getal1, getal2);

function keer(keer1, keer2) {
	return keer1*keer2
}

document.write(getal1 + ' x ' + getal2 + ' = ' + keer + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////
var getal1=144;
var getal2=12;
var delen = delen(getal1, getal2);

function delen(delen1, delen2) {
	return delen1/delen2
}

document.write(getal1 + ' : ' + getal2 + ' = ' + delen + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////
var getal1=12;
var increment = increment(getal1);

function increment(increment1) {
	return increment1+1
}

document.write(getal1 + ' + 1 ' + ' = ' + increment + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////
var getal1=34;
var decrement = decrement(getal1);

function decrement(decrement1) {
	return decrement1-1
}

document.write(getal1 + ' - 1 ' + ' = ' + decrement + '<hr>');
////////////////////////////////////////////////////////////////////////////////////////