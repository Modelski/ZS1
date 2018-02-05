var a = 10, b = "3c";
var wynik= a+b;
//alert(wynik);
//alert(a+b);
console.log("tekst");
console.log(a);
console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(typeof(a+b)); //string

console.trace();

var _zmienna1 = 10;
//var 3liczba = 10; //błędna nazwa zmiennej
var zmiennaZmiennoprzecinkowa = 2.5;
console.log(zmiennaZmiennoprzecinkowa);
console.log(typeof(zmiennaZmiennoprzecinkowa));

//int intiger liczba całgowira np. 3 (c++)
//float zmiennoprzecinkowa np. 3.5 (c++)

//bool

var prawda = true;
var falsz = false;
console.log(typeof(prawda)); //bolean
console.log(typeof(falsz)); //boolean

//string

var tekst = "Janusz";
console.log(typeof(tekst));

//undefined

var imie;
console.log(imie); //undefined
console.log(typeof(imie)); //undefined
imie = "Sandra";
console.log(typeof(imie)); //sring

//object

var tablica = ["Janusz", "Anna" , "Krtystyna"];
console.log(tablica) ;
console.log(typeof(tablica)) ;


//################################################################################


/*//var liczba = prompt("Podaj liczbę");
var liczba1 = prompt("Podaj pierwsza liczbe", "np. 3.4");
var liczba2 = prompt("Podaj druga liczbe", "np. 3.4");
// Liczby Całkowite parseInt
//liczba1 = parseInt(liczba1);
//liczba2 = parseInt(liczba2);
liczba2 = parseFloat(liczba2); // konwersja na typ zmienno przecinkowy
liczba2 = parseFloat(liczba2);
console.log(typeof(liczba1));
console.log(typeof(liczba2));
var suma = liczba1 + liczba2; //konkatenacja
document.write(suma);
console.log(typeof(suma));*/

// konkatenacja
// JS -> +
// PHP -> .

//zad.1
 /*mama , tata oraz dziecko podają swój wiek z klawiatury
 Na ekranie wyświetl w formacie:

mama: ... lat
Tata: ... lat
Dziecko: ... lat
Średni wiek wynosi: ... lat*/


var Mama = prompt("podaj wiek Mamy", "np 10lat");
var Dziecko = prompt("podaj wiek Dziecka", "np 10lat");
var Tata = prompt("podaj wiek Taty", "np 10lat");

Mama = parseInt(Mama);
Dziecko = parseInt(Dziecko);
Tata = parseInt(Tata);

var srednia_wieku = (Mama + Tata + Dziecko)/3;
srednia_wieku = srednia_wieku.toFixed(0);

document.write("Mama: " + Mama + "lat<br>");
document.write("Dziecko: " + Dziecko + "lat<br>");
document.write("Tata: " + Tata + "lat<br>");
document.write("Średnia wieku: " + srednia_wieku);



