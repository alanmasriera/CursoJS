const d = document
const n = navigator
export default function getGeolocation(id){
    const $id = d.getElementById(id)
    const options = {
        enableHighAccurracy: true,
        timeout: 5000,
        maximumAge: 0
    }

    const sucess = (position) => {
        let coords = position.coords
        console.log(`https://www.google.com/maps/@
        ${coords.latitude},
        ${coords.longitude},
        10z`)
        $id.innerHTML=`
            <p> Tu posicion actual es:</p>
            <ul>
                <li>Latitud: <b>${coords.latitude}</b></li>
                <li>Longitud: <b>${coords.longitude}</b></li>
                <li>Presicion: <b>${coords.accuracy}</b> mts</li>
            </ul>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},13z" 
                target="_blank" rel="noopener">
                Ver en maps</a>
            `
    }
    const error = (err) => {
        $id.innerHTML = `<p><mark> Error: ${err.code}: ${err.message}</mark></p>`
        console.log(`Error: ${err.code}: ${err.message}`)
    }


    n.geolocation.getCurrentPosition(sucess, error, options)
}