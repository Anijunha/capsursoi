const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".modal .close");

if (btn && modal && closeBtn) {

  btn.addEventListener("click", () => {
    modal.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
}