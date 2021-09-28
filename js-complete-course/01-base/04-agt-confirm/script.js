/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var question = prompt("What is your age?")
    var question1 = prompt("What is your gender?")
    var question2 = prompt("In which town do you live?")
    alert (question + question1 + question2);
    var result = confirm("Do you confirm that these informations are true?")
    if (result == true) {
        alert("Thanks for visiting");
    }
    else {
        alert("Thanks for staying with us");
    }


    // your code here

})();
