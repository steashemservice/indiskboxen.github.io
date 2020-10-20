(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('email')) {
      var addr = urlParams.get('email');
    }
    if (urlParams.has('order')) {
      var order = urlParams.get('order');
    }
    if (urlParams.has('amount')) {
      var amount = urlParams.get('amount');
    }
    var slink = swishgen(amount,order,addr);
    $('#swish-uri').text(slink);
    $('.orderid').text(order);
    $('.ordertotal').text(amount);
  });
})(jQuery);
