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
})(jQuery);
