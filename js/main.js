(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector("[data-workshop-form]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = form.querySelector(".form-success");
      if (note) note.style.display = "block";
      form.reset();
    });
  }
})();
