let mensaje = document.getElementById('exampleFormControlTextarea1')
const texto = document.getElementById('texto')
const enviar = document.getElementById('boton23')

function larga () {

    if (mensaje.value.length < 6)
    
     {
        texto.innerText = "Very short message, please elaborate, do not make me read meaningless!"
    }
    else {
        texto.innerText = "Thank You"
    }
  }


  mensaje.addEventListener("input", larga)


  enviar.addEventListener("click" , ()  => {

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Sent successfully',
    showConfirmButton: false,
    timer: 1500
  })
  }
  )
