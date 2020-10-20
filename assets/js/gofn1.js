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
    //elements['swish'].value="swish://payment?data="+preq(elements['total'].value,elements['order'].value)+"&callbackurl="+encodeURIComponent("https://www.indiskaboxen.se/postcall?email="+elements['email'].value+"&order="+elements['order'].value+"&total="+elements['total'].value)+"&callbackresultparameter=res";
    $('#swish-uri').text(slink);
  });
})(jQuery);
