import * as ELEMENTS from './elements.js';

const workLoadDuration = 52;

ELEMENTS.ELEMENT_START.addEventListener('click', () => {
    const localStorage = window.localStorage;
    if(localStorage.getItem('startTimeMs') == undefined){       // START WORKLOAD
        const maxTime = setTimeout( () => {
            localStorage.removeItem('maxTime');
            localStorage.removeItem('startTimeMs');
            ELEMENTS.ELEMENT_START.innerHTML = 'Start Work Load';
            endWorkload(workLoadDuration);}
            , 3000);//workLoadDuration*60*1000

        localStorage.setItem('startTimeMs', Date.now());
        localStorage.setItem('maxTime', maxTime);
        ELEMENTS.ELEMENT_START.innerHTML = 'Stop Work Load';
    }else{                                                      // END WORK LOAD MANUALLY
        const maxTime = localStorage.getItem('maxTime');
        clearTimeout(maxTime);
        localStorage.removeItem('maxTime');
        const totalTimeInMs = Date.now() - localStorage.getItem('startTimeMs');
        const totalTimeInMin = totalTimeInMs / 60000;           // 1.0278666666666667 = 1min 2s = 62 seconds
        localStorage.removeItem('startTimeMs');
        ELEMENTS.ELEMENT_START.innerHTML = 'Start Work Load';
        endWorkload(totalTimeInMin);
    }
});

function endWorkload(workTime) {
    alert(`Work load ended: ${workTime};`);
}
