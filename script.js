function updateCountdowns() {
    const allDaysElements = document.querySelectorAll('.days');

    allDaysElements.forEach(element => {
        const targetStr = element.getAttribute('data-date');
        const targetDate = new Date(targetStr).getTime();
        const currentDate = new Date().getTime();
        const distance = targetDate - currentDate;

        if (distance < 0) {
            element.innerHTML = "0";
        } else {
            const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));

            element.innerHTML = daysLeft; 
        }
    });
}

function onButtonClick(button) {
    switch(button) {
        case 1: {
            const classMain = document.getElementsByClassName("main-all")[0];
            classMain.className = "show-container";

            const classMain2 = document.getElementsByClassName("main-all-in-one")[0];
            classMain2.className = "hide-container";

            const classMain3 = document.getElementsByClassName("main-focus")[0];
            classMain3.className = "hide-container";
            break;
        }
        case 2: {
            const classMain = document.getElementsByClassName("main-all-in-one")[0];
            classMain.className = "show-container";

            const classMain2 = document.getElementsByClassName("main-all")[0];
            classMain2.className = "hide-container";

            const classMain3 = document.getElementsByClassName("main-focus")[0];
            classMain3.className = "hide-container";
            break;
        }
        case 3: {
            const classMain = document.getElementsByClassName("main-focus")[0];
            classMain.className = "show-container";

            const classMain2 = document.getElementsByClassName("main-all-in-one")[0];
            classMain2.className = "hide-container";

            const classMain3 = document.getElementsByClassName("main-all")[0];
            classMain3.className = "hide-container";
            break;
        }
        default: return;
    }
}

setInterval(updateCountdowns, 1000);
updateCountdowns();