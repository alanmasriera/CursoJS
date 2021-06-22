const d = document

export function reloj(btnIniciarReloj, btnPararReloj){
    let clockInterval
    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnIniciarReloj)){
            showTime()
            clockInterval = setInterval(() => {
                showTime()
            }, 1000);
            e.target.disabled = true
        }
        if(e.target.matches(btnPararReloj)){
            d.querySelector(".clock").innerText = ""
            clearInterval(clockInterval)
            d.querySelector(btnIniciarReloj).disabled = false
        }

    })
}
export function alarma(sound, btnIniciarAlarma, btnPararAlarma){
    let alarmTempo
    const $alarm = d.createElement("audio")
    $alarm.src = sound
    d.addEventListener("click", (e) =>{    
        if(e.target.matches(btnIniciarAlarma)){
            alarmTempo = setTimeout(() => {
                $alarm.play()
            }, 2000);
            e.target.disabled = true
        }
        if(e.target.matches(btnPararAlarma)){
            clearTimeout(alarmTempo)
            $alarm.pause()
            d.querySelector(btnIniciarAlarma).disabled = false
        }
    })
}


export function showTime(){
    console.log("showTime")
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    
    
}

