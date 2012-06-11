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
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/nivo-style.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/nivo-slider.css"/>
		<link rel="stylesheet" href="<?php echo base_url(); ?>css/themes/default/default.css" type="text/css" media="screen" />

		<!-- Attach JavaScript files -->
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>

		<script src="<?php echo base_url(); ?>js/jquery.nivo.slider.pack.js" type="text/javascript"></script>
		<title><?php echo $title; ?></title>
	</head>

	<body>

		<section class="current-body">
			<section class="main">
				<header>
					<?php $this->load->view('navigation'); ?>
					
				</header>
				<section class="content">
					<section class="image-scroller">
						<div class="slider-wrapper theme-default">
							<div id="slider" class="nivoSlider">
								<img src="<?php echo base_url(); ?>images/toystory.jpg" data-thumb="<?php echo base_url(); ?>images/toystory.jpg" alt="" />
								<a href="http://dev7studios.com"><img src="<?php echo base_url(); ?>images/up.jpg" data-thumb="images/up.jpg" alt="" title="This is an example of a caption" /></a>
								<img src="<?php echo base_url(); ?>images/walle.jpg" data-thumb="<?php echo base_url(); ?>images/walle.jpg" alt="" data-transition="slideInLeft" />
								<img src="<?php echo base_url(); ?>images/nemo.jpg" data-thumb="<?php echo base_url(); ?>images/nemo.jpg" alt="" title="#htmlcaption" />
							</div>
							<div id="htmlcaption" class="nivo-html-caption">
								<strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>.
							</div>
						</div>
					</section>

					<section class="tile-area">

						<section class="main-page-tiles testimonials" style="margin-right:4.5%">
							<h2>Articles</h2>
						</section>

						<section class="main-page-tiles">
							<h2>Testimonials</h2>
						</section>

						<section class="right-align">
							<section class="main-page-tiles" style="margin-right:0">
								<h2>Twitter Feed</h2>
								<ul id="twitter_update_list">
									<li>
										Twitter feed loading
									</li>
								</ul>
								<a href="https://twitter.com/RufusMbugua" class="twitter-follow-button" data-show-count="true" data-size="large" style="padding-left:5px">Follow @RufusMbugua</a>
								<script>
									! function(d, s, id) {
										var js, fjs = d.getElementsByTagName(s)[0];
										if(!d.getElementById(id)) {
											js = d.createElement(s);
											js.id = id;
											js.src = "//platform.twitter.com/widgets.js";
											fjs.parentNode.insertBefore(js, fjs);
										}
									}(document, "script", "twitter-wjs");
								</script>
							</section>

						</section>

					</section>

				</section>
				<footer>

				</footer>

			</section>
		</section>
		<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js" charset="utf-8"></script>
		<script src="<?php echo base_url(); ?>js/jquery.nivo.slider.js" type="text/javascript"></script>
		<script type="text/javascript" src="../jquery.nivo.slider.js"></script>

		<script type="text/javascript">
			$(window).load(function() {

				$('#slider').nivoSlider();

			});

		</script>
		<script type="text/javascript" src="http://twitter.com/javascripts/blogger.js"></script>
		<script type="text/javascript" src="http://twitter.com/statuses/user_timeline/RufusMbugua.json?callback=twitterCallback2&count=5"></script>
	</body>
</html>