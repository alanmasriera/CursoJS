const d = document
const n = navigator

export default function webCam(id){
    const $video = d.getElementById(id)
    n.mediaDevices
        .getUserMedia({video:true, audio:true})
        .then(stream => {
            console.log(stream)
            $video.srcObject = stream
            $video.onplay()
        })
        .catch(err => console.log(`Sucecio el siguiente error!: ${err}`))
}