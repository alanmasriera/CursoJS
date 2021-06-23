const d = document
export default function countdown(id, limitDate, finalMessage){
    const $countdown = d.getElementById(id)
    const countdownDate = new Date(limitDate).getTime()
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime()
        let limitTime = countdownDate - now
        let dias = Math.floor(limitTime  / (1000 * 60 * 60 * 24))
        let horas = Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        let minutos = Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))
        let segundos = Math.floor(limitTime % (1000 * 60) / (1000))

        $countdown.innerHTML = `<h3>Faltan: ${dias} dias ${horas} horas ${minutos} minutos y ${segundos}segundos</h3>`
        
        if(limitTime<0){
            clearInterval(countdownTempo)
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`
        }
    }, 1000);
}