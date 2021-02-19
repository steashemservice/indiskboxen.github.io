(function($) {
  $(function() {
    const sPageURL = window.location.search;
    //window.history.replaceState(null, null, window.location.pathname);
    const urlParams = new URLSearchParams(sPageURL);
    if (urlParams.has('n')) {
      var name = urlParams.get('n');
      $("input[name='firstname']").val(name);
    } 
    //else {
    //  window.location.replace("https://www.indiskaboxen.se/#order");
    //}
    if (urlParams.has('l')) {
      var lname = urlParams.get('l');
      $("input[name='lastname']").val(lname);
    }
    if (urlParams.has('a')) {
      var addr = urlParams.get('a');
      $("input[name='address']").val(addr);
    }
    if (urlParams.has('i')) {
      var pcode = urlParams.get('i');
      $("input[name='postcode']").val(pcode);    
    }
    if (urlParams.has('c')) {
      var city = urlParams.get('c');
      $("input[name='city']").val(city);
    }
    if (urlParams.has('d')) {
      var code = urlParams.get('d');
      $("input[name='doorcode']").val(code);
    }
    if (urlParams.has('o')) {
      var co = urlParams.get('o');
      $("input[name='co']").val(co);
    }
    if (urlParams.has('f')) {
      var floor = urlParams.get('f');
      $("input[name='floor']").val(floor);
    }
    if (urlParams.has('e')) {
      var eaddr = urlParams.get('e');
      $("input[name='email']").val(eaddr);
    }
    if (urlParams.has('p')) {
      var mobil = urlParams.get('p');
      $("input[name='phone']").val(mobil);
    }
    if (urlParams.has('t')) {
      var amount = urlParams.get('t');
    }
    if (urlParams.has('s')) {
      if (urlParams.get('s') === 'on')
      $("#subscription").prop("checked", true);
      $("#contact-form .spblock").hide();
    }
    if (urlParams.has('ch')) {
      $("input[name='Chappatilåda']").val(urlParams.get('ch'));
    }
    if (urlParams.has('pt')) {
      $("input[name='Paneer Tikka Masala Matlåda']").val(urlParams.get('pt'));
    }
    if (urlParams.has('pp')) {
      $("input[name='Palak Paneer Matlåda']").val(urlParams.get('pp'));
    }
    if (urlParams.has('pd')) {
      $("input[name='Palak Dal Matlåda']").val(urlParams.get('pd'));
    }
    if (urlParams.has('vk')) {
      $("input[name='Vegetable Korma Matlåda']").val(urlParams.get('vk'));
    }
    if (urlParams.has('kk')) {
      $("input[name='Ennai Kathirikai Kuzhambu Matlåda']").val(urlParams.get('kk'));
    }
    if (urlParams.has('bc')) {
      $("input[name='Butter Chicken Matlåda']").val(urlParams.get('bc'));
    }
    if (urlParams.has('pc')) {
      $("input[name='Chicken Madras Matlåda']").val(urlParams.get('pc'));
    }
    if (urlParams.has('ptc')) {
      $("input[name='Paneer Tikka Masala Matlåda']").val(urlParams.get('ptc'));
    }
    if (urlParams.has('ppc')) {
      $("input[name='Palak Paneer Currylåda']").val(urlParams.get('ppc'));
    }
    if (urlParams.has('pdc')) {
      $("input[name='Palak Dal Currylåda']").val(urlParams.get('pdc'));
    }
    if (urlParams.has('vkc')) {
      $("input[name='Vegetable Korma Currylåda']").val(urlParams.get('vkc'));
    }
    if (urlParams.has('kkc')) {
      $("input[name='Ennai Kathirikai Kuzhambu Currylåda']").val(urlParams.get('kkc'));
    }
    if (urlParams.has('bcc')) {
      $("input[name='Butter Chicken Currylåda']").val(urlParams.get('bcc'));
    }
    if (urlParams.has('pcc')) {
      $("input[name='Chicken Madras Currylåda']").val(urlParams.get('pcc'));
    }
    if (urlParams.has('cm')) {
      $("input[name='Chana Masala Matlåda']").val(urlParams.get('cm'));
    }
    if (urlParams.has('cmc')) {
      $("input[name='Chana Masala Currylåda']").val(urlParams.get('cmc'));
    }
    if (urlParams.has('sr')) {
      $("input[name='Sambar Rice Matlåda']").val(urlParams.get('sr'));
    }
    if (urlParams.has('src')) {
      $("input[name='Sambar Currylåda']").val(urlParams.get('src'));
    }
    $("#terms").prop("checked", true);
    var slink = swishgen(amount,mobil,eaddr);
    $('#swish-uri').text(slink);
    $('.orderid').text(mobil);
    $('.ordertotal').text(amount);
  });
  function pickclick() {
    $("#contact-form .sblock").hide();
    $("#contact-form .spblock").show();
    $("#contact-form .cblock").show();
    $("#contact-form .cblock h3 .msg").html("Ändra din order (dina tidigare val är redan ifylld)");
    $( ".quantity" ).trigger( "change" );
  }
  document.addEventListener("DOMContentLoaded", pickclick, false);
})(jQuery);
