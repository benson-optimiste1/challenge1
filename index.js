function celsiusToFarenheit(event){
    event.preventDefault()
    const farenheit = event.target.farenheit.value
    const celsius = 5 / 9 * (farenheit-32)
    const h2 = document.querySelector('h2')
    h2.innerText = farenheit + " °F is  " + celsius + " °C"
}

const form = document.querySelector('form')
form.addEventListener('submit', celsiusToFarenheit )