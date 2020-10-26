(function($) {
  $(function() {
    const sPageURL = window.location.search;
    const urlParams = new URLSearchParams(sPageURL);
    var subs = 'off';
    if (urlParams.has('email')) {
      var addr = urlParams.get('email');
      $("input[name='email']").val(addr);
    }
    if (urlParams.has('mobil')) {
      var mobil = urlParams.get('mobil');
      $("input[name='phone']").val(mobil);
    }
    if (urlParams.has('amount')) {
      var amount = urlParams.get('amount');
    }
    if (urlParams.has('s')) {
      $("#subscription").prop("checked", true);
    }
    if (urlParams.has('pt')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('pt'));
    }
    if (urlParams.has('pp')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('pp'));
    }
    if (urlParams.has('pd')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('pd'));
    }
    if (urlParams.has('vk')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('vk'));
    }
    if (urlParams.has('kk')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('kk'));
    }
    if (urlParams.has('bc')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('bc'));
    }
    if (urlParams.has('pc')) {
      $("input[name='Ennai Kathirikai Kuzhambu']").val(urlParams.get('pc'));
    }
    var slink = swishgen(amount,mobil,addr);
    $('#swish-uri').text(slink);
    $('.email').text(addr);
    $('.orderid').text(mobil);
    $('.ordertotal').text(amount);
  });
  function pickclick() {
    $("#paydiv").show();
    $("#contact-form").hide();
    var subflow = function(event){
      event.preventDefault();
      $(event.target).hide();
      $("#paydiv,.sblock").hide();
      $("#contact-form,.cblock").show();
      $( ".quantity" ).trigger( "change" );
    }
    $("#schoice").on("click", subflow);
  }
  document.addEventListener("DOMContentLoaded", pickclick, false);
})(jQuery);
