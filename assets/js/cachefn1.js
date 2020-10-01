(function($) {
  function uriToJSON(urijson){ return JSON.parse(decodeURIComponent(urijson)); }
  function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sParameterName = sPageURL.split('=');
    if (sParameterName[0] == sParam) {
      alert(sParameterName[1]);
    }
  }
  $(function() {
    GetURLParameter("res");
    window.location.replace("https://www.indiskaboxen.se/thanks.html");
  });
})(jQuery);
