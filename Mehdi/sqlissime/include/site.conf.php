<?php
//Connection à la base de données
//$co = mysql_connect("www.isicia.com","admz","devdev");
$co=mysql_connect("localhost", "root", "");
$co=mysql_select_db("Inscriptions", $co);
// Fichier de configuration
$cfg['OffLine'] = 0;
$cfg['OffLine_message'] = 'Le site est fermé pour cause de maintenance, veuillez nous en excuser.<br />Merci de revenir plus tard.';
$cfg['Error_System_message'] = 'Le site est actuellement indisponible dû à une erreur système.<br />Veuillez essayer de vous reconnecter ultérieurement.';
$cfg['Name_Project'] = 'SQLissime';
//____________________________________________________
//$cfg['Absolute_Path'] = 'C:\wamp\www\sqlissime';
$cfg['Absolute_Path'] = '/var/www/vhosts/sqlissime.com/httpdocs/';
//$cfg['Live_Site'] = 'http://127.0.0.1/sqlissime';
$cfg['Live_Site'] ='http://www.sqlissime.com';
//____________________________________________________
//$cfg['Live_Site'] = 'http://localhost/sqlissime';
$cfg['Mail_Contact'] = 'contact@sqlissime.com';


$cfg['Live_GZIP'] = 1;
$cfg['quota_Mb'] = 100;
$cfg['Rep_Upload'] = '/_upload/ressources';
$cfg['ADMIN_DEBUG'] = 1;
$cfg['MYSQL_HOST'] = 'localhost';
$cfg['MYSQL_USER'] = 'my-isicia';
$cfg['MYSQL_PSWD'] = 'CskGsh@F';
$cfg['MYSQL_DB'] = 'isicia';
$cfg['FTP_USER'] = '';
$cfg['FTP_PASS'] = '';
$cfg['default_lang'] = 'french';
$cfg['entrees_par_page'] = 30;
$cfg['WYSIWYG'] = 1;
$cfg['WYSIWYG_CSS'] = '../css/styles_editeur_html.css';
$cfg['WYSIWYG_TABLE'] = 0;
$cfg['ressources_suppr_recursif'] = 1;
$cfg['Admin_Path'] = '/_admin';

$cfg['Mail_Mailer'] = 'sendmail';
$cfg['Mail_Sendmail_path'] = '/usr/sbin/sendmail';
$cfg['Mail_SMTP_Auth'] = 0;
$cfg['Mail_SMTP_Username'] = '';
$cfg['Mail_SMTP_Password'] = '';
$cfg['Mail_SMTP_Host'] = 'localhost';
$cfg['Rep_Cache'] = '/_upload/cache';
$cfg['Time_Cache'] = 900;
$cfg['On_Cache'] = 0;






?>
