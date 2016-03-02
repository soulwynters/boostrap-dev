<?php
	session_start();
	include("../include/site.conf.php");
	$page_name="R&eacute;f&eacute;rencement - SEO";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>SQLissime R&eacute;f&eacute;rencement - SEO</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="<?php echo $cfg['Live_Site']; ?>/css/style.css" />
		<link rel="shortcut icon" type="image/x-icon" href="<?php echo $cfg['Live_Site']; ?>/img/sqlissime_logo_min.jpg" />
		
		<!--<link rel="stylesheet" href="<?php echo $cfg['Live_Site']; ?>/css/skel.css" />-->
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
	</head>
	<body class="right-sidebar">

			<!-- Header -->
			<?php include ($cfg['Absolute_Path'].'/include/header_page.php'); ?>
			
			<!-- Main -->
			<div id="main" class="wrapper style1">
				<div class="container">
					<div class="row">
					
						<!-- Content -->
						<div id="content" class="8u skel-cell-important">
							<section>
								<header class="major">
									<h1 style="margin: 0;padding: 0;font-size: 3em;font-weight: 600;">R&eacute;f&eacute;rencement - SEO</h1>
									<span class="byline">Optimisez votre site web et gagnez en popularit&eacute;</span>
								</header>
								<p>Page en construction</p>
							</section>
						</div>

						<!-- Sidebar -->
						<?php include ($cfg['Absolute_Path'].'/include/aside_page.php'); ?>
						
					</div>
				</div>
			</div>

			<!-- Footer -->
			<?php include ($cfg['Absolute_Path'].'/include/footer.php'); ?>
			
		</div>
		<script src="../js/jquery.min.js"></script>
		<script src="../js/jquery.dropotron.min.js"></script>
		<script src="../js/skel.min.js"></script>
		<script src="../js/skel-layers.min.js"></script>
		<script src="../js/init.js"></script>
	</body>
</html>