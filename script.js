// reference html elements
let hrs = document.querySelector('#hrs');
let mins = document.querySelector('#mins');
let secs = document.querySelector('#secs');

// Every second, we create a new date object
// That time is displayed on the clock
setInterval(() => {
    let currentTime = new Date();

    let [hh, mm, ss] = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()]

    // pad single digit numbers with a 0
    if (hh < 10) hh = '0' + hh;
    if(mm < 10) mm = '0' + mm;
    if(ss < 10) ss = '0' + ss;

    // set the inner html
    hrs.innerHTML = hh;
    mins.innerHTML = mm;
    secs.innerHTML = ss;
}, 1000)
