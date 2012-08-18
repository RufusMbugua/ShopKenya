<html>
	<head>
		<link href="<?php echo base_url(); ?>css/layout.css" rel="stylesheet" type="text/css" />
		<!-- -->
		<!-- Attach CSS files -->
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/layout.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/awesomebuttons.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/buttons.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/orbit.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/post.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/tabs.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/form.css"/>

		<!-- Attach JavaScript files -->
		<script type="text/javascript" src="<?php echo base_url(); ?>js/jquery-1.7.2.min.js" charset="utf-8"></script>
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>
       <script type="text/javascript" src="<?php echo base_url(); ?>js/menuloader.js" charset="utf-8"></script>


		<script>
			$().ready(function() {
				//Ordering an Unsorted List
				var items = $('.alphaList li').get();
				items.sort(function(a, b) {
					var keyA = $(a).text();
					var keyB = $(b).text();

					if (keyA < keyB)
						return -1;
					if (keyA > keyB)
						return 1;
					return 0;
				});
				var ul = $('.alphaList');
				$.each(items, function(i, li) {
					ul.append(li);
				});

				$('.mini-menu').hide();

			});

		</script>
		<title><?php echo $title; ?></title>
	</head>

	<body>

		<header>
			<section class="logo">
				ShopKenya
			</section>
			<section class="search">
				<form>
					<select>
						<option>All</option>
						<option>Some</option>
					</select>
				<input type="search" placeholder="Search Here" />
				<button>Search</button>
				</form>
			</section>
		</header>
<section class="document">
		<section class="left-sidebar">
			
			<ul class="alphaList">
				<a class="awesome blue large shopping" style="width:20%" style="display:none" >Back</a>
				<div class="top-menu">
					<li>
						<a class="anchor shopping">Shopping</a>
						
							
							   <li class="mini-menu shopping" style="display:none" >Nakumatt</li>
							   <li class="mini-menu shopping" style="display:none" >Uchumi</li>
							   <li class="mini-menu shopping" style="display:none" >Naivas</li>
						   
					 
					</li>
					<li>
						<a class="anchor">Travelling</a>
					</li>
					<li>
						<a class="anchor" >Advertising</a>
					</li>
					<li>
						<a class="anchor" >Communication</a>
					</li>
					<li>
						<a class="anchor" >Banking</a>
					</li>
					<li>
						<a class="anchor" >Entertainment</a>
					</li>
					<li>
						<a class="anchor" >Security Firms</a>
					</li>
					<li>
						<a class="anchor" >Housing</a>
					</li>
					<li>
						<a class="anchor" >Transport</a>
					</li>
					<li>
						<a class="anchor" >Hotels</a>
					</li>
					<li>
						<a class="anchor" >Restaurants</a>
					</li>
					<li>
						<a class="anchor">Couriers</a>
					</li>
					<li>
						<a class="anchor" >Hire</a>
					</li>
					
				</div>
			</ul>
		</section>
		<section class="content">
<section class="result">
	<section class="result-title">
		Item 1
	</section>
	<section class="result-content">
		Description
	</section>
	<section class="result-price">
		Price
	</section>
	<section class="result-tags">
		tags 
	</section>
</section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
<section class="result"></section>
		</section>
		</section>
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>

	</body>
</html>