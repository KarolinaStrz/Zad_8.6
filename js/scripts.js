var a = prompt('Podaj liczbę');
var b = prompt('Podaj kolejną liczbę');
var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
    alert('Wynik dodatni');
} else if (value < 0) {
    alert('wynik ujemny');
} else {
    alert('wynik równy 0');
}