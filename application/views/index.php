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
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>

		<script src="<?php echo base_url()?>js/jquery-1.7.2.min.js"></script>
		


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

				
			
				
				var loading = true;
  
				  function loadShopKenyaProducts() {
				   var url = '<?php print base_url()?>c_front/getProductsByStore';
				   $.getJSON(url, function(data) {
				    var items = data.products;
				    $.each(items, function(i,product) {
				    
				     var name=product.productName;
				     var description = product.productDescription;
				     var price= product.productPrice;
				     var tags=product.productTags;
				     //Split the tags
				     var splitTags = tags.split(",");
				     var styledTags="";
				     
				     $.each(splitTags, function(i, tag){
				     	styledTags+="<section class='result-tags awesome blue medium' style='margin-right:1%;'>"+tag+"</section>";
				    });
				    
				     	
				     
				     
				     
				     $(".content").append("<section class='result'><section class=result-image></section><section class='result-details'><section class='result-title'><a href='#'>"+name+"</a></section><section class='result-content'>"+description+"</section><section class='result-price'>Ksh. "+price+"</section>"+styledTags+"</section></section>");
				    });
				    
				    // once we've loaded
				    // kill the loading stuff
				    loading = false;
				    $(".loading").remove();
				    
				   });
				  }/*end of fn loadShopKenyaProducts()*/
				  
				   $(function() {
   
					   // load initial products
					   loadShopKenyaProducts();
					   
					   // scroll event of the main div
					   $(".content").scroll(function() {
					   
					    // get the max and current scroll
					    var curScroll = $(this)[0].scrollTop;
					    var maxScroll = $(this)[0].scrollHeight - $(this).height();
					    
					    // are we at the bottom?
					    if( (curScroll == maxScroll) && loading == false) {
					    
					     // when you start, set loading
					     loading = true;
					    
					     // add the loading box
					     $(".content").append("<div class='loading'>Loading...</div>");
					     
					     // scroll to the bottom of the div
					      $(this)[0].scrollTop = $(this)[0].scrollHeight - $(this).height();
					     
					     // load more photos
					     loadShopKenyaProducts();
					    } 
					   }); 
             }); 
             
             $('.shopping').click(function() {
							$('.alphalist a').hide();
							$('.shopping').show();
							$('.shopping-menu').show();
							
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
							<a class="shopping">Shopping</a>
							<div class="shopping-menu" style="display:none">

								<p>Nakumatt</p>

								<p>Naivas</a>

							</div>
							
							<ul
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
	
	<!--section class="result"><!--begin of class result-->
	<!--section class="result-title">

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
	</section-->
		<!--/section><!--end of class result-->
		
			</section><!--end of class content-->
				</section><!--end of class document-->
				

	</body>
</html>