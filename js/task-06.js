const inputForm = document.querySelector("#validation-input");

inputForm.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length == inputForm.dataset.length) {
        inputForm.classList.add("valid")
        inputForm.classList.remove("invalid")
    } else if (event.currentTarget.value.length == "") {
        inputForm.classList.remove("valid")
        inputForm.classList.remove("invalid")
    } else {
        inputForm.classList.remove("valid") 
        inputForm.classList.add("invalid")
    }
})