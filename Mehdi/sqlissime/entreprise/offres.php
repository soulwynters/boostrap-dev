<?php
	session_start();
	include("../include/site.conf.php");
	$page_name="Offres";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>SQLissime : Mentions l&eacute;gales</title>
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
									<h1 style="margin: 0;padding: 0;font-size: 3em;font-weight: 600;">Mentions l&eacute;gales</h1>
									<span class="byline">Offres SQLissime</span>
								</header>
								<p>
									1. Le pr&eacute;sent site est la propri&eacute;t&eacute; :<br />
									<br />
									- de la soci&eacute;t&eacute; SQLissime, SAS au capital de 7 500 euros, immatricul&eacute;e au registre du commerce et des 
									soci&eacute;t&eacute;s de Versailles sous le num&eacute;ro 513 946 020 00023, dont le si&egrave;ge social est situ&eacute; au 32 Avenue de Poissy, 
									78570 Chanteloup-les-Vignes.<br />
									<br />
									- Tel : 01 39 74 34 77 | Mail : contact@sqlissime.com<br />
									<br />
									2. Le Directrice de la publication du site web est Madame HANSEN Laetitia.
								</p>
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