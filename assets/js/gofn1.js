(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('email')) {
      var addr = urlParams.get('email');
    }
    if (urlParams.has('mobil')) {
      var mobil = urlParams.get('mobil');
    }
    if (urlParams.has('amount')) {
      var amount = urlParams.get('amount');
    }
    var slink = swishgen(amount,mobil,addr);
    $('#swish-uri').text(slink);
    $('.email').text(addr);
    $('.mobil').text(mobil);
    $('.ordertotal').text(amount);
  });
  function pickclick() {
    $("#paydiv").show();
    $("#contact-form").hide();
    var subflow = function(event){
      $("#paydiv").hide();
      $(".sblock").hide();
      $("#contact-form").show();
    }
    $("#schoice").on("click", subflow).hide();
  }
  document.addEventListener("DOMContentLoaded", pickclick, false);
})(jQuery);
