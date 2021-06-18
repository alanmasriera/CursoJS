export default function reloj(btnIniciarReloj, btnPararReloj, btnIniciarAlarma, btnPararAlarma,){
    console.log("En funcion reloj")
    const d = document
    d.addEventListener("click", (e) =>{
        if(e.target.matches(btnIniciarReloj)){
            d.querySelector(panel).hide()
        }
        if(e.target.matches(btnIniciarReloj)){
            
        }
        if(e.target.matches(btnIniciarReloj)){
            
        }
        if(e.target.matches(btnIniciarReloj)){
            
        }
    })
}
    
export function showTime(){
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
    
    setTimeout(showTime, 1000);
    
}

