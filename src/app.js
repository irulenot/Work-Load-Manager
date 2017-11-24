const ELEMENT_START = document.querySelector('#start');
const ELEMENT_DATA = document.querySelector('#data');
ELEMENT_START.addEventListener('click', startTimer);

function startTimer() {
    var localStorage = window.localStorage;

    if(localStorage.getItem('startTimeMs') == undefined){
        localStorage.setItem('startTimeMs', Date.now());
        ELEMENT_START.innerHTML = 'Stop Work Load';
    }else{
        var totalTimeInMs = Date.now() - localStorage.getItem('startTimeMs');
        var totalTimeInMin = totalTimeInMs / 60000;
        localStorage.removeItem('startTimeMs');
        ELEMENT_START.innerHTML = 'Start Work Load';
        console.log(totalTimeInMin);
    }

}

export default startTimer;
