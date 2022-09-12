let mensaje = document.getElementById('exampleFormControlTextarea1')
const texto = document.getElementById('texto')


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

  const btn = document.getElementById('botoncito');

  document.getElementById('form')
   .addEventListener('submit', function(event) {
     event.preventDefault();
  
     btn.innerText = 'Sending...';
  
     const serviceID = 'default_service';
     const templateID = 'template_ddppmdc';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.innerText = 'Send Email, thanks';
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sent successfully',
          showConfirmButton: false,
          timer: 1500
        });
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });