// Configure abaixo o e-mail oficial da empresa antes de publicar.
const EMAIL_DESTINO = "alinetrabalho.2008@gmail.com";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  const aberto = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  if (EMAIL_DESTINO === "alinetrabalho.2008@gmail.com") {
    document.getElementById("formNote").textContent =
      "Antes de publicar, abra script.js e substitua SEU_EMAIL_AQUI pelo e-mail oficial da Duline. Depois, o formulário abrirá uma mensagem pronta no aplicativo de e-mail.";
    return;
  }

  const dados = new FormData(form);
  const assunto = encodeURIComponent(`[Site Duline] ${dados.get("subject")}`);
  const corpo = encodeURIComponent(
    `Nome: ${dados.get("name")}\\nE-mail: ${dados.get("email")}\\n\\nMensagem:\\n${dados.get("message")}`
  );
  window.location.href = `mailto:${EMAIL_DESTINO}?subject=${assunto}&body=${corpo}`;
});
