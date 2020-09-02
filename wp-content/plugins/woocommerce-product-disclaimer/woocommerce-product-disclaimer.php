<?php
/**
 * Plugin Name: Woocommerce Product Disclaimer
 * Plugin URI: https://wpexperts.io/products/woocommerce-product-disclaimer-pro/
 * Description: This plugin creates disclaimers for woocommerce products just before adding them to cart
 * Version: 2.0
 * WC requires at least: 3.0
 * WC tested up to: 3.6.5
 * Woo: 3632286:0c23233ec003f1946c50c71d1b4cb862
 * Author: wpexperts.io
 * Author URI: https://wpexperts.io/
 * License: GPL
 * Text Domain: wcpd
 */
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}
/**
 * Required functions
 */
define('VERSION', '1.7.4');
if (! function_exists('woothemes_queue_update') || ! function_exists('is_woocommerce_active')) {
	include_once 'woo-includes/woo-functions.php';
}
/**
 * Plugin updates
 */
woothemes_queue_update(plugin_basename(__FILE__), '0c23233ec003f1946c50c71d1b4cb862', '3632286');

if (!defined('WCPD_DIR')) {
	define('WCPD_DIR', plugin_dir_path(__FILE__));
}
if (!defined('WCPD_URL')) {
	define('WCPD_URL', plugin_dir_url(__FILE__));
}

/*function activate_wcpd_disclaimer_pro() {
	include_once WCPD_DIR . 'includes/install.php';
	WCPD_Disclaimer_Activator::activate();
}*/
/**
 * Register the activation/deactivation hooks
 */
/*register_activation_hook(__FILE__, 'activate_wcpd_disclaimer_pro');*/
// check that woocommerce is active
if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
	include_once WCPD_DIR . 'includes/disclaimer-trace.php';
	if (is_admin()) {
		include_once WCPD_DIR . 'includes/disclaimer-settings.php';
		// require product metabox disclaimer
		include_once WCPD_DIR . 'includes/disclaimer-product-metabox.php';
		// require category metabox disclaimer
		include_once WCPD_DIR . 'includes/disclaimer-category-metabox.php';
		//disclaimer log
		include_once WCPD_DIR . 'includes/disclaimer-helper.php';
		include_once WCPD_DIR . 'includes/disclaimer-list-table.php';
		include_once WCPD_DIR . 'includes/disclaimer-log.php';
	} else {
		// Require single product disclaimer
		include_once WCPD_DIR . 'includes/disclaimer-single-product.php';
		// Require single product disclaimer
		include_once WCPD_DIR . 'includes/disclaimer-products-list.php';
		// Require for global site disclaimer
		include_once WCPD_DIR . 'includes/disclaimer-site-global.php';
	}
		// Require disclaimer translation
		include_once WCPD_DIR . 'includes/disclaimer-translation.php';
		// Require ajax functions
		include_once WCPD_DIR . 'includes/ajax-functions.php';
		// Require ajax functions
		//include_once WCPD_DIR . 'includes/install.php';
	
		
	function add_table_logs_on_activation() {
		global $wpdb;
		
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
				) ' . $charset_collate;
				require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
		dbDelta($sql);
	}

	register_activation_hook(__FILE__, 'add_table_logs_on_activation');

	function wcpd_disclaimer_settings_link( $links ) {
		$settings_link = '<a href="' . esc_url(admin_url('admin.php?page=wc-settings&tab=products&section=wcpddisclaimer')) . '">' . __('Settings', 'wcpd') . '</a>';
		array_push($links, $settings_link);
		return $links;
	}
	
	add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'wcpd_disclaimer_settings_link');
	function wcpd_disclaimer_redirect_to_settings( $plugin, $network_activation ) {
		$plugin = plugin_basename( __FILE__ );
		if ( 'woocommerce-disclaimer-pro/woocommerce-disclaimer-pro.php'==$plugin ) {
			wp_safe_redirect(esc_url(admin_url() . 'admin.php?page=wc-settings&tab=products&section=wcpddisclaimer'));
			exit();
		}
	}
	add_action('activated_plugin', 'wcpd_disclaimer_redirect_to_settings', 10, 2);

	function wcpd_disclaimer_enqueue_front_scripts() {
		$ipInfo = wcpd_user_ip_info();
		$product_id='';
		$type='simple';
		$heading=get_option('disclaimer_popup_heading_text');
		$heading=!empty($heading) ? $heading : esc_html__('Disclaimer', 'wcpd');
		if (is_product()) {
			global $product;
			$_product=wc_get_product(get_the_ID());
			if (( $_product->is_type('variable') || $_product->is_type('variable-subscription') )) {
				$product_id=get_the_id();
				$type='variable';
			}
			
			$disable = get_post_meta(get_the_ID(), 'product_discalimer_disabled', true);
			$unique = get_post_meta(get_the_ID(), 'product_discalimer_unique', true);
			$productOption = 'inherit';
			if ('yes'===$disable) {
				$productOption = 'disabled';
			} elseif (( 'no'===$disable || empty($disable) ) && 'yes'===$unique) {
				$productOption = 'active';
			} else {
				$productOption = 'inherit';
			}
			switch ($productOption) {
				case 'active':
					$heading_new=get_post_meta(get_the_ID(), 'disclaimer_popup_heading_text', true);
					$heading=!empty($heading_new) ? $heading_new : $heading;
					break;
				case 'inherit':
					$cat = null;
					$terms = get_the_terms(get_the_ID(), 'product_cat');
					if ($terms) {
						foreach ($terms as $term) {
							$cat = $term;
							break;
						}
					}
					if (!is_wp_error($cat)) {
						$disable = get_term_meta($cat->term_id, 'disclaimer_disable', true);
						$unique = get_term_meta($cat->term_id, 'disclaimer_unique', true);
						$catOption = 'inherit';
						if ('yes'===$disable) {
							$catOption = 'disabled';
						} elseif (( 'no'===$disable || empty($disable) ) && 'yes'===$unique) {
							$catOption = 'active';
						} else {
							$catOption = 'inherit';
						}
						switch ($catOption) {
							case 'active':
								$heading_new=get_term_meta($cat->term_id, 'disclaimer_popup_heading_text', true);
								$heading=!empty($heading_new) ? $heading_new : $heading;
								break;
						}
					}
					break;
			}
		}
		wp_enqueue_style('wcpd-style', WCPD_URL . '/assets/css/frontend_styles.css', array(), VERSION);
		wp_enqueue_script('wcpd-script', WCPD_URL . '/assets/js/frontend_script.js', array('jquery'), VERSION, true);
		wp_localize_script(
			'wcpd-script',
			'wcpd',
			array(
			'ajaxurl'       => admin_url('admin-ajax.php'),
			'home_url'      => home_url(),
			'product_id'    => $product_id,
			'session'       => get_option('disclaimer_cookie_duration', 'session'),
			'log'           => get_option('disclaimer_log_activation'),
			'ip'            => ( isset($ipInfo['ip']) ? $ipInfo['ip'] : '' ),
			'country'       => ( isset($ipInfo['country']) ? $ipInfo['country'] : '' ),
			'city'          => ( isset($ipInfo['city']) ? $ipInfo['city'] : '' ),
			'continent'     => ( isset($ipInfo['continent']) ? $ipInfo['continent'] : '' ),
			'ajax_cart'     => ( get_option('woocommerce_enable_ajax_add_to_cart') == 'yes' ? true : false ),
			'redirect_to_cart'     => ( get_option('woocommerce_cart_redirect_after_add') == 'yes' ? true : false ),
			'site_wide'     => ( get_option('disclaimer_site_activate') == 'yes' ? true : false ),
			'ptype'         => $type,
			'heading'       => $heading,
			'reject_url'       => get_option('disclaimer_general_reject_url'),
			'custom_nonce'     => wp_create_nonce('custom_nonce')
			)
		);
	}
	add_action('wp_enqueue_scripts', 'wcpd_disclaimer_enqueue_front_scripts');
}
// Multi Languages code here //
add_action('init', 'wcpd_add_translation');
function wcpd_add_translation() {
	load_plugin_textdomain('wcpd', false, basename(dirname(__FILE__)) . '/languages/');
}
