function enviar() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
<<<<<<< HEAD
        buttonsStyling: false,
    });

    swalWithBootstrapButtons
        .fire({
            title: "¿Desea confirmar su reserva?",
            text: "Verifique bien sus datos",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, resérvalo!",
            cancelButtonText: "No, cancélalo!",
            reverseButtons: true,
        })
        .then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    "Reservado",
                    "Sus datos fueron enviados con éxito. Gracias por su preferencia :)",
                    "success"
                );
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    "Cancelado",
                    "El envío fue cancelado con éxito",
                    "error"
                );
            }
        });
}
=======
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

  let url = "https://wa.me/51912764864?text=Buenas, quisiera hacer una reservación a: *_Nombre_*: " +nombre +" Teléfono: "
  +telefono +" DNI: " +dni +" Servicio: " +servicio +" Horario: " 
  +horario +" Método de pago:" +pago;
  window.open(url)
})
>>>>>>> 0962a445e628945ab0c7ae28efd9fc25b65f688a
