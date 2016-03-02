<?php
	session_start();
	include("../include/site.conf.php");
	$page_name="Formations";
?>
<!DOCTYPE HTML>
<html>
	<head>
		<title>SQLissime : d&eacute;veloppement de sites web et d'applications sur environnements distribu&eacute;s</title>
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
									<h1 style="margin: 0;padding: 0;font-size: 3em;font-weight: 600;">Formations</h1>
									<span class="byline">Les technologies les plus performantes et les plus r&eacute;centes</span>
								</header>
								<div class="wrapper style3">
									<div class="row">
										<p>
											Le panel de formations SQLissime regroupe l'ensemble des connaissances n&eacute;cessaires &agrave; l'&eacute;laboration
											de projets web sous toutes leurs formes. S&eacute;lectionn&eacute;es pour leur efficacit&eacute; et sans-cesse remises &agrave; jour,
											ces formations constituent un support solide pour faire avancer les &eacute;quipes responsables de la cr&eacute;ation des 
											solutions IT. Elles sont &eacute;galement source de bonnes pratiques car orient&eacute;es m&eacute;tier et facteur de succ&egrave;s business.
										</p>
									</div>								
								</div>	
								<p style="font-size:90%;">Formations en partenariat avec ISICIA, l'Institut Sup&eacute;rieur d'Intelligence en Commerce et en Informatique des Affaires</p>
								<h2 id="android">Android</h2>
								<div class="row">
									<p class="8u">
										Exploitez Android, le syst&egrave;me d'exploitation Java open source de Google. Concurrent de l'iPhone, les 
										concepts et les enjeux d'Android repr&eacute;sentent de v&eacute;ritables opportunit&eacute;s business pour les entreprises.
									</p>
									<div class="4u">
										<center>
											<img src="http://www.sqlissime.com/img/android.png" alt="Logo Android" title="Android SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="javajee">Java EE</h2>
								<div class="row">
									<p class="9u">
										D&ocirc;tez-vous d'un bagage de d&eacute;veloppement web puissant avec Java Entreprise Edition. Ce framework open source 
										utilis&eacute; par les plus grandes entreprises
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/java_ee.png" alt="Logo Java EE" title="Java EE SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="hibernate">Hibernate</h2>
								<div class="row">
									<p class="9u">
										D&eacute;couvrez une solution pour le d&eacute;veloppement objet et l'acc&egrave;s aux bases de donn&eacute;es relationnelles. Simplifiez
										l'adaptation des modules objet avec les SGDB : sessions, transactions,  cache d'objet, langage SQL, etc.
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/hibernate.png" alt="Logo hibernate" title="hibernate SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="spring">Spring</h2>
								<div class="row">
									<p class="9u">
										Descriptif &agrave; venir
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/spring.png" alt="Logo spring" title="spring SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="jsf">JSF</h2>
								<div class="row">
									<p class="8u">
										Descriptif &agrave; venir
									</p>
									<div class="4u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/jsf.png" alt="Logo JSF" title="JSF SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="agilescrum">Agile Scrum</h2>
								<div class="row">
									<p class="8u">
										Int&eacute;grez les meilleures pratiques &agrave; votre d&eacute;veloppement de projet informatique : comptant parmi les m&eacute;thodes Agile, 
										Scrum offre un mod&egrave;le pour contr&ocirc;ler les processus, s'adapter au changement et faire preuve de r&eacute;activit&eacute;.
						
									</p>
									<div class="4u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/agile.png" alt="Logo Agile" title="Agile Scrum SQLissime"></center>
										</center>
									</div>
								</div>
								
								<h2 id="java">Java et le d&eacute;veloppement objet</h2>
								<div class="row">
									<p class="9u">
										Entrez dans le monde du d&eacute;veloppement objet avec Java. Appr&eacute;hendez une nouvelle fa&ccedil;on de coder : plus organis&eacute;e, mieux
										con&ccedil;ue, d&eacute;di&eacute;e aux grands projets... et parcourez l'ensemble des IDE, frameworks et outils de mod&eacute;lisation n&eacute;cessaires. 
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/java.png" alt="Logo Java" title="Java SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="phpmysql">PHP MySQL</h2>
								<div class="row">
									<p class="9u">
										Apprenez &agrave; &eacute;laborer des traitements dynamiques de contenu web afin de g&eacute;rer l'information. Vous pourrez alors la traiter 
										et la stocker dans une base de donn&eacute;es puis r&eacute;utiliser vos informations : fichiers clients, trafic web, etc.
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/php_mysql.gif" alt="Logo PHP MySQL" title="PHP MySQL SQLissime"></center>
										</center>
									</div>
								</div>
								<h2 id="htmlcss">HTML / CSS Javascript</h2>
								<div class="row">
									<p class="9u">
										D&eacute;couvrez comment r&eacute;aliser des interfaces graphiques pour le web avec HTML 5, CSS 3 et Javascript. 
										Vous pourrez ensuite cr&eacute;er vous-m&ecirc;me des sites de qualit&eacute; et disposer d'une vitrine web pour vos activit&eacute;s.
									</p>
									<div class="3u">
										<center>
											<img src="<?php echo $cfg['Live_Site']; ?>/img/html_css.png" alt="Logo HTML CSS" title="HTML CSS SQLissime"></center>
										</center>
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