let numberToguess = Math.round(Math.random() * 100);
let tries = 0; 

function guessThenumber() {
    alert("es funktioniert") // kann auch weg dann wird die anzeige nicht rauskommen

    tries = tries + 1;
    displaytries.innerHTML = 'Versuche: ' + tries; 

    if(numberToguess == mynumber.value) {
        headline.innerHTML = 'Du hast gewonnen ';
    }

    if(numberToguess > mynumber.value) {
        headline.innerHTML = 'Die Zahl ist größer';
    }

    if(numberToguess < mynumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner';
    }
    mynumber.value = '';
}