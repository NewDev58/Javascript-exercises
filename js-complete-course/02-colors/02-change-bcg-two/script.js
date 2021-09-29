/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //
    document.getElementById('run').addEventListener('click', function(){ //wachten op de klik van de button
        let color = document.getElementById('color').value; //color krijgt de waarde die de gebruiker ingeeft in het tekstveld
        document.body.style.backgroundColor = color; //body achtergrondkleur word gelijk aan color
    })
    }
    // your code here

})();
