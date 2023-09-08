function checkNumber(target) {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}


emailjs.init("AA0DvAhqQGDKVXKZN");

const contactBtn = document.querySelector(".contact button");

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let nameVal = document.querySelector("input[name=name]").value;
    let emailVal = document.querySelector("input[name=email]").value;
    let phoneVal = document.querySelector("input[name=phone]").value;
    let messageVal = document.querySelector("textarea[name=message]").value;

    const templateParams = {
        name:nameVal,
        email:emailVal,
        phone:phoneVal,
        message:messageVal
    }

    emailjs.send('service_1v0nrsr', 'template_r4fflt6', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
    });

});

