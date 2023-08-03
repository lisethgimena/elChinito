function enviar(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Desea confirmar su reserva?',
        text: "Verifique bien sus datos",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, resérvalo!',
        cancelButtonText: 'No, cancélalo!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Reservado',
            'Sus datos fueron enviados con éxito. Gracias por su preferencia :)',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El envío fue cancelado con éxito',
            'error'
          )
        }
      })
}

document.querySelector('result.isConfirmed').addEventListener('click', function(){
  let nombre = document.querySelector('#nombre').value;
})