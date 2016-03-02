<?php
	session_start();
	//Redirection pour le www
	$pattern = '/^www/';
	if(!preg_match($pattern, $_SERVER['HTTP_HOST']))
	{
		header("HTTP/1.1 301 Moved Permanently");
		header("Location: http://www.".$_SERVER['HTTP_HOST']."/");		
	}
	include("include/site.conf.php");
	$page_name="Accueil";
?>
<!DOCTYPE html>
<html>
	<head>
		<title>SQLissime : Innovation > Performance > Excellence</title>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<!--[if lte IE 8]><script src="css/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="<?php echo $cfg['Live_Site']; ?>/css/style.css" />
		<link rel="stylesheet" href="<?php echo $cfg['Live_Site']; ?>/css/skel.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="css/ie/v8.css" /><![endif]-->
		<link rel="shortcut icon" type="image/x-icon" href="<?php echo $cfg['Live_Site']; ?>/img/sqlissime_logo_min.jpg" />
	</head>
	<body class="homepage">

		<!-- Header -->
			<div id="header">
				<div class="container">
						
					<!-- Logo -->
						<h1><a href="<?php echo $cfg['Live_Site']; ?>" id="logo" title="SQLissime">
							<img src='<?php echo $cfg['Live_Site']; ?>/img/sqlissime_logo.jpg' alt='SQLissime' title='SQLissime Logo' style="padding:-2%;border-radius:10px;"/>
						</a></h1>

					<!-- Nav -->
					<?php include ($cfg['Absolute_Path'].'/include/home_nav.php'); ?>
					

					<!-- Banner -->
						<div id="banner">
							<div class="container">
								<section>
									<header class="major"  style="background:rgba(255,255,255,0.3);margin-bottom:2%;">
										<h2 style="">Innovation > Performance > Excellence</h2>
										<span class="byline">Particuliers et entreprises, fa&icirc;tes le choix d'un expert en solutions IT<br />
										pour vous accompagner dans l'optimisation de vos performances
										</span>
									</header>
									<a href="<?php echo $cfg['Live_Site']; ?>/entreprise/presentation.php" class="button alt">D&eacute;couvrir</a>
								</section>			
							</div>
						</div>

				</div>
			</div>

					<!-- Featured -->
					<div class="wrapper style2">
						<section class="container">
							<header class="major">
								<h2>Savoir-faire SQLissime</h2>
								<span class="byline">Acteur de votre progression, garant de votre succ&egrave;s</span>
							</header>
							<div class="row no-collapse-1">
								<section class="3u">
									<a href="#" class="image feature" title="Experts SQLissime"><img src="<?php echo $cfg['Live_Site']; ?>/img/experts_sqlissime.jpg" alt="Experts SQLissime" title="Experts SQLissime"></a>
									<p style="text-align: justify;">Des équipes spécialisées composées d'experts en commerce et en informatique fournissent un service et des prestations uniques : vous êtes certain d'atteindre vos objectifs.<br /><br />
									<a href="<?php echo $cfg['Live_Site']; ?>/entreprise/presentation.php#equipes" title="">> En savoir plus</a></p>
								</section>
								<section class="3u">
									<a href="#" class="image feature" title="SQLissime International"><img src="<?php echo $cfg['Live_Site']; ?>/img/sqlissime_international.jpg" alt="SQLissime International" title="SQLissime International"></a>
									<p style="text-align: justify;">Un groupe &agrave; l'implantation internationale, &agrave; la pointe des nouvelles technologies et des tendances du march&eacute; : pour rester compétitif et s'assurer une position de leader.<br /><br />
									<a href="<?php echo $cfg['Live_Site']; ?>/entreprise/presentation.php#groupe" title="">> En savoir plus</a></p>
								</section>
								<section class="3u">
									<a href="#" class="image feature" title="Logo ITIL"><img src="<?php echo $cfg['Live_Site']; ?>/img/itil_logo.jpg" alt="Logo ITIL" title="ITIL SQLissime"></a>
									<p style="text-align: justify;">Des collaborateurs certifi&eacute;s ITIL pour une impl&eacute;mentation syst&eacute;matique et performante des Best Practise IT : optimisation de votre SI et amélioration continue des processus métiers.<br /><br />
									<a href="<?php echo $cfg['Live_Site']; ?>/entreprise/presentation.php#equipes" title="">> En savoir plus</a></p>
								</section>
								<section class="3u">
									<a href="#" class="image feature"><img src="<?php echo $cfg['Live_Site']; ?>/img/reseau_sqlissime.jpg" alt="R&eacute;seau SQLissime" title="R&eacute;seau SQLissime"></a>
									<p style="text-align: justify;">Un réseau d'entreprises e-business, les offres SQLissime sont globales, synergie technologie/service pour des solutions efficientes de la conception jusqu'au bout de vos projets.<br /><br />
									<a href="<?php echo $cfg['Live_Site']; ?>/entreprise/presentation.php" title="">> En savoir plus</a></p>
								</section>
			
							</div>
						</section>
					</div>

		<!-- Main -->
			<div id="main" class="wrapper style1">
				<section class="container">
					<header class="major">
						<h2>Carrières IT</h2>
						<span class="byline">Evolutions et r&eacute;ussites</span>
					</header>
					<div class="row">
					
						<!-- Content -->
							<div class="6u">
								<section>
									<ul class="style">
										<li>
											<span class="fa fa-graduation-cap"></span>
											<h3>Formation - Certifications</h3>
											<span>Monter en compétence pour assurer un service de qualité et satisfaire toutes les parties prenantes de vos projets.</span>
										</li>
										<li>
											<span class="fa fa-child"></span>
											<h3>Stages</h3>
											<span>Intégrez un réseau unique où les profils et les entreprises avancent ensemble et créent mutuellement leur valeur.</span>
										</li>
									</ul>
								</section>
							</div>
							<div class="6u">
								<section>
									<ul class="style">
										<li>
											<span class="fa fa-eye"></span>
											<h3>Conseil et orientation</h3>
											<span>Profitez d'une expertise métier pour vous guider mais aussi pour définir, mener et réaliser vos projets avec succ&egrave;s.</span>
										</li>
										<li>
											<span class="fa fa-briefcase"></span>
											<h3>Recrutement</h3>
											<span>Ambition et opportunités. Assurez votre avenir, exprimez votre talent : rejoignez un groupe en pleine expansion.</span>
										</li>
									</ul>
								</section>
							</div>

					</div>
				</section>
			</div>

			<!-- Footer -->
			<?php include ($cfg['Absolute_Path'].'/include/footer.php'); ?>
			
		<script src="js/jquery.min.js"></script>
		<script src="js/jquery.dropotron.min.js"></script>
		<script src="js/skel.min.js"></script>
		<script src="js/skel-layers.min.js"></script>
		<script src="js/init.js"></script>	

	</body>
</html>