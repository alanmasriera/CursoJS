const d = document

export default function scrollSpy(){
    const $sections = d.querySelectorAll("section[data-scroll-spy]")
    const cb = (entries) =>{
        //console.log("Entries",entries)
        entries.forEach(entry => {
            //console.log("Entry",entry)
            const id = entry.target.getAttribute("id")
            //console.log(id)
            if(entry.isIntersecting){
                //console.log("entro",id)
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active")
            }else{
                //console.log("No entro",id)
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active")
            }
        })
    }
    const observer = new IntersectionObserver(cb, {
        
        //Esta opcion se activa cuando esta en la pantalla por al menos x pixeles
        //lo que hace es disminuir el cuadro que activa la funcion en ese numero
        //rootMargin: "-220px",
        //Esta funciona con % de la seccion en pantalla, solo prendera cuando tengamos 
        //el x % dentro de la ventana
        threshold: 0.5
        //Tambien podemos hacerlo en una zona de % max y min
        //threshold: [0.5,0.75]
    })

    $sections.forEach(el => observer.observe(el))
}