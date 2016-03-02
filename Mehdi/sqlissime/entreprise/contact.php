<?php
	session_start();
	include("../include/site.conf.php");
	$page_name="Contact";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>SQLissime</title>
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
									<h1 style="margin: 0;padding: 0;font-size: 3em;font-weight: 600;">Nous Contacter</h1>
									<span class="byline">Vous souhaitez d&eacute;couvrir l'offre SQLissime, faire une demande de devis ou obtenir des informations compl&eacute;mentaires ?</span>
								</header>								
								<p>
									Soucieuse des sp&eacute;cificit&eacute; de vos projets, notre &eacute;quipe est &agrave; votre disposition pour vous proposer des solutions adapt&eacute;es et s'engage &agrave; vous r&eacute;pondre dans les meilleurs d&eacute;lais.
								</p>
								<div class="row">
									<div class="4u">
										<h2>Adresse</h2>
										<p>
											32 Avenue de Poissy <br />
											78570 Chanteloup-les-Vignes
										</p>
										<h2>Email</h2><p>contact@sqlissime.com</p>
										<h2>Telephone</h2>
										<p>01 39 74 34 77</p>
									</div>
									<div class="8u">
										<img style="float:right;" src="<?php echo $cfg['Live_Site']; ?>/img/contact.jpg" alt="Contact" title="Contact SQLissime">
									</div>
								</div>
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