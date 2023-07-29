/*
let navbar = document.querySelector('.form');
document.querySelector('#formSelectService1').onclick = () =>{
    formTime.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function calcularPresupuesto(){
    monitorValue = parseInt(document.getElementById("monitor").value);
    procesadorValue = parseInt(document.getElementById("procesador").value);
    discoDuroValue = parseInt(document.getElementById("disco-duro").value);

    presupuestoTotal = monitorValue + procesadorValue + discoDuroValue;
    presupuestoElement = document.getElementById("presu");
    presupuestoElement.textContent = "Presupuesto: $" + presupuestoTotal;
}
*/

function selectService(){
    if(form1.serviceOption[0].checked){
        console.log(0);
    }
    if(form1.serviceOption[1].checked){
        console.log(1);
    }
    if(form1.serviceOption[2].checked){
        console.log(2);
    }
}