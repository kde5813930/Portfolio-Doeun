function checkNumber(target) {
    target.value = target.value
        .replace(/[^0-9]/g, '')
        .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, "$1-$2-$3");
}

// input,textarea value 체크 함수
function checkValue(input, value){
    if (value === ""){
        input.parentNode.classList.add("parsley-error");
    } else{
        input.parentNode.classList.remove("parsley-error");
    }
}

emailjs.init("AA0DvAhqQGDKVXKZN");

const contactBtn = document.querySelector(".contact button");

contactBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let name = document.querySelector("input[name=name]");
    let email = document.querySelector("input[name=email]");
    let phone = document.querySelector("input[name=phone]");
    let message = document.querySelector("textarea[name=message]");

    let nameVal = name.value;
    let emailVal = email.value;
    let phoneVal = phone.value;
    let messageVal = message.value;

    checkValue(name, nameVal);
    checkValue(email, emailVal);
    checkValue(message, messageVal);

    if (nameVal !== "" && emailVal !== "" && messageVal !== ""){
        const templateParams = {
            name:nameVal,
            email:emailVal,
            phone:phoneVal,
            message:messageVal
    }

        console.log(templateParams);

        emailjs.send('service_1v0nrsr', 'template_r4fflt6', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
        });
    }

});


//input, textarea keydown 시 value 체크
let $input = document.querySelectorAll(".field-box input");
let $textArea = document.querySelector(".field-box textarea");

$input.forEach( (txt) => {
    txt.addEventListener("keydown", (e) => {
        let target = e.target;
        let targetValue = target.value;
        let valueLength = targetValue.length

         if (valueLength === 0){
            target.parentNode.classList.remove("parsley-error");
        } else{
            target.parentNode.classList.remove("parsley-error");
        }

        if (target.classList.contains("phone-num")){
            return false;
        }

    });
});

$textArea.addEventListener("keydown", (e) => {
   let target = e.target;
   let targetValue = target.value;
    let valueLength = targetValue.length

    if (valueLength === 0){
        target.parentNode.classList.remove("parsley-error");
    } else{
        target.parentNode.classList.remove("parsley-error");
    }

});

