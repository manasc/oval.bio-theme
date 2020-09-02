<?php
if (!defined('ABSPATH')) {
	exit;
}  // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Activator')) {
	class WCPD_Disclaimer_Activator {

		public function __construct() { 
			register_activation_hook( WCPD_DIR, array($this,'activate') );
			//die("I am die")
		}

		public function activate() {
			//die('This is working');
			global $wpdb;
			require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
			//create log table
			$tbl_name = $wpdb->prefix . 'disclaimer_log';
			$charset_collate = $wpdb->get_charset_collate();
			$sql = 'CREATE TABLE IF NOT EXISTS ' . $tbl_name . ' (
						id INT NOT NULL AUTO_INCREMENT,
						product_id INT NOT NULL,
						user_id INT DEFAULT NULL,
						action varchar(255) NOT NULL,
						ip varchar(255) DEFAULT NULL,
						city varchar(255) DEFAULT NULL,
						country varchar(255) DEFAULT NULL,
						continent varchar(255) DEFAULT NULL,
						created_at datetime NOT NULL,
						UNIQUE KEY id(id)
					)  $charset_collate;';
			
			dbDelta($sql);
		}
	}
}
