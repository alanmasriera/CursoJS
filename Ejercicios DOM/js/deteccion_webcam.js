const d = document
const n = navigator

export default function webCam(id){
    const $video = d.getElementById(id)
    n.mediaDevices
        .getUserMedia({video:true, audio:true})
        .then(stream => {
            console.log(stream)
            $video.srcObject = stream
            $video.play()
        })
        .catch(err => $video.insertAdjacentHTML("afterend",`<p>Sucedio el siguiente error: <mark>${err}</mark></p>`))
}