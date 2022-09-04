const time_el = document.querySelector('.watch .time') //Document метод querySelector() возвращает первый элемент (Element) документа, который соответствует указанному селектору или группе селекторов. 
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reser_btn = document.getElementById('reset')//Возвращает ссылку на элемент по его идентификатору (ID); идентификатор является строкой, которая может быть использована для идентификации элемента; она может быть определена при помощи атрибута id в HTML или из скрипта.


let seconds = 0;
let interval = null;

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reser_btn.addEventListener('click', reset);

function timer(){
    seconds++;
    //Format our time
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);//округление
    let secs = seconds % 60;//модуль,число не будет больше 60
    
   if(secs < 10) secs = '0' + secs;
   if(mins < 10) mins = '0' + mins;
   if(hrs < 10) hrs = '0' + hrs;              

    time_el.innerText = `${hrs}:${mins}:${secs}`;
}


function start() {
    if(interval) {
        return
    }

    interval = setInterval(timer, 1000);
}
function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';

}

