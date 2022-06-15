// Função -> Marco 1 - microprojeto B

function mostrarAlertaQ1() {

    if (ci1A.checked) {
        alert(cq1A.innerText);
    } else if (ci1B.checked) {
        alert(cq1B.innerText);
    } else {
        alert(cq1C.innerText);
    }
}

function mostrarAlertaQ2() {
    if (ci2A.checked) {
        alert(cq2A.innerText);
    } else if (ci2B.checked) {
        alert(cq2B.innerText);
    } else {
        alert(cq2C.innerText);
    }
}

// Função -> Marco 1 - microprojeto C

function resultadoQ1() {
    if (ci1A.checked) {
        alert("radio button selecionado: " + cq1A.innerText);
    } else if (ci1B.checked) {
        alert("radio button selecionado: " + cq1B.innerText);
    } else {
        alert("radio button selecionado: " + cq1C.innerText);
    }
}

function resultadoQ2() {
    if (ci2A.checked) {
        alert("radio button selecionado: " + cq2A.innerText);
    } else if (ci2B.checked) {
        alert("radio button selecionado: " + cq2B.innerText);
    } else {
        alert("radio button selecionado: " + cq2C.innerText);
    }
}