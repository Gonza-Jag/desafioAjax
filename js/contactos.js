
const cargoContactos = (arr)=> {
    let detalleTabla = ""
    arr.forEach(contacto => {
        detalleTabla += `<tr>
        <td>${contacto.puesto}</td>
        <td>${contacto.nombre}</td>
        <td>${contacto.alias}</td>
        <td>${contacto.email}</td>
     </tr>`
    })
    tbody.innerHTML = detalleTabla
    
}
const obtenerDatos = ()=>{
    fetch(URL)
              .then((response)=>  response.json())
              .then((data)=>{arrayContactos = data})
              .catch(error =>  arrayContactos = [{puesto: "error :(", nombre: "", alias: "", email: ""}])
                 
                 .finally(()=> cargoContactos(arrayContactos))
                  
              }
                


document.addEventListener("DOMcontentLoaded", obtenerDatos())
