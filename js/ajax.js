 (() => {
    const xhr = new XMLHttpRequest
    const $xhr = document.getElementById("xhr")
    const $fragment = document.createDocumentFragment()
    

    xhr.addEventListener("readystatechange", e =>{
        //console.log(xhr)
        if(xhr.readyState !== 4)return

        if(xhr.status >= 200 && xhr.status < 300){
            //console.log("Exito en la ejecucion")
            let json = JSON.parse(xhr.responseText)
            json.forEach((el) => {
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            });
            $xhr.appendChild($fragment)
        }else{
            //console.log("Error en la ejecucion")
            let message = xhr.statusText || "Ocurrio un error"
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }
        
    })
    
    xhr.open("GET","https://jsonplaceholder.typicode.com/users")
    
    xhr.send()
 })();

 (() => {
    const $fetch = document.getElementById("fetch")
    const $fragment = document.createDocumentFragment()

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => (res.ok ? res.json(): Promise.reject(res)))
        .then((json) =>{
            json.forEach(el =>{
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            
            $fetch.appendChild($fragment)
        })
        .catch((err) =>{
            let message = err.statusText || "Ocurrio un error"
            $fetch.innerHTML = `Error ${err.status}: ${message}`
        })
        .finally(()=>{
            console.log("Este mensaje se ejecutara independientemente de la respuesta")
        })
 })();

 (() => {
    const $fetchAsync = document.getElementById("fetch-async")
    const $fragment = document.createDocumentFragment()
    
    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users")
            let json = await res.json()
            //if(!res.ok){throw new Error("Mensaje")}
            if(!res.ok){throw {status: res.status, statusText: res.statusText}}
            json.forEach(el =>{
                const $li = document.createElement("li")
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
                $fragment.appendChild($li)
            })
            $fetchAsync.appendChild($fragment)
        }catch(err){
            let message = err.statusText || "Ocurrio un error"
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`
        }finally{

        }
    }
    getData()
    
})()