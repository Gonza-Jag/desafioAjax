
const cargoTabla = (arr)=> {
    let detalleTabla = ""
    arr.forEach(ranking => {
        detalleTabla += `<tr>
        <td>${ranking.puesto}</td>
        <td>${ranking.nombre}</td>
        <td>${ranking.alias}</td>
        <td>${ranking.email}</td>
     </tr>`
    })
    tbody.innerHTML = detalleTabla
    
}
const obtenerDatos = ()=>{
    fetch(URL)
              .then((response)=>  response.json())
              .then((data)=>{arrayRanking = data})
              .catch(error =>  arrayRanking = [{puesto: "error :(", nombre: "", alias: "", email: ""}])
                 
                 .finally(()=> cargoTabla(arrayRanking))
                  
              }
                


document.addEventListener("DOMcontentLoaded", obtenerDatos())
