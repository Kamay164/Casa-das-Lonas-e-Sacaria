/* Casa das Lonas & Sacaria — interações (JavaScript puro, sem dependências) */
(function () {
  "use strict";

  /* ---------- 1. Mapa: só carrega quando a pessoa toca no botão ---------- */
  var botaoMapa = document.getElementById("botao-mapa");
  var areaMapa = document.getElementById("area-mapa");

  if (botaoMapa && areaMapa) {
    var MAPA_URL =
      "https://www.google.com/maps?q=" +
      encodeURIComponent("R. Padre Libério, 902, Pará de Minas, MG") +
      "&output=embed";

    botaoMapa.addEventListener("click", function () {
      var aberto = botaoMapa.getAttribute("aria-expanded") === "true";

      if (aberto) {
        areaMapa.hidden = true;
        botaoMapa.setAttribute("aria-expanded", "false");
        botaoMapa.textContent = "Mostrar mapa aqui";
        return;
      }

      if (!areaMapa.firstChild) {
        var quadro = document.createElement("iframe");
        quadro.src = MAPA_URL;
        quadro.title = "Mapa com a localização da Casa das Lonas & Sacaria";
        quadro.loading = "lazy";
        quadro.referrerPolicy = "no-referrer-when-downgrade";
        quadro.setAttribute("allowfullscreen", "");
        areaMapa.appendChild(quadro);
      }
      areaMapa.hidden = false;
      botaoMapa.setAttribute("aria-expanded", "true");
      botaoMapa.textContent = "Esconder mapa";
    });
  }

  /* ---------- 2. Aviso "Aberto agora / Fechado" (horário de Brasília) ---------- */
  // Segunda (1) a sábado (6), das 9h às 18h. Domingo (0) fechado.
  var ABRE = 9;
  var FECHA = 18;
  
  function agoraEmSaoPaulo(data) {
    var partes = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Sao_Paulo",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hourCycle: "h23"
    }).formatToParts(data);
    var mapa = {};
    for (var i = 0; i < partes.length; i++) mapa[partes[i].type] = partes[i].value;
    var sem = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[mapa.weekday];
    return { dia: sem, minutos: parseInt(mapa.hour, 10) * 60 + parseInt(mapa.minute, 10) };
  }

  function proximaAbertura(dia) {
    // Sábado à noite: a loja só abre de novo na segunda. Nos demais dias, amanhã.
    return dia === 6 ? "segunda" : "amanhã";
  }

  function statusDaLoja(data) {
    var t = agoraEmSaoPaulo(data);
    var util = t.dia >= 1 && t.dia <= 6;
    var m = t.minutos;

    if (util && m >= ABRE * 60 && m < FECHA * 60) {
      return { aberto: true, texto: "Aberto agora · fecha às " + FECHA + "h" };
    }
    if (util && m < ABRE * 60) {
      return { aberto: false, texto: "Fechado agora · abre hoje às " + ABRE + "h" };
    }
    return { aberto: false, texto: "Fechado agora · abre " + proximaAbertura(t.dia) + " às " + ABRE + "h" };
  }

  function atualizarStatus() {
    var elementos = document.querySelectorAll(".js-status");
    if (!elementos.length || !window.Intl || !Intl.DateTimeFormat.prototype.formatToParts) return;
    var s;
    try {
      s = statusDaLoja(new Date());
    } catch (e) {
      return; // se o navegador não suportar, o aviso simplesmente não aparece
    }
    for (var i = 0; i < elementos.length; i++) {
      elementos[i].textContent = s.texto;
      elementos[i].className = "status js-status " + (s.aberto ? "status--aberto" : "status--fechado");
      elementos[i].hidden = false;
    }
  }

  atualizarStatus();
  setInterval(atualizarStatus, 60000);
})();
