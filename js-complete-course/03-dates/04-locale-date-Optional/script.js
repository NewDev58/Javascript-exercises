/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
        let date = new Date()
        let day = date.getDate();
        let mm = date.getMonth()+1;
        let year = date.getFullYear();
        console.log(day);
        console.log(year);
        let months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
        let month = months[mm-1];
        console.log(month);
        let dayName = date.getDay();
        console.log(dayName);
        let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let dayOfWeek = weekdays[dayName];
        console.log(dayOfWeek);
        let hour = date.getHours();
        let minutes = date.getMinutes();
        document.getElementById('target').innerHTML = dayOfWeek +' '+ day + ' '+ month+' '+year+', '+hour+'h'+minutes;
})();
