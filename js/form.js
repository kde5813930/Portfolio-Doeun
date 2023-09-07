function checkNumber(target) {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}


emailjs.init("AA0DvAhqQGDKVXKZN");

const contactForm = document.querySelector(".field-inner form");
const contactBtn = document.querySelector(".contact button");

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const nameVal = document.querySelector("input[name=name]").value;
    const emailVal = document.querySelector("input[name=email]").value;
    const phoneVal = document.querySelector("input[name=phone]").value;
    const messageVal = document.querySelector("textarea[name=message]").value;

    const templateParams = {
        name:nameVal,
        email:emailVal,
        phone:phoneVal,
        message:messageVal
    }

    console.log(templateParams)

    emailjs.send('service_1v0nrsr', 'template_r4fflt6', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
        });
});
