const compartir = document.getElementById("share_btn");
const iconos = document.getElementById("icons");

compartir.addEventListener("click", () => {
  iconos.classList.add("icons__compartir-activo");
});

// document.getElementById("icons").classList.add("icons__compartir-activo"); //
