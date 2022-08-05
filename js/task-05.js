let nameInput = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");

nameInput.oninput = function () {
    nameInput.value === ''
        ? nameOutput.innerHTML = 'Anonymous'
        : nameOutput.innerHTML = nameInput.value;
}

