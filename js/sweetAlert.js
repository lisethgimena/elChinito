function enviar(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Reservado',
        text: "Sus datos fueron enviados con éxito. Gracias por su preferencia :)",
        icon: 'success',
        
      })      
}

document.querySelector('#boton1').addEventListener('click', function(){
  let nombre = document.querySelector('#nombre').value;
  let telefono = document.querySelector('#telefono').value;
  let dni = document.querySelector('#dni').value;
  let servicio = document.querySelector('#servicio').value;
  let horario = document.querySelector('#horario').value;
  let pago = document.querySelector('#pago').value;

<<<<<<< HEAD
  let url = "https://wa.me/51912764864?text=Buenas, quisiera hacer una reservación a: *_Nombre_*: " +nombre +" Teléfono: "
  +telefono +" DNI: " +dni +" Servicio: " +servicio +" Horario: " 
  +horario +" Método de pago:" +pago;
=======
  let url = "https://wa.me/51912764864?text=*Buenas, quisiera hacer una reservación a:_* %0A *Nombre*:" +nombre + "%0A*Teléfono:* "
  +telefono +"%0A*DNI:* " +dni +"%0A*Servicio:* " +servicio +"%0A*Horario:* " 
  +horario +"%0A*Método de pago:*" +pago;
>>>>>>> 6d873f5dd8948be5f56a40ac27265f97e96f78a6
  window.open(url)
})