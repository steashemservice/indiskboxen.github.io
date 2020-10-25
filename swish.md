---
layout: swish
title: Betala för din beställning
description: 
image: 
nav-menu: false
published: true
permalink: order
order: 999
---

<div id="main">
	<section class="major">
		<a href="csub" class="button"> välja andra rätter eller leveransdatum </a>
		<div class="csub">
		    <form id="contact-form" class="contact-form" method="post" data-success="Ditt order har registrerats! Tack för din beställning. Nedan kan du se betalningsinformation om din beställning:">
  			<input type="hidden" name="_next" value="thanks" />
			<input id="dispnon" name="_prev" type="text" />
			<div class="field">
			  <label for="delivery">Nästa Leveransdatum <i class="fas fa-fw fa-star"></i></label>
			  <select type="text" name="delivery" id="delivery">
			  </select>
			</div>
			<h3><i>Här kan du välja hur många boxar du önskar av varje rätt</i></h3>
			<!--<div class="field">
			  <label class="field first half" for="Paneer Tikka Masala">Paneer Tikka Masala</label>
			  <p class="field half"><i class="fas fa-fw fa-globe-americas"></i>0,6 kg CO<sub>2</sub>e</p>
			  <p>smörstekt indisk färskost i krämig tikka masala sås</p>
			  <p>paneer in creamy tikka masala sauce</p>
			  <p><b>Allergener</b> Cashewnötter, Mandelmjöl, Mjölk, Laktos, Senap</p>
			  <input type="number" name="Paneer Tikka Masala" id="Paneer Tikka Masala" class="quantity awindow" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>-->
			<div class="field">
			  <label class="field" for="Palak Paneer">Palak Paneer</label>
			  <input type="number" name="Palak Paneer" id="Palak Paneer" class="quantity awindow" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
			<div class="field">
			  <label class="field" for="Palak Dal">Palak Dal (vegan)</label>
			  <input type="number" name="Palak Dal" id="Palak Dal" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
			<div class="field">
			  <label class="field" for="Vegetable Korma">Chole Vegetable Korma (vegan)</label>
			  <input type="number" name="Vegetable Korma" id="Vegetable Korma" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
                        <div class="field">
			  <label class="field" for="Ennai Kathirikai Kuzhambu">Ennai Kathirikai Kuzhambu (vegan)</label>
			  <input type="number" name="Ennai Kathirikai Kuzhambu" id="Ennai Kathirikai Kuzhambu" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
                        <div class="field">
			  <label class="field" for="Butter Chicken">Butter Chicken</label>
			  <input type="number" name="Butter Chicken" id="Butter Chicken" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
			<!--<div class="field">
			  <label class="field first half" for="Chicken Korma">Chicken Korma</label>
			  <p class="field half"><i class="fas fa-fw fa-globe-americas"></i>0,67 kg CO<sub>2</sub>e</p>
			  <p>svensk kycklingfilé i smakrik gryta som tillagas med lök, tomat, grön chili, ingefära och garam masala med kokosmjolk</p>
			  <p>swedish chicken fillet in tasty curry cooked with onion, tomato, green chili, ginger and garam masala with coconut milk </p>
			  <p><b>Allergener</b> Cashewnötter, Mandelmjöl, Mjölk, Laktos, Senap</p>
			  <input type="number" name="Chicken Korma" id="Chicken Korma" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>-->
			<div class="field">
			  <label class="field" for="Palak Chicken">Palak Chicken</label>
			  <input type="number" name="Palak Chicken" id="Palak Chicken" class="quantity" min="0" value=0 disabled>
			  <span class="dec"><i class="fas fa-minus"></i></span>
                          <span class="item inc"><i class="fas fa-plus"></i></span>
			</div>
			<h3>
    			  <i>Val av tillbehör</i>
			</h3>
                        <div class="field">
                          <input type="checkbox" id="Chappati" name="Chappati">
			  <label for="Chappati">10st Chapatibröd +89kr</label>
                          <p><b>Allergener</b> Gluten</p>
			</div>
			<h3>
    			  <i>Order Summary</i>
			</h3>
			<div class="field">    
			  <label for="productsel">Antal Matlådor</label>
  			  <input id="productsel" type="number" name="productsel" class="out field" value=0 disabled/>
                        </div>
			<div class="field">    
			  <label for="total">Totalsumma (Inkl Moms i SEK)</label>
  			  <input id="total" type="number" name="total" class="out field" value=0 disabled/>
                        </div>
			<label class="minorder"><i class="fa fa-fw fa-exclamation"></i> Beställ minst 10 matlådor</label>
			<button id="orderbtn" type="submit" disabled>Skicka Beställning</button>
		    </form>
		</div>
		<div class="paydiv">
			<h4>E-Mail: <span class="email"></span><br>Mobilnummer: <span class="mobile"></span><br>Leveransdatum: <span class="delivery"></span><br>Summa att betala: <span class="ordertotal"></span> kr</h4>
			<h4>Du kan betala för din beställning via Swish. Ange ditt mobilnummer i meddelandet.</h4>
			<a class="link swish-link">
				<img src="{{ site.baseurl }}/assets/images/Swish_Vertical.png" alt-src="Betala med Swish">
			</a>
	  	    	<a id="swish-uri"></a>
      			<div id="swish-qr" class="modal" onclick="this.style.display='none'">
    				<div class="modal-content">
					<h5>Amount: <span class="ordertotal"></span> kr<br>Message: <span class="mobile"></span></h5>
					<h6>Scan the QR code with the Swish app to start payment</h6>
      					<img src="{{ site.baseurl }}/assets/images/indiskaboxenswish.png" >
				</div>
  			</div>
		</div>
	</section>
</div>
