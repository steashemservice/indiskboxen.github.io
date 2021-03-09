---
layout: card
title: KORT
description: 
image: 
nav-menu: false
published: true
permalink: addcard
order: 999
---

<div id="main">
	<section class="major">
		<div class="inner">
			<header class="major">
				<h2>{{ page.title }}</h2>
			</header>
			<div>
				<h4>Beställningsnummer: <span class="orderid"></span><br>Summa att betala: <span class="ordertotal"></span> kr</h4>
			</div>
			<div>
				<h2>Betalkort</h2>
				<iframe style="height: 300px; width: 100%;" id="gFrame" src="https://script.google.com/macros/s/AKfycbyMX9KB8QTTA3eH0Z-rc51UfYVJRF94lQ_TrGUtxhOpDh_WieHT/exec"></iframe>
			</div>
		</div>
	</section>
</div>
