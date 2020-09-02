<?php
if (!defined('ABSPATH')) {
	exit();
}  // Exit if accessed directly
if ( !class_exists( 'WCPD_Discalimer_Helper_Model' ) ) {
	class WCPD_Discalimer_Helper_Model {
		public static function record_count() {
			global $wpdb;
			return $wpdb->get_var("SELECT COUNT(*) FROM {$wpdb->prefix}disclaimer_log", $output = ARRAY_A);
			//return $wpdb->get_results($wpdb->prepare('%s', array($sql)), $output = ARRAY_A);
		}
		public static function get_records( $per_page = 25, $page_number = 1 ) {
			global $wpdb;
			$table_name =$wpdb->prefix . 'disclaimer_log';

			/*$sql = "SELECT * FROM {$table_name} ORDER BY created_at DESC";
			$sql .= " LIMIT %d";
			$sql .= " OFFSET %d";*/

			$offset = ( $page_number - 1 ) * $per_page;
			

			//echo $sql; exit;

			$result = $wpdb->get_results( $wpdb->prepare("SELECT * FROM {$wpdb->prefix}disclaimer_log ORDER BY created_at DESC LIMIT %d OFFSET %d", array( $per_page, $offset) ) , $output = ARRAY_A);
			
			//"SELECT * FROM {$table_name} ORDER BY created_at DESC LIMIT %d OFFSET %d"
			return $result;

			//ORDER BY created_at DESC
		}
	}
}
