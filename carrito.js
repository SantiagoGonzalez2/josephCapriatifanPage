

const contenedor = document.getElementById("participation")
const contenedorcarrito = document.getElementById("chango")
const botonvaciar = document.getElementById("vaciar")

let carrito = []


document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarcarrito()
    }
})




fetch('../data.json')
     .then ((res) => res.json() )
     .then ((data) => {

        data.forEach((album) => {
            const div = document.createElement('div')

            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${album.img}" class="card-img-top"  alt="awakening">
            <div class="card-body">
              <p class="card-text">${album.titulo}<br>${album.fecha}</p>
              
            </div> 
            <button href="#" class="btn btn-primary" id="agregar${album.id}" onclick="return false" id="botoncito">BUY</button>
          </div> 
          
              
            `

            contenedor.appendChild(div)
            const boton = document.getElementById(`agregar${album.id}`)
            boton.addEventListener("click", () => {
                agregarcarrito(album.id)
            })
        }
        )
     })

const agregarcarrito = (datId) => fetch('../data.json')

.then((res) => res.json()
.then ((data) =>{
    const item = data.find((albu) => albu.id === datId)
    carrito.push(item)
    actualizarcarrito()
    Toastify({
        text: "Added Album",
        className: "info",
        style: {
          background: "grey",
        }
      }).showToast();

} ))

const actualizarcarrito = () => {
    contenedorcarrito.innerHTML = ""

    carrito.forEach((album) => {
        const li = document.createElement('div')
        
        li.innerHTML =   `
        <div class="card" "animate__animated animate__flash" style="width: 10rem;">
        <img src="${album.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${album.titulo}</h5>
          <p class="card-text">${album.fecha}</p>
          <button  onclick="eliminardelcarrito(${album.id})" > <i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
   
        `
        contenedorcarrito.appendChild(li)
        localStorage.setItem("carrito" , JSON.stringify(carrito))

    })
   
}


const eliminardelcarrito =  (datId) =>  {
    
    const item = carrito.find((data) => data.id === datId)

    const indice= carrito.indexOf(item)

    carrito.splice(indice, 1)
    
    actualizarcarrito()
    
    
    Toastify({
        text: "Delete Album",
        className: "info",
        style: {
          background: "red",
        }
      }).showToast();

    
}

botonvaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarcarrito()
    Toastify({
        text: "You have successfully emptied",
        className: "info",
        style: {
          background: "grey",
        }
      }).showToast();
    
   
  })


