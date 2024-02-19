var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Alternar classe "active" para o botão de accordion clicado
    this.classList.toggle("active");
    
    // Obter o painel seguinte
    var panel = this.nextElementSibling;

    // Se o painel estiver aberto, fecha; caso contrário, abre
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}