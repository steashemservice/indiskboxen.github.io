(function($) {
  // get all data in form and return object
  function getFormData(form) {
    var elements = form.elements;
    var d = new Date();
    elements['order'] = {};
    elements['order'].name='order';
    elements['order'].value=d.getFullYear().toString().slice(-2)+('0'+(d.getMonth()+1)).slice(-2)+('0'+d.getDate()).slice(-2)+('0'+d.getHours()).slice(-2)+('0'+d.getMinutes()).slice(-2)+('0'+d.getSeconds()).slice(-2);
    var trap,honeypot;
    var fields = Object.keys(elements).filter(function(k) {
      if (elements[k].name === "_prev") {
        honeypot = elements[k].value;
        return false;
      } else if (elements[k].name === "_next") {
        trap = elements[k].value;
        return false;
      }
      return true;
    }).map(function(k) {
      if(elements[k].name !== undefined) {
        return elements[k].name;
      // special case for Edge's html collection
      }else if(elements[k].length > 0){
        return elements[k].item(0).name;
      }
    }).filter(function(item, pos, self) {
      return self.indexOf(item) == pos && item;
    });

    var formData = {};
    fields.forEach(function(name){
      var element = elements[name];
      // singular form elements just have one value
      formData[name] = element.value;
      // when our element has multiple items, get their values
      if (element.length) {
        var data = [];
        for (var i = 0; i < element.length; i++) {
          var item = element.item(i);
          if (item.checked || item.selected) {
            data.push(item.value);
          }
        }
        formData[name] = data.join(', ');
      }
    });

    // add form-specific values into the data
    formData.formDataNameOrder = JSON.stringify(fields);
    formData.formGoogleSheetName = form.dataset.sheet || "order"; // default sheet name
    formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default
    return {data: formData, honeypot: honeypot, trap:trap};
  }

  function handleFormSubmit(event) {  // handles form submit without any jquery
    event.preventDefault();           // we are submitting via xhr below
    var sum = 0;
    var tot = parseInt($('#productsel').val());
    $(".quantity").each(function(){
        sum += +$(this).val();
    });
    if (sum !== tot) {
      alert(sum+" av "+tot+" boxar valda! Öka eller Minska antalet på någon av rätterna..");
      return false;
    }
    var form = event.target,
        form_e = $( "#contact-form" ),
        notice = form_e.find('#notice');
    var formData = getFormData(form);
    if (formData.honeypot || formData.trap !== 'thanks') {
      return false;
    }
    var data = formData.data;
    // url encode form data for sending as post data
    var encoded = Object.keys(data).map(function(k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
    }).join('&');
    disableAllButtons(form);
    var url = 'https://script.google.com/macros/s/AKfycbzvfPO-o__LUgpp06Q4YkqAb27w4rAizo6DiUP48W20-HE_RyY/exec';
    $.ajax({
      url: url,
      data: encoded,
      type: "POST",
      dataType: "json",
      statusCode: {
        404: function() {
          form_e.fadeOut(function() {
            form_e.html('<div class="field"><h4>' + notice.data('error') + '</h4></div>').fadeIn();
          });
        },
        500: function() {
          form_e.fadeOut(function() {
            form_e.html('<div class="field"><h4>' + notice.data('error') + '</h4></div>').fadeIn();
          });
        },
        200: function() {
          form_e.fadeOut(function() {
            form_e.html('<div class="field"><h4>' + form_e.data('success') + '</h4></div>').fadeIn();
          });
        }
      }
    });
  }
  
  function loaded() {
    // bind to the submit event of our form
    var forms = document.querySelectorAll("form.contact-form");
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener("submit", handleFormSubmit, false);
    }
  };
  document.addEventListener("DOMContentLoaded", loaded, false);

  function disableAllButtons(form) {
    var buttons = form.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
  }
})(jQuery);
(function($) {
  $(".inc").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    var newVal = parseFloat(oldValue) + 1;
    $button.parent().find("input").val(newVal);
  });
  $(".dec").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
    }
    $button.parent().find("input").val(newVal);
  });
})(jQuery); 
(function($) {
  function addcollapse() {
    // bind to the submit event of our form
    var colls = document.querySelectorAll("label.collapsible");
    for (var i = 0; i < colls.length; i++) {
      colls[i].addEventListener("click", function() {
        $(this).siblings('.cmsg').remove();
        var content = $(this).parent().siblings('.cblock');
        var pcode = $(this).siblings('#postcode').val();
        if(pcode.length == 5 && pcode == "17464") {
          $(this).append("<label class='cmsg' >Ja, vi levererar i ditt område!</label>");
          content.css('display', 'block');
        } else {
          $(this).append("<label class='cmsg' >Vi levererar tyvärr inte till denna ort ännu.</label>");
          content.css('display', 'none');
        }
      });
    }
  };
  document.addEventListener("DOMContentLoaded", addcollapse, false);
})(jQuery);
(function($) {
  function adddelivery() {
    $("#delivery").datepicker({ 
        autoSize: true,         // automatically resize the input field 
        altFormat: 'yy-mm-dd',  // Date Format used
        dateFormat: "DD, d MM yy",
        firstDay: 1,
        minDate: '+4D',
        maxDate: '+25D',
        beforeShowDay: function(date) {
          return [date.getDay() === 0,''];
        }
    });    
  };
  document.addEventListener("DOMContentLoaded", adddelivery, false);
})(jQuery);
