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
				<div class="top-menu">
					<li>
						<a>Shopping</a>
					</li>
					<li>
						<a>Travelling</a>
					</li>
					<li>
						<a>Advertising</a>
					</li>
					<li>
						<a>Communication</a>
					</li>
					<li>
						<a>Banking</a>
					</li>
					<li>
						<a>Entertainment</a>
					</li>
					<li>
						<a>Security Firms</a>
					</li>
					<li>
						<a>Housing</a>
					</li>
					<li>
						<a>Transport</a>
					</li>
					<li>
						<a>Hotels</a>
					</li>
					<li>
						<a>Restaurants</a>
					</li>
					<li>
						<a>Couriers</a>
					</li>
					<li>
						<a>Hire</a>
					</li>
					<li>
						<a>C</a>
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