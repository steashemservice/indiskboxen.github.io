(function($) {
  function jsonToURI(json){ return encodeURIComponent(JSON.stringify(json)); }
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  function goToUri(uri) {
    $('#swish-qr').show();
    document.location = uri;
  }
  var swishFunc = function(event){
    var $button = $(this);
    var total = $('.ordertotal').eq(0).text();
    var order = $('.orderid').eq(0).text();
    var datamsg = {"amount":{"value":'"'+eval(total)+'"',"editable":false},"message":{"value":'"'+eval(order)+'"',"editable":false},"payee":{"value":"123 342 54 44","editable":false},"version":1};
    var dataenc = jsonToURI(datamsg);
    var req = "swish://payment?data="+dataenc;
    alert(req);
    //$('.orderid').text("TEST");
    //$('.ordertotal').text("1000");
    goToUri(req);
  }
  $(".swish-link").on("click", swishFunc);
  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    if (sParameterName[0] == sParam) {
      alert(sParameterName[1]);
    }
  }
})(jQuery);
