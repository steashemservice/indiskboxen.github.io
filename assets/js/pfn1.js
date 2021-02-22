(function($) {
  var myFrame = document.getElementById('gFrame');
  const loc = window.location.search;//Get the search string of the domain
  window.history.replaceState(null, null, window.location.pathname);
  const urlParams = new URLSearchParams(loc);
  if (urlParams.has('name') && urlParams.has('email') && urlParams.has('amount') && urlParams.has('order')) {
    var frameSrc = myFrame.src.toString();
    myFrame.src = frameSrc + "?" + loc;
    var slink = swishgen(urlParams.get('amount'),urlParams.get('order'),urlParams.get('email'));
    $('#swish-uri').text(slink);
    $('.orderid').text(urlParams.get('order'));
    $('.ordertotal').text(Number(urlParams.get('amount'))/100);
  } else {
    myFrame.parentNode.removeChild(myFrame);
    window.location.replace("https://www.indiskaboxen.se/invalid");
  }
})(jQuery);
