var formQuestao1 = document.getElementById("form1");
var formQuestao2 = document.getElementById("form2");

// Marco 1 - Microprojeto B
// Ref:
// [1] https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLFormElement/submit_event
function mostrarAlertaEventoClick(event) {
  var elementoDoEventoClick = event.path[0];

  if (elementoDoEventoClick.type == "radio") {
    alert(elementoDoEventoClick.labels[0].innerText);
  }
}

formQuestao1.addEventListener("click", mostrarAlertaEventoClick);
formQuestao2.addEventListener("click", mostrarAlertaEventoClick);

// Marco 1 - Microprojeto C
// Ref:
// [1] https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
function mostrarAlertaEventoSubmit(event) {
  var formularioDoEventoSubmit = event.path[0];
  var listaElementosFormulario = formularioDoEventoSubmit.elements;

  for (i = 0; i < listaElementosFormulario.length; i++) {
    if (
      listaElementosFormulario[i].type == "radio" &&
      listaElementosFormulario[i].checked
    ) {
      alert(
        `radio button selecionado : ${listaElementosFormulario[i].labels[0].innerText}`
      );
    }
  }
  event.preventDefault();
  // isso impede que as opões dos formulários sejam limpas após evento submit ocorrer
  // Ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault
}

formQuestao1.addEventListener("submit", mostrarAlertaEventoSubmit);
formQuestao2.addEventListener("submit", mostrarAlertaEventoSubmit);
