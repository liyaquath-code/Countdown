let sel = document.querySelector('select').value;

function countdownTimer() {
    const d = new Date();
    const newYear = `01/01/${d.getFullYear() + 1}`;
    const nextDay = `${formatTime(d.getMonth() + 1)}/${formatTime(
        d.getDate() + 1
    )}/${d.getFullYear()}`;
    const republicDay = compareDate(`01/26/${d.getFullYear()}`);
    const independanceDay = compareDate(`08/15/${d.getFullYear() + 1}`);
    let date;
    let eventName = document.querySelector('.eventName');

    if (sel == 'newYear') {
        eventName.innerHTML = "New Year in ";
        date = newYear;
    } else if (sel == 'nextDay') {
        eventName.innerHTML = "New Day in ";
        date = nextDay;
    } else if (sel == 'republicDay') {
        eventName.innerHTML = "Republic Day in ";
        date = republicDay;
    } else if (sel == 'independanceDay') {
        eventName.innerHTML = "Independance Day in ";
        date = independanceDay;
    } else {
        eventName.innerHTML = "Custom selected date in ";
        let custDate = document.getElementById("random-date").value;
        date = custDate;
    }

    const targetDate = new Date(date);

    totalSeconds = Math.floor(targetDate - d) / 1000;

    days = Math.floor(totalSeconds / (3600 * 24));
    hours = Math.floor(totalSeconds / 3600) % 24;
    mins = Math.floor(totalSeconds / 60) % 60;
    seconds = Math.floor(totalSeconds) % 60;
    //console.log(days, hours, mins, seconds);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = formatTime(hours);
    document.getElementById("mins").innerHTML = formatTime(mins);
    document.getElementById("seconds").innerHTML = formatTime(seconds);

    document.getElementById("hours-label").innerHTML = formatTimeUnit(
        hours,
        "HOUR"
    );
    document.getElementById("mins-label").innerHTML = formatTimeUnit(
        mins,
        "MINUTE"
    );
    document.getElementById("seconds-label").innerHTML = formatTimeUnit(
        seconds,
        "SECOND"
    );
}

function formatTime(time) {
    return time >= 10 ? time : `0${time}`;
}

function formatTimeUnit(time, unit) {
    return time == 1 ? unit : unit + "S";
}

function customDate() {
    let sel1 = document.querySelector('select').value;
    if (sel1 == 'custom') {
        document.querySelector('.custom-date').style.display = 'block';
    } else {
        document.querySelector('.custom-date').style.display = 'none';
    }
}

function compareDate(a) {
    const x = new Date(a);
    const y = new Date();
    return x>y ? a : `${x.getMonth()+1}/${x.getDate()}/${y.getFullYear()+1}`;
}

document.getElementById("edit").addEventListener("click", () => {
    document.getElementById('date-edit').style.display = 'flex';
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById('date-edit').style.display = 'none';
});

document.getElementById("btnSubmit").addEventListener("click", () => {
    sel = document.querySelector('select').value;
    countdownTimer();
    document.getElementById('date-edit').style.display = 'none';
});

countdownTimer();
setInterval(countdownTimer, 1000);
