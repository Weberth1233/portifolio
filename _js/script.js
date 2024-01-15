document.addEventListener('DOMContentLoaded', function () {
    const text = "Olá, eu sou o Weberth Erik ;"; // Substitua pelo texto desejado
    const typingText = document.getElementById('typing-text');

    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 1000);

    function typeWriter(text, i) {
      if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, i);
        }, 120); // Ajuste o valor do timeout para controlar a velocidade da digitação
      }
    }
  
    typeWriter(text, 0);
  });
