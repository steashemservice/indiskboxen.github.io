(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('email')) {
      var addr = urlParams.get('email');
    }
    alert(addr);
    if (urlParams.has('order')) {
      var order = urlParams.get('order');
    }
    alert(order);
    if (urlParams.has('email')) {
      var total = urlParams.get('total');
    }
    alert(total);
  });
})(jQuery);
