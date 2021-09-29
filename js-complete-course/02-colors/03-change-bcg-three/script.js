/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById('run').addEventListener('click', function (){ //Klik functie
        var randomColor = Math.floor(Math.random()*16777215).toString(16); //Color randomizer (gevonden op het internet)
        document.body.style.backgroundColor = '#' + randomColor; //body bgcolor instellen. Zeker de hashtag noteren voor de color
    })


})();
