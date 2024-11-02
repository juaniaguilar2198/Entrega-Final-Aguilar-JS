let totalPriceSpan = document.getElementById("total-price")
totalPriceSpan.innerText = "$" + localStorage.getItem("totalPrice")

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("checkout-form")
    form.addEventListener("submit", function (event) {
        event.preventDefault()
        const name = document.getElementById("name")
        const email = document.getElementById("email")
        const phone = document.getElementById("phone")
        const address = document.getElementById("address")
        const city = document.getElementById("city")
        const zip = document.getElementById("zip")
        const cardNumber = document.getElementById("card-number")
        const expiry = document.getElementById("expiry")
        const cvv = document.getElementById("cvv")
        Swal.fire({
            title: "Confirma que los datos que ingresaste sean los correctos?",
            text: "Nombre: " + name.value + "\n" +
                "Email: " + email.value + "\n" +
                "Telefono: " + phone.value + "\n" +
                "Direccion: " + address.value + "\n" +
                "Ciudad: " + city.value + "\n" +
                "Codigo Posta: " + zip.value + "\n" +
                "Numero de Tarjeta: " + cardNumber.value + "\n" +
                "Expiracion: " + expiry.value + "\n" +
                "CVV: " + cvv.value + "\n",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar",
            cancelButtonText: "Rechazar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Gracias por su compra",
                    text: "Su compra ah sido procesada correctamente.",
                    icon: "success"
                });
            }
        });
    })
})

