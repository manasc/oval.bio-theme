<?php
if (!defined('ABSPATH')) {
	exit;
}  // Exit if accessed directly
if (!class_exists('WCPD_Disclaimer_Translation')) {
	class WCPD_Disclaimer_Translation {
		public function __construct() {
			add_action('init', array($this,'wcpd_add_disclaimer_translation'));
		}
		public function wcpd_add_disclaimer_translation() {
			if (function_exists('icl_register_string')) {
				// add translation for disclaimer buttons labels
				if (get_option('disclaimer_accept_button_label')) {
					icl_register_string('woocommerce-disclaimer', 'disclaimer-ok-label', get_option('disclaimer_accept_button_label'));
				} else {
					icl_register_string('woocommerce-disclaimer', 'disclaimer-ok-label', 'Accept');
				}
				if (get_option('disclaimer_reject_button_label')) {
					icl_register_string('woocommerce-disclaimer', 'disclaimer-cancel-label', get_option('disclaimer_reject_button_label'));
				} else {
					icl_register_string('woocommerce-disclaimer', 'disclaimer-cancel-label', 'Decline');
				}
				// add translation for general disclaimer
				if (get_option('disclaimer_general_message')) {
					icl_register_string('woocommerce-disclaimer', 'general-disclaimer', get_option('disclaimer_general_message'));
				}
				// add translation for woocommerce categories disclaimer
				global $wpdb;
				$terms = $wpdb->prefix . 'terms';
				$tax = $wpdb->prefix . 'term_taxonomy';
				//$query=$wpdb->prepare('SELECT * FROM {$terms} t JOIN {$tax} x ON t.term_id = x.term_id  WHERE x.taxonomy = %s AND t.category_message is not null', array('product_cat'));
				//$categories = $wpdb->query($query);

				$categories = $wpdb->get_results( $wpdb->prepare('SELECT * FROM {$terms} t JOIN {$tax} x ON t.term_id = x.term_id  WHERE x.taxonomy = %s AND t.category_message is not null', array('product_cat')), ARRAY_A );

				foreach ($categories as $category) {
					icl_register_string('woocommerce-disclaimer', 'category-disclaimer-' . $category->term_id, $category->category_message);
				}
				// add translation for woocommerce products disclaimer
				$args = array(
					'post_type'  => 'product',
					'posts_per_page' => -1,
					'meta_query' => array(
							array(
									'key'     => 'product_message',
									'value'   => '',
									'compare' => '!=',
							),
					),
				);
				$varArgs = array(
					'post_type'  => 'product_variation',
					'posts_per_page' => -1,
					'meta_query' => array(
							array(
									'key'     => '_product_message',
									'value'   => '',
									'compare' => '!=',
							),
					),
				);
				$posts = get_posts($args);
				$varPosts = get_posts($varArgs);
				foreach ($posts as $post) {
					icl_register_string('woocommerce-disclaimer', 'product-disclaimer-' . $post->ID, get_post_meta($post->ID, 'product_message', true));
				}
				foreach ($varPosts as $varPost) {
					icl_register_string('woocommerce-disclaimer', 'product-disclaimer-' . $post->ID, get_post_meta($post->ID, '_product_message', true));
				}
			}
		}
	}
	new WCPD_Disclaimer_Translation();
}
