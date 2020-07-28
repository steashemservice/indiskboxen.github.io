/*
	Forty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)',
		xxsmall: '(max-width: 360px)'
	});

	/**
	 * Applies parallax scrolling to an element's background image.
	 * @return {jQuery} jQuery object.
	 */
	$.fn._parallax = (skel.vars.browser == 'ie' || skel.vars.browser == 'edge' || skel.vars.mobile) ? function() { return $(this) } : function(intensity) {

		var	$window = $(window),
			$this = $(this);

		if (this.length == 0 || intensity === 0)
			return $this;

		if (this.length > 1) {

			for (var i=0; i < this.length; i++)
				$(this[i])._parallax(intensity);

			return $this;

		}

		if (!intensity)
			intensity = 0.25;

		$this.each(function() {

			var $t = $(this),
				on, off;

			on = function() {

				$t.css('background-position', 'center 100%, center 100%, center 0px');

				$window
					.on('scroll._parallax', function() {

						var pos = parseInt($window.scrollTop()) - parseInt($t.position().top);

						$t.css('background-position', 'center ' + (pos * (-1 * intensity)) + 'px');

					});

			};

			off = function() {

				$t
					.css('background-position', '');

				$window
					.off('scroll._parallax');

			};

			skel.on('change', function() {

				if (skel.breakpoint('medium').active)
					(off)();
				else
					(on)();

			});

		});

		$window
			.off('load._parallax resize._parallax')
			.on('load._parallax resize._parallax', function() {
				$window.trigger('scroll');
			});

		return $(this);

	};
        
	$(function() {
		$( "#date" ).datepicker({
                    minDate: 0
                });
		var	$window = $(window),
			$body = $('body'),
			$wrapper = $('#wrapper'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load pageshow', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Clear transitioning state on unload/hide.
			$window.on('unload pagehide', function() {
				window.setTimeout(function() {
					$('.is-transitioning').removeClass('is-transitioning');
				}, 250);
			});

		// Fix: Enable IE-only tweaks.
			if (skel.vars.browser == 'ie' || skel.vars.browser == 'edge')
				$body.addClass('is-ie');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Scrolly.
			$('.scrolly').scrolly({
				offset: function() {
					return $header.height() - 2;
				}
			});

		// Tiles.
			var $tiles = $('.tiles > article');

			$tiles.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img'),
					$link = $this.find('.link'),
					x;

				// Image.

					// Set image.
						$this.css('background-image', 'url(' + $img.attr('src') + ')');

					// Set position.
						if (x = $img.data('position'))
							$image.css('background-position', x);

					// Hide original.
						$image.hide();

				// Link.
					if ($link.length > 0) {

						$x = $link.clone()
							.text('')
							.addClass('primary')
							.appendTo($this);

						$link = $link.add($x);

						$link.on('click', function(event) {

							var href = $link.attr('href');

							// Prevent default.
								event.stopPropagation();
								event.preventDefault();

							// Start transitioning.
								$this.addClass('is-transitioning');
								$wrapper.addClass('is-transitioning');

							// Redirect.
								window.setTimeout(function() {

									if ($link.attr('target') == '_blank')
										window.open(href);
									else
										location.href = href;

								}, 500);

						});

					}

			});

		// Header.
			if (skel.vars.IEVersion < 9)
				$header.removeClass('alt');

			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() {
					$window.trigger('scroll');
				});

				$window.on('load', function() {

					$banner.scrollex({
						bottom:		$header.height() + 10,
						terminate:	function() { $header.removeClass('alt'); },
						enter:		function() { $header.addClass('alt'); },
						leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
					});

					window.setTimeout(function() {
						$window.triggerHandler('scroll');
					}, 100);

				});

			}

		// Banner.
			$banner.each(function() {

				var $this = $(this),
					$image = $this.find('.image'), $img = $image.find('img');

				// Parallax.
					$this._parallax(0.275);

				// Image.
					if ($image.length > 0) {

						// Set image.
							$this.css('background-image', 'url(' + $img.attr('src') + ')');

						// Hide original.
							$image.hide();

					}

			});

		// Menu.
			var $menu = $('#menu'),
				$menuInner;

			$menu.wrapInner('<div class="inner"></div>');
			$menuInner = $menu.children('.inner');
			$menu._locked = false;

			$menu._lock = function() {

				if ($menu._locked)
					return false;

				$menu._locked = true;

				window.setTimeout(function() {
					$menu._locked = false;
				}, 350);

				return true;

			};

			$menu._show = function() {

				if ($menu._lock())
					$body.addClass('is-menu-visible');

			};

			$menu._hide = function() {

				if ($menu._lock())
					$body.removeClass('is-menu-visible');

			};

			$menu._toggle = function() {

				if ($menu._lock())
					$body.toggleClass('is-menu-visible');

			};

			$menuInner
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 250);

				});

			$menu
				.appendTo($body)
				.on('click', function(event) {

					event.stopPropagation();
					event.preventDefault();

					$body.removeClass('is-menu-visible');

				})
				.append('<a class="close" href="#menu">Close</a>');

			$body
				.on('click', 'a[href="#menu"]', function(event) {

					event.stopPropagation();
					event.preventDefault();

					// Toggle.
						$menu._toggle();

				})
				.on('click', function(event) {

					// Hide.
						$menu._hide();

				})
				.on('keydown', function(event) {

					// Hide on escape.
						if (event.keyCode == 27)
							$menu._hide();

				});

	});

})(jQuery);
//(function($) {$(document).ready(function(){var t={delay:125,overlay:$(".fb-overlay"),widget:$(".fb-widget"),button:$(".fb-button")};setTimeout(function(){$("div.fb-livechat").fadeIn()},8*t.delay),$(".ctrlq").on("click",function(e){e.preventDefault(),t.overlay.is(":visible")?(t.overlay.fadeOut(t.delay),t.widget.stop().animate({bottom:0,opacity:0},2*t.delay,function(){$(this).hide("slow"),t.button.show()})):t.button.fadeOut("medium",function(){t.widget.stop().show().animate({bottom:"10px",opacity:1},2*t.delay),t.overlay.fadeIn(t.delay)})})});})(jQuery);
(function($) {
$.noConflict();
var ot = Array();
ot['mon']='12:00 AM-11:59 PM';
ot['tue']='12:00 AM-11:59 PM';
ot['wed']='12:00 AM-11:59 PM';
ot['thu']='12:00 AM-11:59 PM';
ot['fri']='12:00 AM-11:59 PM';
ot['sat']='12:00 AM-11:59 PM';
ot['sun']='12:00 AM-11:59 PM';
var tz = '+01:00,1';
var widget_position = 'bottom_right';
var fb = 'steasservice';
var fb_email = 'support@steas.se';
var emailLink = false;
var mon = true;
var tue = true;
var wed = true;
var thu = true;
var fri = true;
var sat = true;
var sun = true;
function calculate_time_zone(ch){if(typeof ch=="undefined")ch=false;var rightNow=new Date();var jan1=new Date(rightNow.getFullYear(),0,1,0,0,0,0);var june1=new Date(rightNow.getFullYear(),6,1,0,0,0,0);var temp=jan1.toGMTString();var jan2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));temp=june1.toGMTString();var june2=new Date(temp.substring(0,temp.lastIndexOf(" ")-1));var std_time_offset=(jan1-jan2)/(1000*60*60);var daylight_time_offset=(june1-june2)/(1000*60*60);var dst;if(std_time_offset==daylight_time_offset){dst="0";}else{var hemisphere=std_time_offset-daylight_time_offset;if(hemisphere>=0)
std_time_offset=daylight_time_offset;dst="1";}
var i;var con=convert(std_time_offset)+","+dst;if(ch&&document.getElementById('timezone')){for(i=0;i<document.getElementById('timezone').options.length;i++){if(document.getElementById('timezone').options[i].value==con){document.getElementById('timezone').selectedIndex=i;break;}}}
return con;}
function linkHandler(e){var is_online=validate();if(is_online){e.preventDefault();var screenwidth=screen.width-500;window.open(jQuery(this).attr('href'),'_blank',"width=500,height=800,left="+screenwidth);}else{if(jQuery("#chk_showemaillink").is(':checked')&&jQuery("#fb_email").length>0){var fb_email=jQuery("#fb_email").val();if(fb_email!=""&&isEmail(fb_email)&&jQuery("#fb_link").hasClass("email_us")){jQuery(this).attr('href',"mailto:"+fb_email);jQuery(this).attr('target','_self');}else{e.preventDefault();var screenwidth=screen.width-500;window.open(jQuery(this).attr('href'),'_blank',"width=500,height=800,left="+screenwidth);}}else if(emailLink){console.log(this);}else if(jQuery(this).hasClass("disabled")){e.preventDefault();}}}
function convert(value){var hours=parseInt(value);value-=parseInt(value);value*=60;var mins=parseInt(value);value-=parseInt(value);value*=60;var secs=parseInt(value);var display_hours=hours;if(hours==0){display_hours="00";}else if(hours>0){display_hours=(hours<10)?"+0"+hours:"+"+hours;}else{display_hours=(hours>-10)?"-0"+Math.abs(hours):hours;}
mins=(mins<10)?"0"+mins:mins;return display_hours+":"+mins;}
function validate(){if(jQuery("#fb_url").length>0){fb=jQuery("#fb_url").val();}
if(fb==""){sweetAlert("Oops...","Something went wrong!","error");return false;}
if(jQuery("#chk_mon").length>0){mon=jQuery("#chk_mon").is(":checked");tue=jQuery("#chk_tue").is(":checked");wed=jQuery("#chk_wed").is(":checked");thu=jQuery("#chk_thu").is(":checked");fri=jQuery("#chk_fri").is(":checked");sat=jQuery("#chk_sat").is(":checked");sun=jQuery("#chk_sun").is(":checked");}
var cDate=new Date();var days=Array();days['mon']=mon;days['tue']=tue;days['wed']=wed;days['thu']=thu;days['fri']=fri;days['sat']=sat;days['sun']=sun;var daysName=[];daysName[1]="mon";daysName[2]="tue";daysName[3]="wed";daysName[4]="thu";daysName[5]="fri";daysName[6]="sat";daysName[7]="sun";if(jQuery("#timezone").length>0){tz=jQuery("#timezone").val();}
if(jQuery("#widget_position").length>0){widget_position=jQuery("#widget_position").val();}
jQuery(".fbmessenger").removeClass().addClass("fbmessenger wpos"+widget_position);jQuery(".tooltiptext").removeClass().addClass("tooltiptext wpos"+widget_position);jQuery("#fb_link").attr("href","http://m.me/"+fb);var cDayofWeek=daysName[cDate.getDay()];jQuery("#fb_link").removeClass("disabled");var calculated_time_zone=calculate_time_zone();var baseTzSy=tz.substr(0,1);var baseTzHr=tz.slice(0,tz.indexOf(":"));var baseTzMn=tz.substr(tz.indexOf(":")+1,2);var baseTzDs=tz.slice(-1);var clientTzDs=calculated_time_zone.slice(-1);if(baseTzSy=="0")baseTzSy="";if(baseTzSy=="+")baseTzHr=baseTzHr.substr(1);var conTz=parseInt(baseTzHr)+parseFloat(baseTzMn/60);var baseTime=calcTime(conTz,conTz);var baseDayofWeek=baseTime.getDay();if(baseDayofWeek==0)baseDayofWeek=7;if(days[daysName[baseDayofWeek]]){if(jQuery('.slider-time:visible').length>0){s=jQuery("#ts_container-"+daysName[baseDayofWeek]+" .slider-time").html();e=jQuery("#ts_container-"+daysName[baseDayofWeek]+" .slider-time2").html();var start_time=convertTimeFormat(s);var end_time=convertTimeFormat(e);}else if(jQuery('#mob_container_time').length>0){s=jQuery("#start_time-"+daysName[baseDayofWeek]).val();e=jQuery("#end_time-"+daysName[baseDayofWeek]).val();var start_time=convertTimeFormat(s);var end_time=convertTimeFormat(e);}else{var t=ot[daysName[baseDayofWeek]].split("-");var start_time=convertTimeFormat(t[0]);var end_time=convertTimeFormat(t[1]);}
cHrs=cDate.getHours();cMin=cDate.getMinutes();var osTimeHrs=start_time.slice(0,start_time.indexOf(":"));var osTimeMins=start_time.substr(start_time.indexOf(":")+1,2);var oeTimeHrs=end_time.slice(0,end_time.indexOf(":"));var oeTimeMins=end_time.substr(end_time.indexOf(":")+1,2);console.log("Online time in base timezone("+daysName[baseDayofWeek]+"): "+osTimeHrs+":"+osTimeMins+" - "+oeTimeHrs+":"+oeTimeMins);lHrs=baseTime.getHours();lMin=baseTime.getMinutes();var startTimeTs=new Date(baseTime.getFullYear(),baseTime.getMonth(),baseTime.getDate(),osTimeHrs,osTimeMins,0,0);startTimeTs=parseInt((startTimeTs.getTime())/1000);var endTimeTs=new Date(baseTime.getFullYear(),baseTime.getMonth(),baseTime.getDate(),oeTimeHrs,oeTimeMins,0,0);endTimeTs=parseInt((endTimeTs.getTime())/1000);sT=new Date(startTimeTs*1000);eT=new Date(endTimeTs*1000);var cTs=parseInt(baseTime.getTime()/1000);if((cTs>=startTimeTs)&&(cTs<endTimeTs)){jQuery("#fb_link").removeClass("disabled").removeClass("email_us");jQuery("#img_email").hide();jQuery("#img_msg").show();return true;}else{if(jQuery("#chk_showemaillink").length>0){emailLink=jQuery("#chk_showemaillink").is(':checked');fb_email=jQuery("#fb_email").val();}else{emailLink=emailLink;}
if(emailLink){jQuery('#fb_link').attr('href',"mailto:"+fb_email);jQuery('#fb_link').attr('target','_self');if(fb_email!=""&&isEmail(fb_email)){jQuery("#fb_link").removeClass("disabled").addClass("email_us");jQuery("#img_email").show();jQuery("#img_msg").hide();}else{jQuery("#img_email").hide();jQuery("#img_msg").show();}}else{jQuery("#fb_link").addClass("disabled");}}}else{if(jQuery("#chk_showemaillink").length>0){emailLink=jQuery("#chk_showemaillink").is(':checked');fb_email=jQuery("#fb_email").val();}else{emailLink=emailLink;}
if(emailLink){jQuery('#fb_link').attr('href',"mailto:"+fb_email);jQuery('#fb_link').attr('target','_self');if(fb_email!=""&&isEmail(fb_email)){jQuery("#fb_link").removeClass("disabled").addClass("email_us");jQuery("#img_email").show();jQuery("#img_msg").hide();}else{jQuery("#img_email").hide();jQuery("#img_msg").show();}}else{jQuery("#fb_link").addClass("disabled");}}
return false;}
function convertTimeFormat(time){var hours=Number(time.match(/^(\d+)/)[1]);var minutes=Number(time.match(/:(\d+)/)[1]);var AMPM=time.match(/\s(.*)$/)[1];if(AMPM=="PM"&&hours<12)hours=hours+12;if(AMPM=="AM"&&hours==12)hours=hours-12;var sHours=hours.toString();var sMinutes=minutes.toString();if(hours<10)sHours="0"+sHours;if(minutes<10)sMinutes="0"+sMinutes;return sHours+":"+sMinutes;}
function calcTime(city, offset){d=new Date();utc=d.getTime()+(d.getTimezoneOffset()*60000);nd=new Date(utc+(3600000*offset));return nd;}
function isEmail(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email);} jQuery( document ).ready(function($) { calculate_time_zone(true); validate(); setInterval(validate, 30000); $('#fb_link').click(linkHandler);
});})(jQuery);
(function($) {
var contactFormHost = 'https://app.steas.se/user_interest_recycle.php',
      form = jQuery('#contact-form'),
      notice = form.find('#notice');

  if (form.length) {
    form.submit(function(ev){
      ev.preventDefault();

      jQuery.ajax({
        type: 'POST',
        url: contactFormHost,
        data: form.serialize(),
        dataType: 'json',
	success: function(response) {
          switch (response.Msg) {
            case 'Success':
              form.fadeOut(function() {
                form.html('<div class="field"><h4>' + form.data('success') + '</h4></div>').fadeIn();
              });
              break;
	    case 'Exist':
	      form.fadeOut(function() {
                form.html('<div class="field"><h4>' + notice.data('error') + '</h4></div>').fadeIn();
              });
              break;
          }
        },
        error: function(xhr, ajaxOptions, thrownError) {
          //var err = eval("(" + xhr.responseText + ")");
          //notice.html('<h4>' + notice.data('exception') + '</h4>').fadeIn();
	  notice.html('<h4>' + xhr.responseText + '</h4>').fadeIn();
        }
      });
    });
  }
})(jQuery);	
