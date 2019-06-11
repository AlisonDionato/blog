var fechar_menu = document.querySelector(".fecharmenu");
$(document).on("click", function(e) {
  var fora = !fechar_menu.contains(e.target);
  if (fora) $(fechar_menu).slideDown("slow/400/fast");
});


$(fechar_menu).on("click", function(e) {
  $(this).slideUp("slow/400/fast");
});