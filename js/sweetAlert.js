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

  let url = "https://wa.me/51912764864?text=*_Buenas, quisiera hacer una reservación a:_* %0A *Nombre*: %0A" +nombre +" Teléfono: "
  +telefono +" DNI: " +dni +" Servicio: " +servicio +" Horario: " 
  +horario +" Método de pago:" +pago;
  window.open(url)
})