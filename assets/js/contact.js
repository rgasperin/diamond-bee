$(document).ready(function () {
  $("#submitButton").click(function () {
    // Reset previous errors
    $(".error").text("");

    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();

    var isValid = true;

    if (name.trim() === "") {
      $.notify("Nome é obrigatório", {
        position: "top right",
        className: "error",
        autoHideDelay: 2000,
        gap: 10,
      });
      isValid = false;
      return;
    }

    if (email.trim() === "") {
      $.notify("E-mail é obrigatório", {
        position: "top right",
        className: "error",
        autoHideDelay: 2000,
        gap: 10,
      });
      isValid = false;
      return;
    } else if (!isValidEmail(email)) {
      $.notify("E-mail inválido", {
        position: "top right",
        className: "error",
        autoHideDelay: 2000,
        gap: 10,
      });
      isValid = false;
      return;
    }

    if (subject.trim() === "") {
      $.notify("Assunto é obrigatório", {
        position: "top right",
        className: "error",
        autoHideDelay: 2000,
        gap: 10,
      });
      isValid = false;
      return;
    }

    if (message.trim() === "") {
      $.notify("Mensagem é obrigatória", {
        position: "top right",
        className: "error",
        autoHideDelay: 2000,
        gap: 10,
      });
      isValid = false;
      return;
    }

    if (isValid) {
      $(".loading").show();
      // Simular o envio do formulário (aqui você pode adicionar a lógica de envio real)
      setTimeout(function () {
        // Ocultar o carregamento
        $(".loading").hide();
        // Exibir a mensagem de sucesso
        $(".sent-message").show();
        // Limpar os campos
        clearFields();
        // Ocultar a mensagem após 5 segundos
        setTimeout(function () {
          $(".sent-message").hide();
        }, 5000);
      }, 2000); // Simula um atraso de 2 segundos antes de "enviar" com sucesso
    }
  });
});

function isValidEmail(email) {
  // Expressão regular simples para verificar se o email é válido.
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function clearFields() {
  // Limpa os valores dos campos
  $("#name").val("");
  $("#email").val("");
  $("#subject").val("");
  $("#message").val("");
}

